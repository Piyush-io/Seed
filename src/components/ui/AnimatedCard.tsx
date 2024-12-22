import React from 'react';
import { cn } from './cn';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedCard({ children, className }: AnimatedCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/5 bg-white p-8",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite]",
        "before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        "hover:border-primary/20 hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}