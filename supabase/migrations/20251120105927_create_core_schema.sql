/*
  # MockMate Core Database Schema
  
  ## Overview
  Complete database schema for the MockMate consulting interview platform, including user management,
  interview sessions, feedback, and subscription management.
  
  ## New Tables
  
  ### `profiles`
  Extended user profile information
  - `id` (uuid, pk, references auth.users)
  - `email` (text, unique)
  - `full_name` (text)
  - `avatar_url` (text, nullable)
  - `role` (text) - 'user' or 'admin'
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### `subscriptions`
  User subscription and plan management
  - `id` (uuid, pk)
  - `user_id` (uuid, fk -> profiles)
  - `plan_type` (text) - 'free' or 'pro'
  - `status` (text) - 'active', 'cancelled', 'expired'
  - `current_period_start` (timestamptz)
  - `current_period_end` (timestamptz)
  - `monthly_interviews_used` (integer)
  - `monthly_interviews_limit` (integer)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### `interview_sessions`
  Individual interview session records
  - `id` (uuid, pk)
  - `user_id` (uuid, fk -> profiles)
  - `interview_type` (text) - 'behavioral' or 'case'
  - `difficulty` (text) - 'beginner', 'intermediate', 'advanced'
  - `status` (text) - 'in_progress', 'completed', 'abandoned'
  - `duration_seconds` (integer)
  - `overall_score` (integer, 0-100)
  - `started_at` (timestamptz)
  - `completed_at` (timestamptz, nullable)
  - `created_at` (timestamptz)
  
  ### `interview_transcripts`
  Transcript entries for interview sessions
  - `id` (uuid, pk)
  - `session_id` (uuid, fk -> interview_sessions)
  - `speaker` (text) - 'ai' or 'user'
  - `content` (text)
  - `timestamp_seconds` (integer)
  - `created_at` (timestamptz)
  
  ### `interview_feedback`
  Detailed feedback and scoring for sessions
  - `id` (uuid, pk)
  - `session_id` (uuid, fk -> interview_sessions, unique)
  - `structure_score` (integer, 0-100)
  - `communication_score` (integer, 0-100)
  - `business_insight_score` (integer, 0-100)
  - `confidence_score` (integer, 0-100)
  - `strengths` (jsonb) - array of strength descriptions
  - `improvement_tips` (jsonb) - array of improvement suggestions
  - `ai_analysis` (text)
  - `created_at` (timestamptz)
  
  ## Security
  - RLS enabled on all tables
  - Users can only access their own data
  - Admins can access all data
  - Secure policies for read/write operations
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text,
  avatar_url text,
  role text NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  plan_type text NOT NULL DEFAULT 'free' CHECK (plan_type IN ('free', 'pro')),
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired')),
  current_period_start timestamptz DEFAULT now(),
  current_period_end timestamptz,
  monthly_interviews_used integer DEFAULT 0,
  monthly_interviews_limit integer DEFAULT 3,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Create interview_sessions table
CREATE TABLE IF NOT EXISTS interview_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  interview_type text NOT NULL CHECK (interview_type IN ('behavioral', 'case')),
  difficulty text NOT NULL CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
  status text NOT NULL DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed', 'abandoned')),
  duration_seconds integer DEFAULT 0,
  overall_score integer CHECK (overall_score >= 0 AND overall_score <= 100),
  started_at timestamptz DEFAULT now(),
  completed_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE interview_sessions ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_interview_sessions_user_id ON interview_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_interview_sessions_status ON interview_sessions(status);
CREATE INDEX IF NOT EXISTS idx_interview_sessions_created_at ON interview_sessions(created_at DESC);

-- Create interview_transcripts table
CREATE TABLE IF NOT EXISTS interview_transcripts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid NOT NULL REFERENCES interview_sessions(id) ON DELETE CASCADE,
  speaker text NOT NULL CHECK (speaker IN ('ai', 'user')),
  content text NOT NULL,
  timestamp_seconds integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE interview_transcripts ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_interview_transcripts_session_id ON interview_transcripts(session_id);
CREATE INDEX IF NOT EXISTS idx_interview_transcripts_created_at ON interview_transcripts(created_at);

-- Create interview_feedback table
CREATE TABLE IF NOT EXISTS interview_feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid NOT NULL REFERENCES interview_sessions(id) ON DELETE CASCADE UNIQUE,
  structure_score integer CHECK (structure_score >= 0 AND structure_score <= 100),
  communication_score integer CHECK (communication_score >= 0 AND communication_score <= 100),
  business_insight_score integer CHECK (business_insight_score >= 0 AND business_insight_score <= 100),
  confidence_score integer CHECK (confidence_score >= 0 AND confidence_score <= 100),
  strengths jsonb DEFAULT '[]'::jsonb,
  improvement_tips jsonb DEFAULT '[]'::jsonb,
  ai_analysis text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE interview_feedback ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_interview_feedback_session_id ON interview_feedback(session_id);

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
  ON profiles FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- RLS Policies for subscriptions
CREATE POLICY "Users can view own subscription"
  ON subscriptions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own subscription"
  ON subscriptions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view all subscriptions"
  ON subscriptions FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

CREATE POLICY "System can insert subscriptions"
  ON subscriptions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for interview_sessions
CREATE POLICY "Users can view own sessions"
  ON interview_sessions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own sessions"
  ON interview_sessions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sessions"
  ON interview_sessions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view all sessions"
  ON interview_sessions FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- RLS Policies for interview_transcripts
CREATE POLICY "Users can view own transcripts"
  ON interview_transcripts FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM interview_sessions
      WHERE interview_sessions.id = interview_transcripts.session_id
      AND interview_sessions.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert own transcripts"
  ON interview_transcripts FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM interview_sessions
      WHERE interview_sessions.id = interview_transcripts.session_id
      AND interview_sessions.user_id = auth.uid()
    )
  );

-- RLS Policies for interview_feedback
CREATE POLICY "Users can view own feedback"
  ON interview_feedback FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM interview_sessions
      WHERE interview_sessions.id = interview_feedback.session_id
      AND interview_sessions.user_id = auth.uid()
    )
  );

CREATE POLICY "System can insert feedback"
  ON interview_feedback FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM interview_sessions
      WHERE interview_sessions.id = interview_feedback.session_id
      AND interview_sessions.user_id = auth.uid()
    )
  );

-- Function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (id, email, full_name)
  VALUES (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name'
  );
  
  INSERT INTO subscriptions (user_id, plan_type, monthly_interviews_limit)
  VALUES (new.id, 'free', 3);
  
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_subscriptions_updated_at ON subscriptions;
CREATE TRIGGER update_subscriptions_updated_at
  BEFORE UPDATE ON subscriptions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to reset monthly interview count
CREATE OR REPLACE FUNCTION reset_monthly_interviews()
RETURNS void AS $$
BEGIN
  UPDATE subscriptions
  SET monthly_interviews_used = 0
  WHERE current_period_end < now()
  AND status = 'active';
  
  UPDATE subscriptions
  SET current_period_start = now(),
      current_period_end = now() + interval '1 month'
  WHERE current_period_end < now()
  AND status = 'active';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
