import { Page } from '../App';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Users, Activity, TrendingUp, DollarSign, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface AdminProps {
  onNavigate: (page: Page) => void;
}

export default function Admin({ onNavigate }: AdminProps) {
  const [filterPlan, setFilterPlan] = useState('all');

  const users = [
    { id: 1, name: 'Sarah Chen', email: 'sarah@example.com', plan: 'Pro', sessions: 24, avgScore: 85, joined: '2025-09-15' },
    { id: 2, name: 'James Wilson', email: 'james@example.com', plan: 'Free', sessions: 3, avgScore: 78, joined: '2025-10-20' },
    { id: 3, name: 'Maya Patel', email: 'maya@example.com', plan: 'Pro', sessions: 18, avgScore: 82, joined: '2025-08-10' },
    { id: 4, name: 'Alex Rodriguez', email: 'alex@example.com', plan: 'Free', sessions: 2, avgScore: 68, joined: '2025-11-01' },
    { id: 5, name: 'Emily Zhang', email: 'emily@example.com', plan: 'Pro', sessions: 31, avgScore: 88, joined: '2025-07-22' },
    { id: 6, name: 'David Kim', email: 'david@example.com', plan: 'Free', sessions: 3, avgScore: 72, joined: '2025-10-28' },
  ];

  const filteredUsers = filterPlan === 'all' 
    ? users 
    : users.filter(u => u.plan.toLowerCase() === filterPlan);

  const stats = {
    totalUsers: users.length,
    proUsers: users.filter(u => u.plan === 'Pro').length,
    totalSessions: users.reduce((acc, u) => acc + u.sessions, 0),
    avgScore: Math.round(users.reduce((acc, u) => acc + u.avgScore, 0) / users.length),
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
              Back to Dashboard
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#007BFF] flex items-center justify-center">
                <span className="text-white">M</span>
              </div>
              <span className="text-[#111827]">MockMate Admin</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 rounded-full bg-[#9333EA]/10 text-[#9333EA] text-sm">
              Admin
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="mb-8">
            <h1 className="text-[#111827] mb-2">
              Admin Dashboard
            </h1>
            <p className="text-[#111827]/70">
              Monitor platform analytics and user activity
            </p>
          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <Card className="p-6 rounded-xl shadow-sm border-0 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#007BFF]/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#007BFF]" />
                </div>
              </div>
              <p className="text-[#111827]/70 mb-2">Total Users</p>
              <p className="text-[#111827] mb-1">{stats.totalUsers}</p>
              <p className="text-sm text-[#00D2A8]">+12% this month</p>
            </Card>

            <Card className="p-6 rounded-xl shadow-sm border-0 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#00D2A8]/10 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-[#00D2A8]" />
                </div>
              </div>
              <p className="text-[#111827]/70 mb-2">Pro Users</p>
              <p className="text-[#111827] mb-1">{stats.proUsers}</p>
              <p className="text-sm text-[#00D2A8]">
                {Math.round((stats.proUsers / stats.totalUsers) * 100)}% conversion
              </p>
            </Card>

            <Card className="p-6 rounded-xl shadow-sm border-0 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFA500]/10 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-[#FFA500]" />
                </div>
              </div>
              <p className="text-[#111827]/70 mb-2">Total Sessions</p>
              <p className="text-[#111827] mb-1">{stats.totalSessions}</p>
              <p className="text-sm text-[#00D2A8]">+18 today</p>
            </Card>

            <Card className="p-6 rounded-xl shadow-sm border-0 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#9333EA]/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#9333EA]" />
                </div>
              </div>
              <p className="text-[#111827]/70 mb-2">Average Score</p>
              <p className="text-[#111827] mb-1">{stats.avgScore}/100</p>
              <p className="text-sm text-[#00D2A8]">+3 points</p>
            </Card>
          </div>

          {/* Users Table */}
          <Card className="rounded-xl shadow-sm border-0 bg-white">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-[#111827]">
                User Management
              </h3>
              <div className="w-48">
                <Select value={filterPlan} onValueChange={setFilterPlan}>
                  <SelectTrigger className="bg-white rounded-xl border-gray-300">
                    <SelectValue placeholder="Filter by plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Plans</SelectItem>
                    <SelectItem value="pro">Pro Users</SelectItem>
                    <SelectItem value="free">Free Users</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#F8FAFC] border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-[#111827]">User</th>
                    <th className="px-6 py-4 text-left text-[#111827]">Plan</th>
                    <th className="px-6 py-4 text-left text-[#111827]">Sessions</th>
                    <th className="px-6 py-4 text-left text-[#111827]">Avg Score</th>
                    <th className="px-6 py-4 text-left text-[#111827]">Joined</th>
                    <th className="px-6 py-4 text-left text-[#111827]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b border-gray-100 hover:bg-[#F8FAFC] transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-[#111827]">{user.name}</p>
                          <p className="text-[#111827]/60 text-sm">{user.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                            user.plan === 'Pro'
                              ? 'bg-[#007BFF]/10 text-[#007BFF]'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {user.plan}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[#111827]">{user.sessions}</td>
                      <td className="px-6 py-4">
                        <span className="text-[#111827]">{user.avgScore}/100</span>
                      </td>
                      <td className="px-6 py-4 text-[#111827]/70">
                        {new Date(user.joined).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <Button
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
        </div>
      </div>
    </div>
  );
}
