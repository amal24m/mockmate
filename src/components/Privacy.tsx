import { Page } from '../App';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft } from 'lucide-react';

interface PrivacyProps {
  onNavigate: (page: Page) => void;
}

export default function Privacy({ onNavigate }: PrivacyProps) {
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
          <h1 className="text-[#111827] mb-4">Privacy Policy</h1>
          <p className="text-[#111827]/70 mb-8">Last updated: November 13, 2025</p>

          <Card className="p-8 rounded-xl shadow-sm border-0 bg-white space-y-6">
            <div>
              <h2 className="text-[#111827] mb-4">1. Information We Collect</h2>
              <p className="text-[#111827]/70 leading-relaxed mb-3">
                We collect information you provide directly to us, including:
              </p>
              <ul className="space-y-2 text-[#111827]/70 ml-6">
                <li className="list-disc">Account information (name, email, password)</li>
                <li className="list-disc">Interview session data (transcripts, responses, scores)</li>
                <li className="list-disc">Usage data (features used, time spent, preferences)</li>
                <li className="list-disc">Payment information (processed securely by third-party providers)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#111827] mb-4">2. How We Use Your Information</h2>
              <p className="text-[#111827]/70 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-[#111827]/70 ml-6">
                <li className="list-disc">Provide and improve our interview preparation services</li>
                <li className="list-disc">Generate personalized feedback and recommendations</li>
                <li className="list-disc">Track your progress and performance over time</li>
                <li className="list-disc">Communicate with you about updates and features</li>
                <li className="list-disc">Process payments and prevent fraud</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#111827] mb-4">3. Data Security</h2>
              <p className="text-[#111827]/70 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information. All data is encrypted in transit and at rest. We regularly review our security practices to ensure your information remains safe.
              </p>
            </div>

            <div>
              <h2 className="text-[#111827] mb-4">4. Data Sharing</h2>
              <p className="text-[#111827]/70 leading-relaxed">
                We do not sell or share your personal information with third parties for marketing purposes. We may share data with service providers who help us operate our platform, but only to the extent necessary and under strict confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-[#111827] mb-4">5. Your Rights</h2>
              <p className="text-[#111827]/70 leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="space-y-2 text-[#111827]/70 ml-6">
                <li className="list-disc">Access and download your personal data</li>
                <li className="list-disc">Request correction of inaccurate information</li>
                <li className="list-disc">Delete your account and associated data</li>
                <li className="list-disc">Opt out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#111827] mb-4">6. Cookies</h2>
              <p className="text-[#111827]/70 leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and remember your preferences. You can control cookie settings through your browser.
              </p>
            </div>

            <div>
              <h2 className="text-[#111827] mb-4">7. Contact Us</h2>
              <p className="text-[#111827]/70 leading-relaxed">
                If you have questions about this Privacy Policy, please{' '}
                <button
                  onClick={() => onNavigate('Contact')}
                  className="text-[#007BFF] hover:underline"
                >
                  contact us
                </button>
                .
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
