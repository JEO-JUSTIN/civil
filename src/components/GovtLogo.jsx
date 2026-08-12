import React from 'react';

const GovtLogo = ({ className = "w-20 h-20" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${className} select-none`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle */}
      <circle cx="50" cy="50" r="46" fill="none" stroke="#22c55e" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="#E5A93C" strokeWidth="1.5" />
      
      {/* Inner background - off-white/very light gold */}
      <circle cx="50" cy="50" r="40" fill="#FDFBF7" />
      
      {/* Gopuram (Temple Tower) Shape */}
      <g transform="translate(50, 56) scale(0.95)" fill="#b91c1c">
        {/* Base */}
        <rect x="-18" y="-4" width="36" height="5" rx="1" />
        <rect x="-15" y="-9" width="30" height="5" />
        
        {/* Tier 1 */}
        <polygon points="-12,-9 -10,-17 10,-17 12,-9" />
        {/* Tier 2 */}
        <polygon points="-9,-17 -7,-24 7,-24 9,-17" />
        {/* Tier 3 */}
        <polygon points="-7,-24 -5,-30 5,-30 7,-24" />
        {/* Tier 4 */}
        <polygon points="-5,-30 -4,-35 4,-35 5,-30" />
        
        {/* Spire Top (Kalasa) */}
        <polygon points="-3,-35 -3,-38 3,-38 3,-35" />
        <path d="M 0,-44 L -1.5,-38 L 1.5,-38 Z" />
        
        {/* Decorative lines/gates on Gopuram */}
        <rect x="-2" y="-4" width="4" height="4" fill="#FDFBF7" />
        
        {/* Windows on tiers */}
        <circle cx="0" cy="-13" r="1.5" fill="#FDFBF7" />
        <circle cx="-5" cy="-13" r="1" fill="#FDFBF7" />
        <circle cx="5" cy="-13" r="1" fill="#FDFBF7" />
        
        <circle cx="0" cy="-20" r="1" fill="#FDFBF7" />
        <circle cx="-3.5" cy="-20" r="0.8" fill="#FDFBF7" />
        <circle cx="3.5" cy="-20" r="0.8" fill="#FDFBF7" />

        <circle cx="0" cy="-27" r="0.8" fill="#FDFBF7" />
      </g>
      
      {/* Indian Flag elements on sides */}
      {/* Left Flag */}
      <line x1="24" y1="58" x2="24" y2="40" stroke="#475569" strokeWidth="1.5" />
      <polygon points="12,41 24,45 24,41" fill="#ea580c" />
      <polygon points="12,45 24,49 24,45" fill="#ffffff" />
      <polygon points="12,49 24,53 24,49" fill="#16a34a" />
      
      {/* Right Flag */}
      <line x1="76" y1="58" x2="76" y2="40" stroke="#475569" strokeWidth="1.5" />
      <polygon points="88,41 76,45 76,41" fill="#ea580c" />
      <polygon points="88,45 76,49 76,45" fill="#ffffff" />
      <polygon points="88,49 76,53 76,49" fill="#16a34a" />
      
      {/* Text paths */}
      <path id="gov-text-path" d="M 12 50 A 38 38 0 0 1 88 50" fill="none" />
      <path id="gov-text-path-bottom" d="M 88 50 A 38 38 0 0 1 12 50" fill="none" />
      
      <text fill="#0f766e" fontSize="4.8" fontWeight="bold" letterSpacing="0.4">
        <textPath href="#gov-text-path" startOffset="50%" textAnchor="middle">
          GOVERNMENT OF TAMIL NADU
        </textPath>
      </text>
      
      <text fill="#b91c1c" fontSize="4" fontWeight="bold" letterSpacing="0.2">
        <textPath href="#gov-text-path-bottom" startOffset="50%" textAnchor="middle">
          • TRUTH ALONE TRIUMPHS •
        </textPath>
      </text>
    </svg>
  );
};

export default GovtLogo;
