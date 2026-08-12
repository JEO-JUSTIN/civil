import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleQuickLinkClick = (target) => {
    if (location.pathname !== '/') {
      navigate(`/#${target}`);
    } else {
      const el = document.getElementById(target);
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-primary-dark text-slate-300 pt-10 sm:pt-16 pb-6 sm:pb-8 border-t border-white/5 w-full select-none text-left">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-12">
          
          {/* Main Info Column */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4 col-span-2">
            <h4 className="text-white font-extrabold text-lg sm:text-xl tracking-wider">GCE Erode</h4>
            <p className="text-slate-400 text-sm leading-relaxed font-light pr-4">
              Government College of Engineering, Erode imparts training to civil engineering students using the latest curriculum and modern pedagogical tools. Designed to cultivate structural excellence and research innovation.
            </p>
            <span className="text-slate-500 text-xs block font-medium">
              Government College of Engineering, Erode, Tamil Nadu, India.
            </span>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-white font-extrabold text-sm uppercase tracking-widest border-b border-white/10 pb-2">
              Quick Links
            </h5>
            <ul className="space-y-2 text-xs md:text-sm list-none p-0">
              {['home', 'about', 'programs', 'facilities', 'faculty'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => handleQuickLinkClick(item)}
                    className="hover:text-accent transition-colors capitalize bg-transparent border-0 cursor-pointer p-0 text-slate-400"
                  >
                    {item === 'facilities' ? 'Facilities' : item === 'about' ? 'About Dept' : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Students Column */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-white font-extrabold text-sm uppercase tracking-widest border-b border-white/10 pb-2">
              Students
            </h5>
            <ul className="space-y-2 text-xs md:text-sm list-none p-0">
              {['Placements', 'Student Projects', 'Research', 'Symposiums'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => navigate('/students')}
                    className="hover:text-accent text-slate-400 transition-colors bg-transparent border-0 cursor-pointer p-0"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-white font-extrabold text-sm uppercase tracking-widest border-b border-white/10 pb-2">
              Resources
            </h5>
            <ul className="space-y-2 text-xs md:text-sm list-none p-0">
              {['Department Library', 'Downloads', 'Notice Board', 'Curriculum'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => navigate('/resources')}
                    className="hover:text-accent text-slate-400 transition-colors bg-transparent border-0 cursor-pointer p-0"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-slate-500">
          <p className="m-0">
            © 2023-27 batch Civil Engineering Department | Government College of Engineering, Erode.
          </p>
          
          <button 
            onClick={() => navigate('/admin')}
            className="flex items-center text-slate-500 hover:text-accent bg-transparent border-0 cursor-pointer text-xs font-bold transition-colors"
          >
            <ShieldAlert className="w-3.5 h-3.5 mr-1" />
            Admin Portal
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
