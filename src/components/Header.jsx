import React from 'react';
import logoClg from '../assets/logo_clg_black.png';
import govtLogo from '../assets/Govt_Logo.jpeg';

const Header = () => {
  return (
    <header className="w-full bg-white py-2 sm:py-3 border-b border-border">
      <div className="container mx-auto px-3 sm:px-4 max-w-7xl flex items-center justify-center md:justify-between text-center">
        {/* College Logo */}
        <div className="flex items-center flex-shrink-0" style={{ height: '50px', width: '50px', position: 'relative' }}>
          <img 
            src={logoClg} 
            alt="College Logo" 
            className="object-contain w-full h-full"
          />
        </div>

        {/* Header Text */}
        <div className="flex-grow text-center px-2 sm:px-3 min-w-0">
          <h1 className="mb-0.5 sm:mb-1 text-[#0a325e] font-bold text-base sm:text-xl md:text-2xl lg:text-[28px] leading-tight font-serif">
            Government College of Engineering, Erode
          </h1>
          <h5 className="mb-0.5 sm:mb-1 text-foreground font-medium text-sm sm:text-base md:text-lg">
            Tamil Nadu, India
          </h5>
          <p className="mb-0 text-muted-foreground text-[10px] sm:text-xs md:text-sm font-semibold">
            Approved by AICTE | Affiliated to Anna University
          </p>
        </div>

        {/* TN State Logo */}
        <div className="flex items-center justify-end flex-shrink-0" style={{ height: '50px', width: '50px', position: 'relative' }}>
          <img 
            src={govtLogo} 
            alt="Tamil Nadu Logo" 
            className="object-contain w-full h-full rounded"
          />
        </div>
      </div>
    </header>
  );
};


export default Header;
