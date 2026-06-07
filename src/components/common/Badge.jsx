import React from 'react';

const Badge = ({ children, className = '' }) => (
  <span className={`bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide inline-block ${className}`}>
    {children}
  </span>
);

export default Badge;
