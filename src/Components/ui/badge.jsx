import React from 'react';

export const Badge = ({ children, variant = 'default', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 backdrop-blur-md";
  
  const variants = {
    // Sharp Black & White (Noir Style)
    default: "bg-white text-black border border-white shadow-glow",
    
    // Ghostly Silver (Matches your --muted-foreground)
    secondary: "bg-white/10 text-white border border-white/20",
    
    // Glass Style (Matches your .glass-panel class)
    outline: "bg-white/[0.03] text-white/90 border border-white/10",
    
    // High Contrast Warning
    destructive: "bg-red-500/20 text-red-500 border border-red-500/30",
    
    // High Contrast Success
    success: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};