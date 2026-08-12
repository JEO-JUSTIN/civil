import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative flex items-center min-h-[420px] sm:min-h-[550px] md:min-h-[650px] bg-[radial-gradient(circle_at_center,_#205295_0%,_#0A2647_100%)] overflow-hidden"
    >
      {/* Decorative grids */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent z-0"></div>
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px] z-0"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center text-white flex flex-col justify-center items-center py-10 sm:py-16">
        {/* Welcome Badge */}
        <span className="inline-block bg-accent text-primary-dark px-4 sm:px-5 py-1.5 sm:py-2 font-bold mb-4 sm:mb-6 rounded-full uppercase tracking-wider text-[10px] sm:text-xs md:text-sm shadow-md animate-fadeIn">
          Welcome to GCEE
        </span>
        
        {/* Main Title */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-4 drop-shadow-lg tracking-tight font-sans">
          Civil Engineering Association
        </h1>
        
        {/* Secondary Title */}
        <h2 className="text-accent/90 font-bold text-sm sm:text-lg md:text-2xl uppercase tracking-[0.15em] sm:tracking-[0.25em] mb-3 sm:mb-4">
          Department of Civil Engineering
        </h2>
        
        {/* Tagline */}
        <h3 className="text-base sm:text-xl md:text-3xl font-light mb-5 sm:mb-8 text-white/90 drop-shadow-md italic">
          Designing the Infrastructure of Tomorrow
        </h3>
        
        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-3xl drop-shadow-md text-white/80 leading-relaxed font-normal px-2">
          Civil Engineering plays a vital role in infrastructure development. Skilled civil engineers analyze, design, and execute structural works that support modern society and sustainable development.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full max-w-md px-4">
          <button 
            onClick={() => scrollToSection('about')}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-accent text-primary-dark hover:bg-white hover:text-primary-dark px-6 sm:px-8 py-3 sm:py-3.5 font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300 border-0 cursor-pointer text-sm sm:text-base"
          >
            Explore Department
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button 
            onClick={() => scrollToSection('facilities')}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-dark px-6 sm:px-8 py-3 sm:py-3.5 font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer text-sm sm:text-base"
          >
            Our Facilities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
