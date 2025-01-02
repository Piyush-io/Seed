import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  children,
  className,
  isLoading,
  variant = 'primary',
  size = 'md',
  disabled,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-primary hover:bg-primary/90 text-white',
    secondary: 'bg-primary/10 hover:bg-primary/20 text-primary',
    outline: 'border border-primary/20 hover:bg-primary/10 text-primary',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
      className={cn(
        'relative inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200',
        variants[variant],
        sizes[size],
        disabled || isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
      <span className={cn(isLoading && 'opacity-0')}>{children}</span>
    </motion.button>
  );
}