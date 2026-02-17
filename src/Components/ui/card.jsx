import React from 'react';

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`rounded-2xl border border-border bg-card text-card-foreground shadow-card overflow-hidden ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};