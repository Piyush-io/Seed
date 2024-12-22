import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';
import Logo from './ui/Logo';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-border/5 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <Logo className="h-8 w-auto text-background-dark" />
            <span className="ml-3 text-xl font-semibold tracking-tight">Inventure</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/sectors" className="text-sm font-medium text-text-primary hover:text-primary transition-colors">
              Sectors
            </Link>
            <Link to="/investments" className="text-sm font-medium text-text-primary hover:text-primary transition-colors">
              Investments
            </Link>
            <Link to="/insights" className="text-sm font-medium text-text-primary hover:text-primary transition-colors">
              Insights
            </Link>
            <Link to="/about" className="text-sm font-medium text-text-primary hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-6">
            <button className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
              Sign In
            </button>
            <Link
              to="/apply"
              className="px-4 py-2 text-sm font-medium text-white bg-background-dark hover:bg-black transition-colors rounded-full"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}