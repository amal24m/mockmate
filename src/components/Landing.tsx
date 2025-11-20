import { Page } from '../App';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowRight, CheckCircle, MessageSquare, BarChart, Star, Play, Users, Award, Zap, Shield, TrendingUp, Sparkles } from 'lucide-react';

interface LandingProps {
  onNavigate: (page: Page) => void;
}

export default function Landing({ onNavigate }: LandingProps) {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Choose Interview Type',
      description: 'Select from behavioral, case study, or technical interviews tailored to consulting roles.',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Practice with AI',
      description: 'Engage in realistic mock interviews powered by advanced AI that adapts to your responses.',
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Get Detailed Feedback',
      description: 'Receive actionable insights on structure, communication, and business acumen.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'McKinsey Consultant',
      image: 'SC',
      content: 'MockMate helped me land my dream consulting job. The AI feedback was incredibly detailed and actionable.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'BCG Associate',
      image: 'JW',
      content: 'The case interview practice is phenomenal. It felt just like the real thing and boosted my confidence.',
      rating: 5,
    },
    {
      name: 'Maya Patel',
      role: 'Bain Analyst',
      image: 'MP',
      content: 'I improved my interview skills by 40% in just two weeks. The structured feedback made all the difference.',
      rating: 5,
    },
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '10,000+', label: 'Users Prepared' },
    { icon: <Award className="w-6 h-6" />, value: '85%', label: 'Success Rate' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '40%', label: 'Avg Improvement' },
    { icon: <Star className="w-6 h-6" />, value: '4.9/5', label: 'User Rating' },
  ];

  const companies = ['McKinsey', 'BCG', 'Bain', 'Deloitte', 'Accenture'];

  return (
    <div className="w-[1440px] h-[900px] mx-auto overflow-y-auto bg-[#F8FAFC]">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#007BFF] to-[#0056b3] flex items-center justify-center shadow-lg shadow-[#007BFF]/20">
              <span className="text-white">M</span>
            </div>
            <span className="text-[#111827]">MockMate</span>
          </div>
          <div className="flex items-center gap-8">
            <button onClick={() => onNavigate('Pricing')} className="text-[#111827]/70 hover:text-[#007BFF] transition-colors">
              Pricing
            </button>
            <button onClick={() => onNavigate('History')} className="text-[#111827]/70 hover:text-[#007BFF] transition-colors">
              Features
            </button>
            <button onClick={() => onNavigate('About')} className="text-[#111827]/70 hover:text-[#007BFF] transition-colors">
              About
            </button>
            <button onClick={() => onNavigate('Contact')} className="text-[#111827]/70 hover:text-[#007BFF] transition-colors">
              Contact
            </button>
            <Button
              onClick={() => onNavigate('Login')}
              variant="ghost"
              className="text-[#111827] hover:text-[#007BFF] hover:bg-transparent"
            >
              Login
            </Button>
            <Button
              onClick={() => onNavigate('Signup')}
              className="bg-gradient-to-r from-[#007BFF] to-[#0056b3] hover:shadow-lg hover:shadow-[#007BFF]/30 text-white rounded-xl transition-all"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-8 pt-20 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#007BFF]/10 to-[#00D2A8]/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00D2A8]/10 to-transparent rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#007BFF]/10 to-[#00D2A8]/10 border border-[#007BFF]/20 mb-8">
            <Sparkles className="w-4 h-4 text-[#007BFF]" />
            <span className="text-sm text-[#111827]">AI-Powered Interview Preparation</span>
          </div>

          <h1 className="text-[#111827] mb-6 leading-tight" style={{ fontSize: '3.5rem' }}>
            Ace Your Consulting Interview with{' '}
            <span className="bg-gradient-to-r from-[#007BFF] to-[#00D2A8] bg-clip-text text-transparent">
              AI Precision
            </span>
          </h1>
          
          <p className="text-xl text-[#111827]/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Practice realistic consulting interviews with advanced AI feedback. Build confidence, master your skills, and land offers from McKinsey, BCG, Bain, and beyond.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => onNavigate('Interview Type')}
              className="bg-gradient-to-r from-[#007BFF] to-[#0056b3] hover:shadow-xl hover:shadow-[#007BFF]/30 text-white px-8 py-7 rounded-xl text-lg transition-all hover:scale-105"
            >
              Start Mock Interview
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => onNavigate('About')}
              variant="outline"
              className="border-2 border-gray-300 text-[#111827] hover:bg-gray-50 px-8 py-7 rounded-xl text-lg transition-all group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Bar */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-[#111827]/50 mb-4">TRUSTED BY CANDIDATES AT</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              {companies.map((company) => (
                <span key={company} className="text-[#111827]">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-[#007BFF] to-[#0056b3] py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-3 text-white/90">
                  {stat.icon}
                </div>
                <div className="text-white mb-1" style={{ fontSize: '2rem' }}>{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#007BFF]/10 text-[#007BFF] mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm">Simple Process</span>
          </div>
          <h2 className="text-[#111827] mb-4" style={{ fontSize: '2.5rem' }}>
            How It Works
          </h2>
          <p className="text-lg text-[#111827]/70 max-w-2xl mx-auto">
            Get started in three simple steps and transform your interview performance
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="absolute top-24 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-[#007BFF] via-[#00D2A8] to-[#007BFF] opacity-20 -z-10"></div>
          
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-8 rounded-2xl shadow-lg border-0 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-[#007BFF] to-[#00D2A8] flex items-center justify-center text-white shadow-lg">
                {index + 1}
              </div>
              
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#007BFF]/10 to-[#00D2A8]/10 flex items-center justify-center mb-6 text-[#007BFF] group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-[#111827] mb-3">
                {step.title}
              </h3>
              <p className="text-[#111827]/70 leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#111827] mb-4" style={{ fontSize: '2.5rem' }}>
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-[#111827]/70">
              Comprehensive tools designed for consulting interview excellence
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: <MessageSquare className="w-6 h-6" />, title: 'Realistic Interviews', desc: 'AI-powered conversations that mirror actual consulting interviews' },
              { icon: <BarChart className="w-6 h-6" />, title: 'Detailed Analytics', desc: 'Track your progress with comprehensive performance metrics' },
              { icon: <Zap className="w-6 h-6" />, title: 'Instant Feedback', desc: 'Get actionable insights immediately after each session' },
              { icon: <Shield className="w-6 h-6" />, title: 'Secure & Private', desc: 'Your data is encrypted and never shared with third parties' },
              { icon: <Award className="w-6 h-6" />, title: 'Expert-Designed', desc: 'Created by former consultants from top-tier firms' },
              { icon: <TrendingUp className="w-6 h-6" />, title: 'Proven Results', desc: '85% of users receive offers within 3 months' },
            ].map((feature, index) => (
              <Card key={index} className="p-6 rounded-xl shadow-sm border border-gray-200/50 bg-white hover:shadow-md hover:border-[#007BFF]/20 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#007BFF]/10 to-[#00D2A8]/10 flex items-center justify-center mb-4 text-[#007BFF]">
                  {feature.icon}
                </div>
                <h4 className="text-[#111827] mb-2">{feature.title}</h4>
                <p className="text-sm text-[#111827]/70">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D2A8]/10 text-[#00D2A8] mb-4">
            <Star className="w-4 h-4" />
            <span className="text-sm">Success Stories</span>
          </div>
          <h2 className="text-[#111827] mb-4" style={{ fontSize: '2.5rem' }}>
            Loved by Future Consultants
          </h2>
          <p className="text-lg text-[#111827]/70">
            Join thousands who've landed offers at top consulting firms
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 rounded-2xl shadow-lg border-0 bg-white hover:shadow-xl transition-all group">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFA500] text-[#FFA500]" />
                ))}
              </div>
              <p className="text-[#111827]/80 mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#007BFF] to-[#00D2A8] flex items-center justify-center text-white">
                  {testimonial.image}
                </div>
                <div>
                  <div className="text-[#111827]">{testimonial.name}</div>
                  <div className="text-sm text-[#111827]/60">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-gradient-to-b from-[#F8FAFC] to-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#111827] mb-4" style={{ fontSize: '2.5rem' }}>
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-[#111827]/70">
              Choose the plan that fits your interview preparation needs
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 rounded-2xl shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-all">
              <div className="mb-6">
                <h3 className="text-[#111827] mb-2">Free</h3>
                <div className="mb-4">
                  <span className="text-[#111827]" style={{ fontSize: '3rem' }}>$0</span>
                  <span className="text-[#111827]/70">/month</span>
                </div>
                <p className="text-[#111827]/70">
                  Perfect for getting started
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-[#111827]/70">
                  <div className="w-5 h-5 rounded-full bg-[#00D2A8]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-[#00D2A8]" />
                  </div>
                  3 mock interviews/month
                </li>
                <li className="flex items-center gap-3 text-[#111827]/70">
                  <div className="w-5 h-5 rounded-full bg-[#00D2A8]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-[#00D2A8]" />
                  </div>
                  Basic feedback
                </li>
                <li className="flex items-center gap-3 text-[#111827]/70">
                  <div className="w-5 h-5 rounded-full bg-[#00D2A8]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-[#00D2A8]" />
                  </div>
                  Interview history
                </li>
              </ul>

              <Button
                onClick={() => onNavigate('Signup')}
                variant="outline"
                className="w-full rounded-xl border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF]/5 py-6 transition-all"
              >
                Get Started Free
              </Button>
            </Card>

            <Card className="p-8 rounded-2xl shadow-2xl border-2 border-[#007BFF] bg-gradient-to-br from-white to-[#007BFF]/5 relative overflow-hidden hover:shadow-3xl transition-all">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#007BFF]/20 to-[#00D2A8]/20 rounded-full blur-3xl"></div>
              
              <div className="absolute -top-4 right-8 bg-gradient-to-r from-[#00D2A8] to-[#00D2A8]/80 text-white px-6 py-2 rounded-full text-sm shadow-lg">
                Most Popular
              </div>

              <div className="mb-6 relative">
                <h3 className="text-[#111827] mb-2">Pro</h3>
                <div className="mb-4">
                  <span className="text-[#111827]" style={{ fontSize: '3rem' }}>$29</span>
                  <span className="text-[#111827]/70">/month</span>
                </div>
                <p className="text-[#111827]/70">
                  For serious candidates
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-[#111827]">
                  <div className="w-5 h-5 rounded-full bg-[#00D2A8] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  Unlimited mock interviews
                </li>
                <li className="flex items-center gap-3 text-[#111827]">
                  <div className="w-5 h-5 rounded-full bg-[#00D2A8] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  Advanced AI feedback
                </li>
                <li className="flex items-center gap-3 text-[#111827]">
                  <div className="w-5 h-5 rounded-full bg-[#00D2A8] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  Performance analytics
                </li>
                <li className="flex items-center gap-3 text-[#111827]">
                  <div className="w-5 h-5 rounded-full bg-[#00D2A8] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  Priority support
                </li>
              </ul>

              <Button
                onClick={() => onNavigate('Pricing')}
                className="w-full bg-gradient-to-r from-[#007BFF] to-[#0056b3] hover:shadow-xl hover:shadow-[#007BFF]/30 text-white rounded-xl py-6 transition-all hover:scale-105"
              >
                Upgrade to Pro
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <Card className="p-16 rounded-3xl shadow-2xl border-0 bg-gradient-to-br from-[#007BFF] to-[#0056b3] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00D2A8]/20 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <h2 className="text-white mb-6" style={{ fontSize: '2.5rem' }}>
              Ready to Ace Your Interview?
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Join 10,000+ candidates who've improved their consulting interview skills with MockMate
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button
                onClick={() => onNavigate('Signup')}
                className="bg-white text-[#007BFF] hover:bg-gray-100 px-8 py-7 rounded-xl text-lg transition-all hover:scale-105 shadow-xl"
              >
                Start Free Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => onNavigate('Contact')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-7 rounded-xl text-lg transition-all"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-5 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#007BFF] to-[#00D2A8] flex items-center justify-center shadow-lg">
                  <span className="text-white">M</span>
                </div>
                <span className="text-white">MockMate</span>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                AI-powered consulting interview preparation platform. Master your skills and land your dream consulting role.
              </p>
              <div className="flex gap-3">
                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                  <div key={social} className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-all">
                    <span className="text-xs text-white/70">{social[0]}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white mb-4">Product</h4>
              <div className="space-y-3">
                <button onClick={() => onNavigate('Pricing')} className="block text-white/70 hover:text-white transition-colors">
                  Pricing
                </button>
                <button onClick={() => onNavigate('Dashboard')} className="block text-white/70 hover:text-white transition-colors">
                  Dashboard
                </button>
                <button onClick={() => onNavigate('History')} className="block text-white/70 hover:text-white transition-colors">
                  Features
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-white mb-4">Company</h4>
              <div className="space-y-3">
                <button onClick={() => onNavigate('About')} className="block text-white/70 hover:text-white transition-colors">
                  About
                </button>
                <button onClick={() => onNavigate('Contact')} className="block text-white/70 hover:text-white transition-colors">
                  Contact
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-white mb-4">Legal</h4>
              <div className="space-y-3">
                <button onClick={() => onNavigate('Privacy')} className="block text-white/70 hover:text-white transition-colors">
                  Privacy
                </button>
                <button onClick={() => onNavigate('Terms')} className="block text-white/70 hover:text-white transition-colors">
                  Terms
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex items-center justify-between">
            <p className="text-white/50 text-sm">
              © 2025 MockMate. All rights reserved.
            </p>
            <p className="text-white/50 text-sm">
              Made with ❤️ for aspiring consultants
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}