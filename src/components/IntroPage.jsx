import React, { useState, useEffect } from 'react';

const IntroPage = ({ onComplete }) => {
  const [animate, setAnimate] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start animation frame
    const animTimer = setTimeout(() => {
      setAnimate(true);
    }, 50);

    // Start fade out after ~2.2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    // Unmount after fade out completes (~2.9 seconds total)
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2900);

    return () => {
      clearTimeout(animTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary-dark transition-opacity duration-700 ease-in-out"
      style={{
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'auto',
      }}
    >
      <div className="relative text-center px-6">
        <div
          className="flex flex-col items-center transition-all duration-700 ease-out"
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {/* Accent Line */}
          <div
            className="h-1 bg-accent mb-6 rounded-full transition-all duration-700 ease-out"
            style={{
              width: animate ? '120px' : '0px',
            }}
          />

          {/* Title Line 1 */}
          <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold tracking-tight mb-2 overflow-hidden">
            <span
              className="inline-block transition-transform duration-700 ease-out"
              style={{
                transform: animate ? 'translateY(0%)' : 'translateY(100%)',
                transitionDelay: '200ms',
              }}
            >
              Welcome to
            </span>
          </h2>

          {/* Title Line 2 */}
          <h1 className="text-accent text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight sm:tracking-tighter overflow-hidden">
            <span
              className="inline-block transition-transform duration-700 ease-out"
              style={{
                transform: animate ? 'translateY(0%)' : 'translateY(100%)',
                transitionDelay: '400ms',
              }}
            >
              Civil Engineering Association
            </span>
          </h1>

          {/* Loading Indicator */}
          <div className="mt-8 flex items-center space-x-2">
            <span className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] animate-pulse">
              Loading Excellence
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
