import React from 'react';

const CollegeLogo = ({ className = "w-20 h-20" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${className} select-none`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle cx="50" cy="50" r="46" fill="none" stroke="#0A2647" strokeWidth="4" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="#E5A93C" strokeWidth="1.5" />
      
      {/* Inner dark blue background */}
      <circle cx="50" cy="50" r="40" fill="#0A2647" />
      
      {/* Inner golden ring */}
      <circle cx="50" cy="50" r="26" fill="none" stroke="#E5A93C" strokeWidth="2" />
      
      {/* Center Gear / Compass Symbol representing Engineering */}
      <g transform="translate(50,50) scale(0.7)">
        {/* Gear hub */}
        <circle cx="0" cy="0" r="10" fill="none" stroke="#E5A93C" strokeWidth="3" />
        <circle cx="0" cy="0" r="4" fill="#E5A93C" />
        
        {/* Gear teeth */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
          <path
            key={index}
            d="M -3 -14 L 3 -14 L 4 -10 L -4 -10 Z"
            fill="#E5A93C"
            transform={`rotate(${angle})`}
          />
        ))}
        
        {/* Structural Pillar / Compass (representing Civil Engineering) */}
        <path d="M -2 15 L 2 15 L 2 -6 L -2 -6 Z" fill="#E5A93C" />
        <path d="M -6 18 L 6 18 L 4 14 L -4 14 Z" fill="#E5A93C" />
        <path d="M -8 -6 L 8 -6 L 0 -15 Z" fill="#E5A93C" />
      </g>
      
      {/* Curved Text - College Initials or stars */}
      <path id="text-path-top" d="M 15 50 A 35 35 0 0 1 85 50" fill="none" />
      <path id="text-path-bottom" d="M 85 50 A 35 35 0 0 1 15 50" fill="none" />
      
      {/* Small stars */}
      <circle cx="16" cy="50" r="1.5" fill="#E5A93C" />
      <circle cx="84" cy="50" r="1.5" fill="#E5A93C" />
      
      <text fill="#E5A93C" fontSize="6" fontWeight="bold" letterSpacing="1">
        <textPath href="#text-path-top" startOffset="50%" textAnchor="middle">
          GCE ERODE
        </textPath>
      </text>
      
      <text fill="#E5A93C" fontSize="5" fontWeight="bold" letterSpacing="0.8">
        <textPath href="#text-path-bottom" startOffset="50%" textAnchor="middle">
          CIVIL ASSOCIATION
        </textPath>
      </text>
    </svg>
  );
};

export default CollegeLogo;
