import { Page } from '../App';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Target, TrendingUp, Award, Play, History, Settings } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  const trendData = [
    { date: 'Oct 1', score: 65 },
    { date: 'Oct 8', score: 68 },
    { date: 'Oct 15', score: 72 },
    { date: 'Oct 22', score: 70 },
    { date: 'Oct 29', score: 75 },
    { date: 'Nov 5', score: 78 },
    { date: 'Nov 12', score: 82 },
  ];

  const recentSessions = [
    { date: 'Nov 10, 2025', type: 'Case Interview', score: 85 },
    { date: 'Nov 8, 2025', type: 'Behavioral', score: 78 },
    { date: 'Nov 5, 2025', type: 'Case Interview', score: 72 },
  ];

  return (
    <div className="w-[1440px] h-[900px] mx-auto bg-[#F8FAFC] flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-[#007BFF] flex items-center justify-center">
              <span className="text-white">M</span>
            </div>
            <span className="text-[#111827]">MockMate</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('Dashboard')} className="text-[#007BFF]">
              Dashboard
            </button>
            <button onClick={() => onNavigate('History')} className="text-[#111827] hover:text-[#007BFF] transition-colors">
              History
            </button>
            <button onClick={() => onNavigate('Pricing')} className="text-[#111827] hover:text-[#007BFF] transition-colors">
              Pricing
            </button>
            <div className="w-10 h-10 rounded-full bg-[#007BFF]/10 flex items-center justify-center cursor-pointer">
              <span className="text-[#007BFF]">JD</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-[#111827] mb-2">
              Welcome back, John!
            </h1>
            <p className="text-[#111827]/70">
              Here's your interview preparation progress
            </p>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <Card className="p-6 rounded-xl shadow-sm border-0 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#007BFF]/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#007BFF]" />
                </div>
                <span className="text-sm text-[#00D2A8]">+2 this week</span>
              </div>
              <p className="text-[#111827]/70 mb-2">Total Interviews</p>
              <p className="text-[#111827]">24</p>
            </Card>

            <Card className="p-6 rounded-xl shadow-sm border-0 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#00D2A8]/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#00D2A8]" />
                </div>
                <span className="text-sm text-[#00D2A8]">+8 points</span>
              </div>
              <p className="text-[#111827]/70 mb-2">Average Score</p>
              <p className="text-[#111827]">77/100</p>
            </Card>

            <Card className="p-6 rounded-xl shadow-sm border-0 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFA500]/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#FFA500]" />
                </div>
                <span className="text-sm text-[#00D2A8]">↑ 12%</span>
              </div>
              <p className="text-[#111827]/70 mb-2">Improvement</p>
              <p className="text-[#111827]">+12%</p>
            </Card>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Trend Chart */}
            <Card className="col-span-2 p-8 rounded-xl shadow-sm border-0 bg-white">
              <h3 className="text-[#111827] mb-6">
                Performance Trend
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="date" tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <YAxis domain={[0, 100]} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#007BFF" 
                    strokeWidth={3}
                    dot={{ fill: '#007BFF', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Quick Actions */}
            <Card className="p-8 rounded-xl shadow-sm border-0 bg-white">
              <h3 className="text-[#111827] mb-6">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button
                  onClick={() => onNavigate('Interview Type')}
                  className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-xl justify-start py-6"
                >
                  <Play className="w-5 h-5 mr-3" />
                  Start New Interview
                </Button>
                <Button
                  onClick={() => onNavigate('History')}
                  variant="outline"
                  className="w-full border-gray-300 text-[#111827] hover:bg-gray-50 rounded-xl justify-start py-6"
                >
                  <History className="w-5 h-5 mr-3" />
                  View History
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-[#111827] hover:bg-gray-50 rounded-xl justify-start py-6"
                >
                  <Settings className="w-5 h-5 mr-3" />
                  Settings
                </Button>
              </div>

              {/* Upgrade Prompt */}
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-[#007BFF]/10 to-[#00D2A8]/10 border border-[#007BFF]/20">
                <p className="text-sm text-[#111827] mb-3">
                  Upgrade to Pro for unlimited interviews and advanced analytics
                </p>
                <Button
                  onClick={() => onNavigate('Pricing')}
                  className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-lg text-sm py-2"
                >
                  Upgrade Now
                </Button>
              </div>
            </Card>
          </div>

          {/* Recent Sessions */}
          <Card className="mt-8 p-8 rounded-xl shadow-sm border-0 bg-white">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[#111827]">
                Recent Sessions
              </h3>
              <Button
                onClick={() => onNavigate('History')}
                variant="ghost"
                className="text-[#007BFF] hover:bg-[#007BFF]/5"
              >
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentSessions.map((session, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#F8FAFC] hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => onNavigate('Feedback')}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#007BFF]/10 flex items-center justify-center">
                      <Play className="w-6 h-6 text-[#007BFF]" />
                    </div>
                    <div>
                      <p className="text-[#111827]">{session.type}</p>
                      <p className="text-[#111827]/60 text-sm">{session.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-2 rounded-full bg-[#00D2A8]/10 text-[#00D2A8]">
                      Score: {session.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
