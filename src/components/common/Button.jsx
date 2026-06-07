import React from 'react';

const Button = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyle = "font-bold transition-all flex items-center justify-center gap-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0F0F0F]";
  const variants = {
    primary: "bg-[#F97316] hover:bg-[#e86005] text-white shadow-lg shadow-[#F97316]/20 px-6 py-2.5",
    secondary: "bg-white text-black hover:bg-gray-100 px-6 py-2.5",
    icon: "bg-white text-black hover:bg-[#FACC15] p-3 shadow-lg shadow-white/5",
    outline: "bg-[#0F0F0F] border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800 px-6 py-2.5",
    success: "bg-[#25D366] text-white p-4 shadow-lg shadow-[#25D366]/30 hover:scale-105"
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
