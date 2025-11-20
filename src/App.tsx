import { useState } from 'react';
import Landing from './components/Landing';
import InterviewType from './components/InterviewType';
import InterviewSession from './components/InterviewSession';
import Feedback from './components/Feedback';
import History from './components/History';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';
import About from './components/About';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Contact from './components/Contact';

export type Page = 
  | 'Landing'
  | 'Interview Type'
  | 'Interview Session'
  | 'Feedback'
  | 'History'
  | 'Pricing'
  | 'Login'
  | 'Signup'
  | 'Dashboard'
  | 'Admin'
  | 'About'
  | 'Privacy'
  | 'Terms'
  | 'Contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('Landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'Landing':
        return <Landing onNavigate={setCurrentPage} />;
      case 'Interview Type':
        return <InterviewType onNavigate={setCurrentPage} />;
      case 'Interview Session':
        return <InterviewSession onNavigate={setCurrentPage} />;
      case 'Feedback':
        return <Feedback onNavigate={setCurrentPage} />;
      case 'History':
        return <History onNavigate={setCurrentPage} />;
      case 'Pricing':
        return <Pricing onNavigate={setCurrentPage} />;
      case 'Login':
        return <Login onNavigate={setCurrentPage} />;
      case 'Signup':
        return <Signup onNavigate={setCurrentPage} />;
      case 'Dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'Admin':
        return <Admin onNavigate={setCurrentPage} />;
      case 'About':
        return <About onNavigate={setCurrentPage} />;
      case 'Privacy':
        return <Privacy onNavigate={setCurrentPage} />;
      case 'Terms':
        return <Terms onNavigate={setCurrentPage} />;
      case 'Contact':
        return <Contact onNavigate={setCurrentPage} />;
      default:
        return <Landing onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {renderPage()}
    </div>
  );
}

export default App;
