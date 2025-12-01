import { createContext, useContext, useState } from 'react';

const SchoolSettingsContext = createContext();

export function SchoolSettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    schoolLogo: null,
    loginBackground: null,
  });

  const updateSettings = (newSettings) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <SchoolSettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SchoolSettingsContext.Provider>
  );
}

export function useSchoolSettings() {
  const context = useContext(SchoolSettingsContext);
  if (!context) {
    throw new Error('useSchoolSettings must be used within SchoolSettingsProvider');
  }
  return context;
}
