import { UserCredential } from 'firebase/auth';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  provider?: 'email' | 'google';
}

export type Error = {
  message: string;
  code?: string;
};

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: (credential: UserCredential) => Promise<void>;
  logout: () => void;
  register: (data: { firstName: string; lastName: string; email: string; password: string }) => Promise<void>;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}