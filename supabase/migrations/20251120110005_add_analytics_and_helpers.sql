/*
  # Analytics and Helper Functions
  
  ## New Functions
  
  ### `get_user_stats`
  Returns comprehensive statistics for a user
  - Total sessions
  - Average score
  - Sessions by type
  - Recent improvement trend
  
  ### `check_interview_quota`
  Validates if user can start a new interview based on their plan
  
  ### `get_admin_dashboard_stats`
  Returns platform-wide statistics for admin dashboard
  
  ## New Views
  
  ### `user_performance_summary`
  Aggregated view of user performance metrics
  
  ### `recent_sessions_with_feedback`
  Combined view of sessions with their feedback for easy querying
*/

-- Function to get user statistics
CREATE OR REPLACE FUNCTION get_user_stats(p_user_id uuid)
RETURNS jsonb AS $$
DECLARE
  v_stats jsonb;
BEGIN
  SELECT jsonb_build_object(
    'total_sessions', COUNT(*),
    'completed_sessions', COUNT(*) FILTER (WHERE status = 'completed'),
    'average_score', ROUND(AVG(overall_score)),
    'behavioral_sessions', COUNT(*) FILTER (WHERE interview_type = 'behavioral'),
    'case_sessions', COUNT(*) FILTER (WHERE interview_type = 'case'),
    'total_practice_time', SUM(duration_seconds),
    'this_month_sessions', COUNT(*) FILTER (
      WHERE created_at >= date_trunc('month', now())
    ),
    'last_session_date', MAX(created_at),
    'improvement_trend', (
      SELECT ROUND(AVG(overall_score))
      FROM (
        SELECT overall_score
        FROM interview_sessions
        WHERE user_id = p_user_id AND status = 'completed'
        ORDER BY created_at DESC
        LIMIT 5
      ) recent
    ) - (
      SELECT ROUND(AVG(overall_score))
      FROM (
        SELECT overall_score
        FROM interview_sessions
        WHERE user_id = p_user_id AND status = 'completed'
        ORDER BY created_at
        LIMIT 5
      ) oldest
    )
  ) INTO v_stats
  FROM interview_sessions
  WHERE user_id = p_user_id AND status = 'completed';
  
  RETURN v_stats;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to check if user can start interview
CREATE OR REPLACE FUNCTION check_interview_quota(p_user_id uuid)
RETURNS jsonb AS $$
DECLARE
  v_subscription subscriptions%ROWTYPE;
  v_result jsonb;
BEGIN
  SELECT * INTO v_subscription
  FROM subscriptions
  WHERE user_id = p_user_id;
  
  IF NOT FOUND THEN
    RETURN jsonb_build_object(
      'can_start', false,
      'reason', 'No subscription found',
      'remaining', 0
    );
  END IF;
  
  IF v_subscription.plan_type = 'pro' THEN
    RETURN jsonb_build_object(
      'can_start', true,
      'reason', 'Unlimited (Pro plan)',
      'remaining', -1
    );
  END IF;
  
  IF v_subscription.monthly_interviews_used >= v_subscription.monthly_interviews_limit THEN
    RETURN jsonb_build_object(
      'can_start', false,
      'reason', 'Monthly limit reached',
      'remaining', 0,
      'resets_at', v_subscription.current_period_end
    );
  END IF;
  
  RETURN jsonb_build_object(
    'can_start', true,
    'reason', 'Within quota',
    'remaining', v_subscription.monthly_interviews_limit - v_subscription.monthly_interviews_used
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to increment interview count
CREATE OR REPLACE FUNCTION increment_interview_count(p_user_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE subscriptions
  SET monthly_interviews_used = monthly_interviews_used + 1,
      updated_at = now()
  WHERE user_id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get admin dashboard statistics
CREATE OR REPLACE FUNCTION get_admin_dashboard_stats()
RETURNS jsonb AS $$
DECLARE
  v_stats jsonb;
BEGIN
  SELECT jsonb_build_object(
    'total_users', (SELECT COUNT(*) FROM profiles),
    'pro_users', (SELECT COUNT(*) FROM subscriptions WHERE plan_type = 'pro' AND status = 'active'),
    'free_users', (SELECT COUNT(*) FROM subscriptions WHERE plan_type = 'free' AND status = 'active'),
    'total_sessions', (SELECT COUNT(*) FROM interview_sessions),
    'completed_sessions', (SELECT COUNT(*) FROM interview_sessions WHERE status = 'completed'),
    'average_score', (SELECT ROUND(AVG(overall_score)) FROM interview_sessions WHERE status = 'completed'),
    'sessions_today', (
      SELECT COUNT(*) FROM interview_sessions 
      WHERE created_at >= date_trunc('day', now())
    ),
    'sessions_this_week', (
      SELECT COUNT(*) FROM interview_sessions 
      WHERE created_at >= date_trunc('week', now())
    ),
    'sessions_this_month', (
      SELECT COUNT(*) FROM interview_sessions 
      WHERE created_at >= date_trunc('month', now())
    ),
    'new_users_this_month', (
      SELECT COUNT(*) FROM profiles 
      WHERE created_at >= date_trunc('month', now())
    ),
    'conversion_rate', (
      SELECT ROUND(
        (COUNT(*) FILTER (WHERE plan_type = 'pro' AND status = 'active')::numeric / 
         NULLIF(COUNT(*), 0)::numeric) * 100,
        2
      )
      FROM subscriptions
    )
  ) INTO v_stats;
  
  RETURN v_stats;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- View for user performance summary
CREATE OR REPLACE VIEW user_performance_summary AS
SELECT 
  p.id as user_id,
  p.email,
  p.full_name,
  s.plan_type,
  COUNT(iss.id) as total_sessions,
  COUNT(iss.id) FILTER (WHERE iss.status = 'completed') as completed_sessions,
  ROUND(AVG(iss.overall_score)) as average_score,
  MAX(iss.created_at) as last_session_date,
  SUM(iss.duration_seconds) as total_practice_time_seconds
FROM profiles p
LEFT JOIN subscriptions s ON p.id = s.user_id
LEFT JOIN interview_sessions iss ON p.id = iss.user_id
GROUP BY p.id, p.email, p.full_name, s.plan_type;

-- View for recent sessions with feedback
CREATE OR REPLACE VIEW recent_sessions_with_feedback AS
SELECT 
  iss.id as session_id,
  iss.user_id,
  p.email,
  p.full_name,
  iss.interview_type,
  iss.difficulty,
  iss.status,
  iss.duration_seconds,
  iss.overall_score,
  iss.started_at,
  iss.completed_at,
  iss.created_at,
  fb.structure_score,
  fb.communication_score,
  fb.business_insight_score,
  fb.confidence_score,
  fb.strengths,
  fb.improvement_tips,
  fb.ai_analysis
FROM interview_sessions iss
LEFT JOIN profiles p ON iss.user_id = p.id
LEFT JOIN interview_feedback fb ON iss.id = fb.session_id
ORDER BY iss.created_at DESC;

-- Grant execute permissions
GRANT EXECUTE ON FUNCTION get_user_stats(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION check_interview_quota(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION increment_interview_count(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION get_admin_dashboard_stats() TO authenticated;

-- Grant view permissions
GRANT SELECT ON user_performance_summary TO authenticated;
GRANT SELECT ON recent_sessions_with_feedback TO authenticated;
