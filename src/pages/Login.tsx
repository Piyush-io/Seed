import React, { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import ParticlesBackground from '../components/ui/ParticlesBackground';
import { Sparkles } from 'lucide-react'; // Added import for Sparkles icon
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import '../config/firebase'; // Import Firebase initialization

export default function Login() {
  const { isAuthenticated, login, loginWithGoogle } = useAuth();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // If user is already authenticated, redirect to intended page or home
  if (isAuthenticated) {
    const from = location.state?.from?.pathname || '/';
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
    } catch (error: any) {
      setError(error.message || 'Failed to sign in');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setIsLoading(true);

    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Pass the Google credential to our auth context
      await loginWithGoogle(result);
    } catch (error: any) {
      console.error('Google sign in error:', error);
      setError(error.message || 'Failed to sign in with Google');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen grid lg:grid-cols-2">
      <ParticlesBackground className="fixed inset-0 z-0" particleCount={150} speed={0.5} />

      {/* Left Side - Branding */}
      <div className="relative z-10 hidden lg:flex flex-col bg-primary/5 backdrop-blur-sm p-12">
        <Link to="/" className="flex items-center">
          <span className="text-[#00A651] text-2xl font-bold">
            Seed
          </span>
        </Link>
        <div className="flex-1 flex items-center">
          <div>
            <motion.h1
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome back to <br />
              <span className="text-primary">Seed</span>
            </motion.h1>
            <motion.p
              className="text-gray-600 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Your gateway to sustainable investments. <br />
              Join thousands of impact investors making a difference.
            </motion.p>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          © 2024 Seed. All rights reserved.
        </p>
      </div>

      {/* Right Side - Login Form */}
      <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12">
        <div className="lg:hidden mb-12">
          <Link to="/" className="flex items-center">
            <span className="text-[#00A651] text-2xl font-bold">
              Seed
            </span>
          </Link>
        </div>

        <div className="max-w-sm w-full mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-2">Sign in</h2>
            <p className="text-gray-600">Welcome back! Please enter your details.</p>
          </motion.div>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-500 text-sm">
              {error}
            </div>
          )}

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                required
                disabled={isLoading}
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-primary focus:ring-primary/20"
                  disabled={isLoading}
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-primary hover:text-primary/80 transition-colors">
                Forgot password?
              </Link>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white rounded-lg py-3 text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center gap-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <img src="/google.svg" alt="Google" className="w-5 h-5" />
                Sign in with Google
              </button>
            </div>
          </motion.form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary hover:text-primary/80 font-medium transition-colors">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}