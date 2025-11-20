import { Page } from '../App';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft } from 'lucide-react';

interface TermsProps {
  onNavigate: (page: Page) => void;
}

export default function Terms({ onNavigate }: TermsProps) {
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
          <h1 className="text-[#111827] mb-4">Terms of Service</h1>
          <p className="text-[#111827]/70 mb-8">Last updated: November 13, 2025</p>

          <Card className="p-8 rounded-xl shadow-sm border-0 bg-white space-y-6">
            <div>
              <h2 className="text-[#111827] mb-4">1. Acceptance of Terms</h2>
              <p className="text-[#111827]/70 leading-relaxed">
                By accessing and using MockMate, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service.
              </p>
            </div>

            <div>
              <h2 className="text-[#111827] mb-4">2. Use License</h2>
              <p className="text-[#111827]/70 leading-relaxed mb-3">
                We grant you a limited, non-exclusive, non-transferable license to use MockMate for personal interview preparation purposes. You may not:
              </p>
              <ul className="space-y-2 text-[#111827]/70 ml-6">
                <li className="list-disc">Modify or copy the materials</li>
                <li className="list-disc">Use the materials for commercial purposes</li>
                <li className="list-disc">Reverse engineer or attempt to extract source code</li>
                <li className="list-disc">Remove any copyright or proprietary notations</li>
                <li className="list-disc">Share your account credentials with others</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#111827] mb-4">3. User Accounts</h2>
              <p className="text-[#111827]/70 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </div>

            <div>
              <h2 className="text-[#111827] mb-4">4. Subscription and Payments</h2>
              <p className="text-[#111827]/70 leading-relaxed">
                Pro subscriptions are billed monthly or annually. You may cancel your subscription at any time, but no refunds will be provided for partial months. Prices are subject to change with 30 days notice.
              </p>
            </div>

            <div>
              <h2 className="text-[#111827] mb-4">5. Content and Conduct</h2>
              <p className="text-[#111827]/70 leading-relaxed mb-3">
                You agree to use MockMate in a lawful manner and not to:
              </p>
              <ul className="space-y-2 text-[#111827]/70 ml-6">
                <li className="list-disc">Upload harmful, offensive, or illegal content</li>
                <li className="list-disc">Harass, abuse, or harm other users</li>
                <li className="list-disc">Attempt to gain unauthorized access to our systems</li>
                <li className="list-disc">Use automated tools to access the service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#111827] mb-4">6. Disclaimer</h2>
              <p className="text-[#111827]/70 leading-relaxed">
                MockMate is provided "as is" without warranties of any kind. We do not guarantee that the service will be uninterrupted or error-free. Your use of the service is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-[#111827] mb-4">7. Limitation of Liability</h2>
              <p className="text-[#111827]/70 leading-relaxed">
                MockMate shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service. Our total liability shall not exceed the amount you paid for the service in the past 12 months.
              </p>
            </div>

            <div>
              <h2 className="text-[#111827] mb-4">8. Modifications to Service</h2>
              <p className="text-[#111827]/70 leading-relaxed">
                We reserve the right to modify or discontinue the service at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
              </p>
            </div>

            <div>
              <h2 className="text-[#111827] mb-4">9. Contact Information</h2>
              <p className="text-[#111827]/70 leading-relaxed">
                For questions about these Terms of Service, please{' '}
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
