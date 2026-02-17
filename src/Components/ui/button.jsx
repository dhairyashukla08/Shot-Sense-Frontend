import React from 'react';

export const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-smooth disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:opacity-90 shadow-elegant",
    gradient: "bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-elegant",
    outline: "border border-border bg-background hover:bg-muted text-foreground",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    ghost: "hover:bg-muted text-muted-foreground hover:text-foreground",
  };

  const sizes = {
    default: "h-11 px-6 py-2",
    sm: "h-9 px-4 text-sm",
    lg: "h-12 px-8 text-lg",
    icon: "h-10 w-10",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};