import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-4 pb-16">
        {children}
      </div>
      <Footer />
    </div>
  );
}