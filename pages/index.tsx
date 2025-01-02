import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import BackgroundGradientAnimation from '../components/ui/BackgroundGradientAnimation';

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
      <BackgroundGradientAnimation variant="home" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-8">
              <span className="block">Welcome to</span>
              <span className="relative inline-block">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
                  Your Platform
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-emerald-500/20 blur-lg" />
              </span>
            </h1>

            <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
              Your platform description goes here. Make it engaging and informative.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard">
                    <Button className="group">
                      Go to Dashboard
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/explore">
                    <Button variant="outline">
                      Explore Features
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button className="group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="outline">
                      Create Account
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Feature Highlights */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Feature One',
                  description: 'Description of your first main feature.'
                },
                {
                  title: 'Feature Two',
                  description: 'Description of your second main feature.'
                },
                {
                  title: 'Feature Three',
                  description: 'Description of your third main feature.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group p-6 bg-background-light/50 backdrop-blur-sm border border-border rounded-2xl"
                >
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}