import { Page } from '../App';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft, CheckCircle, X } from 'lucide-react';

interface PricingProps {
  onNavigate: (page: Page) => void;
}

export default function Pricing({ onNavigate }: PricingProps) {
  const features = [
    { name: 'Mock Interviews per Month', free: '3', pro: 'Unlimited' },
    { name: 'Interview Types', free: 'All types', pro: 'All types' },
    { name: 'AI Feedback Quality', free: 'Basic', pro: 'Advanced & Detailed' },
    { name: 'Performance Analytics', free: false, pro: true },
    { name: 'Interview History', free: 'Last 5', pro: 'Unlimited' },
    { name: 'Progress Tracking', free: false, pro: true },
    { name: 'Export Feedback PDF', free: false, pro: true },
    { name: 'Priority Support', free: false, pro: true },
    { name: 'Custom Practice Plans', free: false, pro: true },
  ];

  return (
    <div className="w-[1440px] h-[900px] mx-auto bg-[#F8FAFC] overflow-y-auto">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
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
              onClick={() => onNavigate('Login')}
              variant="ghost"
              className="text-[#111827] hover:text-[#007BFF]"
            >
              Login
            </Button>
            <Button
              onClick={() => onNavigate('Signup')}
              className="bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-xl"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-[#111827] mb-4">
            Choose Your Plan
          </h1>
          <p className="text-[#111827]/70 max-w-2xl mx-auto">
            Start with our free plan or upgrade to Pro for unlimited interviews and advanced features
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Free Plan */}
          <Card className="p-8 rounded-xl shadow-sm border-0 bg-white">
            <div className="mb-6">
              <h2 className="text-[#111827] mb-2">Free</h2>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-[#111827]">$0</span>
                <span className="text-[#111827]/70">/month</span>
              </div>
              <p className="text-[#111827]/70">
                Perfect for getting started with interview practice
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-[#111827]">
                <CheckCircle className="w-5 h-5 text-[#00D2A8] flex-shrink-0" />
                3 mock interviews per month
              </li>
              <li className="flex items-center gap-3 text-[#111827]">
                <CheckCircle className="w-5 h-5 text-[#00D2A8] flex-shrink-0" />
                Access to all interview types
              </li>
              <li className="flex items-center gap-3 text-[#111827]">
                <CheckCircle className="w-5 h-5 text-[#00D2A8] flex-shrink-0" />
                Basic AI feedback
              </li>
              <li className="flex items-center gap-3 text-[#111827]">
                <CheckCircle className="w-5 h-5 text-[#00D2A8] flex-shrink-0" />
                Last 5 sessions history
              </li>
            </ul>

            <Button
              onClick={() => onNavigate('Signup')}
              variant="outline"
              className="w-full rounded-xl border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF]/5 py-6"
            >
              Get Started Free
            </Button>
          </Card>

          {/* Pro Plan */}
          <Card className="p-8 rounded-xl shadow-lg border-2 border-[#007BFF] bg-white relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00D2A8] text-white px-6 py-1 rounded-full">
              Most Popular
            </div>

            <div className="mb-6">
              <h2 className="text-[#111827] mb-2">Pro</h2>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-[#111827]">$29</span>
                <span className="text-[#111827]/70">/month</span>
              </div>
              <p className="text-[#111827]/70">
                For serious candidates preparing for top consulting firms
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-[#111827]">
                <CheckCircle className="w-5 h-5 text-[#00D2A8] flex-shrink-0" />
                Unlimited mock interviews
              </li>
              <li className="flex items-center gap-3 text-[#111827]">
                <CheckCircle className="w-5 h-5 text-[#00D2A8] flex-shrink-0" />
                Access to all interview types
              </li>
              <li className="flex items-center gap-3 text-[#111827]">
                <CheckCircle className="w-5 h-5 text-[#00D2A8] flex-shrink-0" />
                Advanced AI feedback & insights
              </li>
              <li className="flex items-center gap-3 text-[#111827]">
                <CheckCircle className="w-5 h-5 text-[#00D2A8] flex-shrink-0" />
                Unlimited interview history
              </li>
              <li className="flex items-center gap-3 text-[#111827]">
                <CheckCircle className="w-5 h-5 text-[#00D2A8] flex-shrink-0" />
                Performance analytics dashboard
              </li>
              <li className="flex items-center gap-3 text-[#111827]">
                <CheckCircle className="w-5 h-5 text-[#00D2A8] flex-shrink-0" />
                Export feedback as PDF
              </li>
              <li className="flex items-center gap-3 text-[#111827]">
                <CheckCircle className="w-5 h-5 text-[#00D2A8] flex-shrink-0" />
                Priority email support
              </li>
              <li className="flex items-center gap-3 text-[#111827]">
                <CheckCircle className="w-5 h-5 text-[#00D2A8] flex-shrink-0" />
                Custom practice plans
              </li>
            </ul>

            <Button
              onClick={() => onNavigate('Signup')}
              className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-xl py-6"
            >
              Upgrade to Pro
            </Button>
          </Card>
        </div>

        {/* Feature Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-[#111827] mb-8">
            Detailed Comparison
          </h2>
          <Card className="rounded-xl shadow-sm border-0 bg-white overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#F8FAFC] border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-[#111827]">Feature</th>
                  <th className="px-6 py-4 text-center text-[#111827]">Free</th>
                  <th className="px-6 py-4 text-center text-[#111827]">Pro</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="px-6 py-4 text-[#111827]">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.free === 'boolean' ? (
                        feature.free ? (
                          <CheckCircle className="w-5 h-5 text-[#00D2A8] mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-[#111827]/70">{feature.free}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.pro === 'boolean' ? (
                        feature.pro ? (
                          <CheckCircle className="w-5 h-5 text-[#00D2A8] mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-[#111827]">{feature.pro}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>

        {/* FAQ or Additional Info */}
        <div className="text-center mt-16">
          <p className="text-[#111827]/70 mb-4">
            Have questions about our plans?
          </p>
          <Button
            onClick={() => onNavigate('Contact')}
            variant="outline"
            className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF]/5 rounded-xl"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
