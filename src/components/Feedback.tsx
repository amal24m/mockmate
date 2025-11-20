import { Page } from '../App';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft, TrendingUp, Lightbulb } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

interface FeedbackProps {
  onNavigate: (page: Page) => void;
}

export default function Feedback({ onNavigate }: FeedbackProps) {
  const scores = [
    { category: 'Structure', score: 85, color: '#007BFF' },
    { category: 'Communication', score: 78, color: '#00D2A8' },
    { category: 'Business Insight', score: 82, color: '#FFA500' },
    { category: 'Confidence', score: 90, color: '#9333EA' },
  ];

  const radarData = scores.map((s) => ({
    subject: s.category,
    score: s.score,
    fullMark: 100,
  }));

  const tips = [
    {
      title: 'Strengthen Your Framework',
      description: 'Consider using a more structured approach like MECE (Mutually Exclusive, Collectively Exhaustive) when breaking down problems.',
    },
    {
      title: 'Improve Quantitative Communication',
      description: 'When discussing numbers, round them appropriately and clearly state your assumptions to make calculations easier to follow.',
    },
    {
      title: 'Ask More Clarifying Questions',
      description: 'Don\'t hesitate to ask questions early in the case. Top candidates ask 3-5 clarifying questions before diving into analysis.',
    },
  ];

  const overallScore = Math.round(scores.reduce((acc, s) => acc + s.score, 0) / scores.length);

  return (
    <div className="w-[1440px] h-[900px] mx-auto bg-[#F8FAFC] overflow-y-auto">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => onNavigate('Dashboard')}
              variant="ghost"
              className="text-[#111827] hover:text-[#007BFF]"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#007BFF] flex items-center justify-center">
                <span className="text-white">M</span>
              </div>
              <span className="text-[#111827]">MockMate</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-[#111827] mb-4">
            Your Interview Feedback
          </h1>
          <p className="text-[#111827]/70">
            Here's how you performed in your Case Interview session
          </p>
        </div>

        {/* Overall Score */}
        <Card className="p-8 rounded-xl shadow-sm border-0 bg-white mb-8 text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-[#007BFF]/10 mb-4">
            <span className="text-[#007BFF]">{overallScore}</span>
          </div>
          <h2 className="text-[#111827] mb-2">Overall Performance</h2>
          <p className="text-[#111827]/70">
            Great job! You're performing at a {overallScore >= 80 ? 'strong' : 'good'} level
          </p>
        </Card>

        {/* Score Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {scores.map((score, index) => (
            <Card key={index} className="p-6 rounded-xl shadow-sm border-0 bg-white">
              <h3 className="text-[#111827] mb-4">
                {score.category}
              </h3>
              <div className="mb-4">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-[#111827]">{score.score}</span>
                  <span className="text-[#111827]/70 text-sm">/100</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${score.score}%`,
                      backgroundColor: score.color,
                    }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[#00D2A8] text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+5 from last time</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Radar Chart */}
          <Card className="p-8 rounded-xl shadow-sm border-0 bg-white">
            <h3 className="text-[#111827] mb-6">
              Performance Overview
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#E5E7EB" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#111827', fontSize: 12 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#6B7280', fontSize: 10 }} />
                <Radar name="Score" dataKey="score" stroke="#007BFF" fill="#007BFF" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </Card>

          {/* Tips */}
          <Card className="p-8 rounded-xl shadow-sm border-0 bg-white">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="w-6 h-6 text-[#FFA500]" />
              <h3 className="text-[#111827]">
                Tips for Improvement
              </h3>
            </div>
            <div className="space-y-4">
              {tips.map((tip, index) => (
                <div key={index} className="border-l-4 border-[#007BFF] pl-4">
                  <h4 className="text-[#111827] mb-1">
                    {tip.title}
                  </h4>
                  <p className="text-[#111827]/70 text-sm">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => onNavigate('Interview Type')}
            className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-8 py-6 rounded-xl"
          >
            Try Again
          </Button>
          <Button
            onClick={() => onNavigate('History')}
            variant="outline"
            className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF]/5 px-8 py-6 rounded-xl"
          >
            View History
          </Button>
        </div>
      </div>
    </div>
  );
}
