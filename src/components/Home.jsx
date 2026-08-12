import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import IntroPage from './IntroPage';
import Header from './Header';
import Navbar from './Navbar';
import Hero from './Hero';
import Stats from './Stats';
import NoticesEvents from './NoticesEvents';
import EventAnnouncementPopup from './EventAnnouncementPopup';
import About from './About';
import Programs from './Programs';
import Facilities from './Facilities';
import Faculty from './Faculty';
import Activities from './Activities';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  // Scroll to section based on URL hash (e.g. /#about) on load or navigation back
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // Delay slightly to ensure page renders first
        const timer = setTimeout(() => {
          const yOffset = -70; // Offset for sticky navbar
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      {showIntro && <IntroPage onComplete={() => setShowIntro(false)} />}
      
      <div className="min-h-screen bg-white flex flex-col justify-between overflow-x-hidden">
        <div>
          <Header />
          <Navbar />
          <Hero />
          <Stats />
          <NoticesEvents />
          <About />
          <Programs />
          <Facilities />
          <Faculty />
          <Activities />
          <Contact />
        </div>
        <Footer />
        <EventAnnouncementPopup showIntro={showIntro} />
      </div>
    </>
  );
};

export default Home;

