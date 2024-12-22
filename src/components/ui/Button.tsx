import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  onClick
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-colors';
  const variants = {
    default: 'bg-primary text-white hover:bg-primary-dark',
    outline: 'border-2 border-border hover:border-primary text-text-primary hover:text-primary'
  };
  const sizes = {
    default: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}