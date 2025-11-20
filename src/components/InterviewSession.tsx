import { Page } from '../App';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Mic, Square, Play, Pause, Volume2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface InterviewSessionProps {
  onNavigate: (page: Page) => void;
}

export default function InterviewSession({ onNavigate }: InterviewSessionProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRecording && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRecording, isPaused]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const transcriptItems = [
    { speaker: 'AI Interviewer', text: 'Welcome to your mock consulting interview. Let\'s begin with a market sizing question. How would you estimate the size of the coffee shop market in Seattle?' },
    { speaker: 'You', text: 'Thank you. I\'d like to start by clarifying a few assumptions. Are we talking about the total revenue or the number of coffee shops?' },
    { speaker: 'AI Interviewer', text: 'Great clarification. Let\'s focus on total annual revenue.' },
    { speaker: 'You', text: 'Perfect. Let me structure my approach. I\'ll estimate the population of Seattle, determine the percentage who drink coffee regularly, calculate average spending, and then aggregate to get the total market size.' },
  ];

  return (
    <div className="w-[1440px] h-[900px] mx-auto bg-[#F8FAFC] flex flex-col">
      {/* Top Bar */}
      <div className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-[#007BFF] flex items-center justify-center">
              <span className="text-white">M</span>
            </div>
            <span className="text-[#111827]">MockMate</span>
          </div>
          <div className="h-6 w-px bg-gray-300"></div>
          <span className="text-[#111827]/70">Case Interview - Intermediate</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#00D2A8] animate-pulse"></div>
            <span className="text-[#111827]">{formatTime(time)}</span>
          </div>
          <Button
            onClick={() => onNavigate('Feedback')}
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-50 rounded-xl"
          >
            <Square className="w-4 h-4 mr-2" />
            End Session
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex gap-6 p-8 overflow-hidden">
        {/* Left Section - Interview Area */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <Card className="w-full max-w-2xl p-12 rounded-xl shadow-sm border-0 bg-white text-center">
            <h2 className="text-[#111827] mb-8">
              {isRecording ? 'Listening...' : 'Ready to Start'}
            </h2>

            {/* Circular Mic Button */}
            <button
              onClick={() => {
                setIsRecording(!isRecording);
                setIsPaused(false);
              }}
              className={`w-48 h-48 rounded-full mx-auto mb-8 flex items-center justify-center transition-all ${
                isRecording
                  ? 'bg-[#00D2A8] hover:bg-[#00b894] shadow-lg shadow-[#00D2A8]/30'
                  : 'bg-[#007BFF] hover:bg-[#0056b3] shadow-lg shadow-[#007BFF]/30'
              }`}
            >
              <Mic className="w-20 h-20 text-white" />
            </button>

            {/* Waveform Area */}
            {isRecording && !isPaused && (
              <div className="flex items-center justify-center gap-1 h-16 mb-8">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-[#007BFF] rounded-full animate-pulse"
                    style={{
                      height: `${Math.random() * 60 + 20}%`,
                      animationDelay: `${i * 0.05}s`,
                    }}
                  ></div>
                ))}
              </div>
            )}

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              {isRecording && (
                <Button
                  onClick={() => setIsPaused(!isPaused)}
                  variant="outline"
                  className="rounded-xl border-[#007BFF] text-[#007BFF]"
                >
                  {isPaused ? (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Resume
                    </>
                  ) : (
                    <>
                      <Pause className="w-4 h-4 mr-2" />
                      Pause
                    </>
                  )}
                </Button>
              )}
              <Button
                variant="outline"
                className="rounded-xl border-gray-300 text-[#111827]"
              >
                <Volume2 className="w-4 h-4 mr-2" />
                Audio Settings
              </Button>
            </div>
          </Card>
        </div>

        {/* Right Section - Live Transcript */}
        <Card className="w-[400px] rounded-xl shadow-sm border-0 bg-white flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-[#111827]">
              Live Transcript
            </h3>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {transcriptItems.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className={`text-sm ${
                  item.speaker === 'You' ? 'text-[#007BFF]' : 'text-[#00D2A8]'
                }`}>
                  {item.speaker}
                </div>
                <div className="text-[#111827]/80 text-sm">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
