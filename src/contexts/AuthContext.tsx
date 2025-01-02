import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockLoginAPI, mockRegisterAPI, mockGoogleAuthAPI } from '../services/auth';
import { User, AuthContextType } from '../types/auth';
import { UserCredential } from 'firebase/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { user } = await mockLoginAPI(email, password);
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/profile');
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const loginWithGoogle = async (credential: UserCredential) => {
    try {
      const { user } = await mockGoogleAuthAPI(credential);
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/profile');
    } catch (error) {
      console.error('Google login error:', error);
      throw error;
    }
  };

  const register = async (data: { firstName: string; lastName: string; email: string; password: string }) => {
    try {
      const { user } = await mockRegisterAPI(data);
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/profile');
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    loginWithGoogle,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
