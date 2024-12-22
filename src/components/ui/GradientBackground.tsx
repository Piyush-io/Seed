import React from 'react';
import { cn } from './cn';

export default function GradientBackground({ className }: { className?: string }) {
  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden", className)}>
      <div className="absolute -top-[40vh] -left-[40vw] w-[150vw] h-[150vh] animate-slow-spin">
        <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/10 via-background-dark/5 to-primary/10 blur-3xl" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(46,148,82,0.05)_0%,_rgba(46,148,82,0)_50%)]" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(46,148,82,0.05)_0%,_rgba(46,148,82,0)_50%)]" />
    </div>
  );
}