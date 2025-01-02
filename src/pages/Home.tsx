import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-8">
            <span className="block">Empowering the</span>
            <span className="relative inline-block">
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
                Next Generation
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-emerald-500/20 blur-lg" />
            </span>
            <span className="block">of Innovation</span>
          </h1>

          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            We partner with visionary founders and companies building breakthrough technologies
            that transform industries and improve lives.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {isAuthenticated ? (
              <>
                <Link to="/sectors">
                  <button className="bg-[#00A651] hover:bg-[#00A651]/90 text-white px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2 transition-colors">
                    Explore Sectors
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link to="/about">
                  <button className="border-2 border-[#00A651] text-[#00A651] hover:bg-[#00A651]/5 px-8 py-4 rounded-full text-lg font-medium transition-colors">
                    Learn More
                  </button>
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
        </motion.div>
      </div>
    </div>
  );
}