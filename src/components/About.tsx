import { Page } from '../App';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

export default function About({ onNavigate }: AboutProps) {
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
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 py-12">
          <h1 className="text-[#111827] mb-8">About MockMate</h1>

          <Card className="p-8 rounded-xl shadow-sm border-0 bg-white space-y-6">
            <div>
              <h2 className="text-[#111827] mb-4">Our Mission</h2>
              <p className="text-[#111827]/70 leading-relaxed">
                MockMate is dedicated to helping aspiring consultants ace their interviews through AI-powered practice and feedback. We believe that everyone deserves access to high-quality interview preparation, regardless of their background or resources.
              </p>
            </div>

            <div>
              <h2 className="text-[#111827] mb-4">What We Offer</h2>
              <p className="text-[#111827]/70 leading-relaxed">
                Our platform provides realistic mock interviews for behavioral and case study scenarios, powered by advanced AI technology. Each session is followed by detailed, actionable feedback to help you improve your structure, communication, business insight, and confidence.
              </p>
            </div>

            <div>
              <h2 className="text-[#111827] mb-4">Why Choose MockMate?</h2>
              <ul className="space-y-3 text-[#111827]/70">
                <li className="flex items-start gap-3">
                  <span className="text-[#007BFF] mt-1">•</span>
                  <span>AI-powered interviews that adapt to your responses and skill level</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#007BFF] mt-1">•</span>
                  <span>Detailed feedback on key consulting competencies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#007BFF] mt-1">•</span>
                  <span>Track your progress and identify areas for improvement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#007BFF] mt-1">•</span>
                  <span>Practice anytime, anywhere at your own pace</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#111827] mb-4">Our Team</h2>
              <p className="text-[#111827]/70 leading-relaxed">
                MockMate was founded by former consultants from top firms who understand the challenges of interview preparation. We've combined our expertise with cutting-edge AI technology to create the most effective interview practice platform available.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-[#111827]/70 leading-relaxed">
                Questions? We'd love to hear from you.{' '}
                <button
                  onClick={() => onNavigate('Contact')}
                  className="text-[#007BFF] hover:underline"
                >
                  Get in touch
                </button>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
