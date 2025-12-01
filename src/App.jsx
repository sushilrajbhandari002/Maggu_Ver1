import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import Dashboard  from './components/Dashboard';
import { StudentManagement } from './components/StudentManagement';
import { TeacherManagement } from './components/TeacherManagement';
import NoticesEvents  from './components/NoticesEvents';
import { Reports } from './components/Reports';
import { SchoolProfile } from './components/SchoolProfile';
import { Login } from './components/Login';
import { SchoolSettingsProvider } from './components/SchoolSettingsContext';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);

  return (
    <SchoolSettingsProvider>
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <AppContent activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
    </SchoolSettingsProvider>
  );
}

function AppContent({ activeTab, setActiveTab }) {
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'students':
        return <StudentManagement />;
      case 'teachers':
        return <TeacherManagement />;
      case 'notices':
        return <NoticesEvents />;
      case 'reports':
        return <Reports />;
      case 'profile':
        return <SchoolProfile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">{renderContent()}</div>
      </main>
    </div>
  );
}

// ✅ Default export
export default App;
