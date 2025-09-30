import React from 'react';

export const PrimaryButton = ({ children, ...props }) => {
  return (
    <button
      className="relative px-8 py-3 text-white font-semibold rounded-full overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export const SecondaryButton = ({ children, ...props }) => {
  return (
    <button 
      className="relative px-8 py-3 text-white font-semibold rounded-full glass-effect hover:glass-dark transition-all duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden"
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export const GlassButton = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = "relative px-6 py-3 font-semibold rounded-full transition-all duration-300 hover:scale-105 group overflow-hidden";
  
  const variants = {
    primary: "text-white glass-effect hover:bg-white/20",
    secondary: "text-gray-800 bg-white/90 hover:bg-white border border-white/30",
    outline: "text-white border-2 border-white/30 hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
      <span className="relative z-10">{children}</span>
    </button>
  );
};