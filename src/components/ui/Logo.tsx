import React from 'react';
import { cn } from './cn';

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("w-6 h-6", className)}
    >
      <path d="M12 2L2 19h20L12 2zm0 4l6.5 11h-13L12 6z" />
    </svg>
  );
}