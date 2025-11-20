import { Page } from '../App';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { MessageSquare, Briefcase, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface InterviewTypeProps {
  onNavigate: (page: Page) => void;
}

export default function InterviewType({ onNavigate }: InterviewTypeProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState('intermediate');

  const interviewTypes = [
    {
      id: 'behavioral',
      title: 'Behavioral Interview',
      description: 'Practice common behavioral questions focused on leadership, teamwork, and problem-solving scenarios.',
      icon: <MessageSquare className="w-12 h-12" />,
    },
    {
      id: 'case',
      title: 'Case Interview',
      description: 'Tackle business case studies with market sizing, profitability analysis, and strategic recommendations.',
      icon: <Briefcase className="w-12 h-12" />,
    },
  ];

  return (
    <div className="w-[1440px] h-[900px] mx-auto bg-[#F8FAFC] flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => onNavigate('Landing')}
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
          <div className="flex items-center gap-4">
            <Button
              onClick={() => onNavigate('Dashboard')}
              variant="ghost"
              className="text-[#111827] hover:text-[#007BFF]"
            >
              Dashboard
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-[#111827] mb-4">
              Choose Your Interview Type
            </h1>
            <p className="text-[#111827]/70">
              Select the type of interview you want to practice and set your difficulty level
            </p>
          </div>

          {/* Interview Type Cards */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {interviewTypes.map((type) => (
              <Card
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-8 rounded-xl cursor-pointer transition-all border-2 ${
                  selectedType === type.id
                    ? 'border-[#007BFF] bg-[#007BFF]/5 shadow-lg'
                    : 'border-transparent bg-white shadow-sm hover:shadow-md'
                }`}
              >
                <div
                  className={`w-20 h-20 rounded-xl flex items-center justify-center mb-6 ${
                    selectedType === type.id
                      ? 'bg-[#007BFF] text-white'
                      : 'bg-[#007BFF]/10 text-[#007BFF]'
                  }`}
                >
                  {type.icon}
                </div>
                <h3 className="text-[#111827] mb-3">
                  {type.title}
                </h3>
                <p className="text-[#111827]/70">
                  {type.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Difficulty Selection */}
          <div className="mb-8">
            <label className="block text-[#111827] mb-3">
              Select Difficulty Level
            </label>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger className="w-full bg-white rounded-xl border-gray-300 h-14">
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner - Entry Level</SelectItem>
                <SelectItem value="intermediate">Intermediate - Experienced</SelectItem>
                <SelectItem value="advanced">Advanced - Senior Level</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Start Button */}
          <Button
            onClick={() => onNavigate('Interview Session')}
            disabled={!selectedType}
            className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white py-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Start Interview
          </Button>

          {!selectedType && (
            <p className="text-center text-[#111827]/60 mt-4 text-sm">
              Please select an interview type to continue
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
