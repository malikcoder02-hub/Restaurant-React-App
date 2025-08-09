import React from 'react';

export const PrimaryButton = ({ children, ...props }) => {
  return (
    <button
      className="bg-black text-white px-5 py-2 rounded-sm border border-black hover:bg-neutral-800 transition duration-300"
      {...props}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children }) => {
  return (
    <button className="bg-white text-black px-5 py-2 rounded-sm border border-black hover:bg-gray-200 transition duration-300">
      {children}
    </button>
  );
};
