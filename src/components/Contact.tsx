import { Page } from '../App';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { ArrowLeft, Mail, MessageSquare, Phone } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: Page) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
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
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-[#111827] mb-4">Get in Touch</h1>
            <p className="text-[#111827]/70">
              Have a question or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card className="p-6 rounded-xl shadow-sm border-0 bg-white">
                <div className="w-12 h-12 rounded-xl bg-[#007BFF]/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-[#007BFF]" />
                </div>
                <h3 className="text-[#111827] mb-2">Email</h3>
                <p className="text-[#111827]/70 text-sm mb-2">
                  Send us an email anytime
                </p>
                <a href="mailto:support@mockmate.com" className="text-[#007BFF] hover:underline text-sm">
                  support@mockmate.com
                </a>
              </Card>

              <Card className="p-6 rounded-xl shadow-sm border-0 bg-white">
                <div className="w-12 h-12 rounded-xl bg-[#00D2A8]/10 flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-[#00D2A8]" />
                </div>
                <h3 className="text-[#111827] mb-2">Live Chat</h3>
                <p className="text-[#111827]/70 text-sm mb-2">
                  Chat with our support team
                </p>
                <button className="text-[#007BFF] hover:underline text-sm">
                  Start chat
                </button>
              </Card>

              <Card className="p-6 rounded-xl shadow-sm border-0 bg-white">
                <div className="w-12 h-12 rounded-xl bg-[#FFA500]/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-[#FFA500]" />
                </div>
                <h3 className="text-[#111827] mb-2">Phone</h3>
                <p className="text-[#111827]/70 text-sm mb-2">
                  Mon-Fri from 9am to 5pm PST
                </p>
                <a href="tel:+15551234567" className="text-[#007BFF] hover:underline text-sm">
                  +1 (555) 123-4567
                </a>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="col-span-2 p-8 rounded-xl shadow-sm border-0 bg-white">
              <h2 className="text-[#111827] mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-[#111827] mb-2 block">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="rounded-xl border-gray-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-[#111827] mb-2 block">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="rounded-xl border-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#111827] mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-xl border-gray-300"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-[#111827] mb-2 block">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                    className="rounded-xl border-gray-300"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#111827] mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="rounded-xl border-gray-300 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-xl py-6"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-center text-[#111827] mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 rounded-xl shadow-sm border-0 bg-white">
                <h3 className="text-[#111827] mb-2">
                  How does the AI feedback work?
                </h3>
                <p className="text-[#111827]/70 text-sm">
                  Our AI analyzes your responses in real-time, evaluating structure, communication clarity, business acumen, and delivery. You receive detailed scores and actionable improvement tips after each session.
                </p>
              </Card>

              <Card className="p-6 rounded-xl shadow-sm border-0 bg-white">
                <h3 className="text-[#111827] mb-2">
                  Can I cancel my subscription anytime?
                </h3>
                <p className="text-[#111827]/70 text-sm">
                  Yes, you can cancel your Pro subscription at any time from your account settings. Your access will continue until the end of your billing period.
                </p>
              </Card>

              <Card className="p-6 rounded-xl shadow-sm border-0 bg-white">
                <h3 className="text-[#111827] mb-2">
                  What's the difference between Free and Pro?
                </h3>
                <p className="text-[#111827]/70 text-sm">
                  Free users get 3 interviews per month with basic feedback. Pro users get unlimited interviews, advanced AI feedback, performance analytics, and priority support.
                </p>
              </Card>

              <Card className="p-6 rounded-xl shadow-sm border-0 bg-white">
                <h3 className="text-[#111827] mb-2">
                  Is my interview data secure?
                </h3>
                <p className="text-[#111827]/70 text-sm">
                  Absolutely. All data is encrypted in transit and at rest. We never share your personal information or interview responses with third parties. See our Privacy Policy for details.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
