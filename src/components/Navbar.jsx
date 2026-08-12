import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Home, Info, GraduationCap, Microscope, Users, Activity, Mail } from 'lucide-react';

const navItems = [
  { label: 'Home', target: 'home', icon: Home },
  { label: 'About', target: 'about', icon: Info },
  { label: 'Programs', target: 'programs', icon: GraduationCap },
  { label: 'Laboratories', target: 'facilities', icon: Microscope },
  { label: 'Faculty', target: 'faculty', icon: Users },
  { label: 'Activities', target: 'activities', icon: Activity },
  { label: 'Contact', target: 'contact', icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll spy to highlight active nav item on scroll
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const item of navItems) {
        const el = document.getElementById(item.target);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.target);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleNavClick = (target) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${target}`);
      // The home component will detect hash changes and scroll
    } else {
      const el = document.getElementById(target);
      if (el) {
        const yOffset = -70; // Offset for sticky navbar
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setActiveSection(target);
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 shadow-md bg-primary-dark w-full border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo Brand */}
          <button 
            onClick={() => navigate('/')} 
            className="text-white font-extrabold text-xs sm:text-sm md:text-base tracking-wide hover:text-accent transition-colors duration-200 bg-transparent border-0 cursor-pointer flex-shrink-0 text-left leading-tight"
          >
            Department of Civil Engineering
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white border-0 transition-colors focus:outline-none bg-transparent cursor-pointer"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex w-full justify-center">
            <ul className="flex items-center space-x-2 font-medium">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === '/' && activeSection === item.target;
                return (
                  <li key={item.target}>
                    <button
                      onClick={() => handleNavClick(item.target)}
                      className={`flex items-center px-4 py-2.5 rounded-lg transition-all duration-200 group bg-transparent border-0 cursor-pointer text-sm font-semibold
                        ${isActive 
                          ? 'text-accent bg-white/10' 
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      <Icon className={`w-4 h-4 mr-2 group-hover:text-accent transition-colors ${isActive ? 'text-accent' : 'text-white/60'}`} />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-primary-dark border-t border-white/10 pb-4 animate-fadeIn">
            <ul className="flex flex-col space-y-1 pt-2 font-medium">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === '/' && activeSection === item.target;
                return (
                  <li key={item.target}>
                    <button
                      onClick={() => handleNavClick(item.target)}
                      className={`flex items-center w-full text-left px-4 py-3 rounded-md transition-all duration-200 bg-transparent border-0 cursor-pointer text-base
                        ${isActive 
                          ? 'text-accent bg-white/10 font-bold' 
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      <Icon className="w-5 h-5 mr-3 text-accent" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
