import { Page } from '../App';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ArrowLeft, FileText, TrendingUp, Calendar } from 'lucide-react';
import { useState } from 'react';

interface HistoryProps {
  onNavigate: (page: Page) => void;
}

export default function History({ onNavigate }: HistoryProps) {
  const [filter, setFilter] = useState('all');

  const sessions = [
    {
      id: 1,
      date: '2025-11-10',
      type: 'Case Interview',
      difficulty: 'Intermediate',
      score: 85,
      duration: '45 min',
    },
    {
      id: 2,
      date: '2025-11-08',
      type: 'Behavioral Interview',
      difficulty: 'Advanced',
      score: 78,
      duration: '30 min',
    },
    {
      id: 3,
      date: '2025-11-05',
      type: 'Case Interview',
      difficulty: 'Beginner',
      score: 72,
      duration: '40 min',
    },
    {
      id: 4,
      date: '2025-11-01',
      type: 'Behavioral Interview',
      difficulty: 'Intermediate',
      score: 68,
      duration: '35 min',
    },
    {
      id: 5,
      date: '2025-10-28',
      type: 'Case Interview',
      difficulty: 'Advanced',
      score: 82,
      duration: '50 min',
    },
  ];

  const filteredSessions = filter === 'all' 
    ? sessions 
    : sessions.filter(s => s.type.toLowerCase().includes(filter.toLowerCase()));

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-[#00D2A8]';
    if (score >= 70) return 'text-[#FFA500]';
    return 'text-red-500';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-[#00D2A8]/10';
    if (score >= 70) return 'bg-[#FFA500]/10';
    return 'bg-red-50';
  };

  return (
    <div className="w-[1440px] h-[900px] mx-auto bg-[#F8FAFC] flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => onNavigate('Dashboard')}
              variant="ghost"
              className="text-[#111827] hover:text-[#007BFF]"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#007BFF] flex items-center justify-center">
                <span className="text-white">M</span>
              </div>
              <span className="text-[#111827]">MockMate</span>
            </div>
          </div>
          <Button
            onClick={() => onNavigate('Interview Type')}
            className="bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-xl"
          >
            New Interview
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-[#111827] mb-2">
                Interview History
              </h1>
              <p className="text-[#111827]/70">
                Review your past interview sessions and track your progress
              </p>
            </div>
            <div className="w-64">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="bg-white rounded-xl border-gray-300">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Interviews</SelectItem>
                  <SelectItem value="case">Case Interviews</SelectItem>
                  <SelectItem value="behavioral">Behavioral Interviews</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <Card className="p-6 rounded-xl shadow-sm border-0 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#111827]/70 mb-1">Total Sessions</p>
                  <p className="text-[#111827]">{sessions.length}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#007BFF]/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#007BFF]" />
                </div>
              </div>
            </Card>
            <Card className="p-6 rounded-xl shadow-sm border-0 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#111827]/70 mb-1">Average Score</p>
                  <p className="text-[#111827]">77</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#00D2A8]/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#00D2A8]" />
                </div>
              </div>
            </Card>
            <Card className="p-6 rounded-xl shadow-sm border-0 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#111827]/70 mb-1">This Month</p>
                  <p className="text-[#111827]">4 sessions</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#FFA500]/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#FFA500]" />
                </div>
              </div>
            </Card>
          </div>

          {/* Sessions Table */}
          {filteredSessions.length > 0 ? (
            <Card className="rounded-xl shadow-sm border-0 bg-white overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#F8FAFC] border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-[#111827]">Date</th>
                      <th className="px-6 py-4 text-left text-[#111827]">Interview Type</th>
                      <th className="px-6 py-4 text-left text-[#111827]">Difficulty</th>
                      <th className="px-6 py-4 text-left text-[#111827]">Duration</th>
                      <th className="px-6 py-4 text-left text-[#111827]">Score</th>
                      <th className="px-6 py-4 text-left text-[#111827]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSessions.map((session) => (
                      <tr key={session.id} className="border-b border-gray-100 hover:bg-[#F8FAFC] transition-colors">
                        <td className="px-6 py-4 text-[#111827]/70">
                          {new Date(session.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </td>
                        <td className="px-6 py-4 text-[#111827]">{session.type}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#007BFF]/10 text-[#007BFF]">
                            {session.difficulty}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-[#111827]/70">{session.duration}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-sm ${getScoreBgColor(session.score)} ${getScoreColor(session.score)}`}>
                              {session.score}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <Button
                            onClick={() => onNavigate('Feedback')}
                            variant="ghost"
                            className="text-[#007BFF] hover:bg-[#007BFF]/5"
                          >
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          ) : (
            <Card className="p-16 rounded-xl shadow-sm border-0 bg-white text-center">
              <div className="w-24 h-24 rounded-full bg-[#007BFF]/10 flex items-center justify-center mx-auto mb-6">
                <FileText className="w-12 h-12 text-[#007BFF]" />
              </div>
              <h3 className="text-[#111827] mb-2">
                No Interview History
              </h3>
              <p className="text-[#111827]/70 mb-8 max-w-md mx-auto">
                You haven't completed any interviews yet. Start your first mock interview to begin tracking your progress.
              </p>
              <Button
                onClick={() => onNavigate('Interview Type')}
                className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-8 rounded-xl"
              >
                Start Your First Interview
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
