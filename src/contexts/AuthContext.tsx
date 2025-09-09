import React, { createContext, useContext, useState, ReactNode } from 'react';
// import { AuthContextType } from '../types/app.d.ts';
import { AuthContextType } from 'types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authed, setAuthed] = useState(false);

  const login = () => setAuthed(true);
  const logout = () => setAuthed(false);

  return (
    <AuthContext.Provider value={{ authed, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
