import React from 'react';

export const Progress = ({ value = 0, className = '' }) => {
  return (
    <div className={`relative h-2 w-full overflow-hidden rounded-full bg-muted ${className}`}>
      <div
        className="h-full w-full flex-1 bg-gradient-primary transition-all duration-500 ease-in-out"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  );
};