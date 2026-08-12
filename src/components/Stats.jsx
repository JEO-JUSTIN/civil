import React, { useState, useEffect } from 'react';
import { Award, FlaskConical, Users, GraduationCap } from 'lucide-react';
import { useData } from '../context/DataContext';

const StatCard = ({ icon: Icon, targetVal, label, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(targetVal, 10);
    if (isNaN(end) || end === 0) {
      setCount(targetVal);
      return;
    }
    
    const duration = 1200; // Counter animation duration in ms
    const incrementTime = Math.max(Math.floor(duration / end), 20);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [targetVal]);

  return (
    <div className="p-4 sm:p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent mb-2 sm:mb-3 stroke-[1.5]" />
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-1 sm:mb-2 text-white">
        {prefix}{count}{suffix}
      </h2>
      <p className="text-white/60 font-medium text-[10px] sm:text-xs md:text-sm tracking-wider uppercase text-center max-w-[120px] sm:max-w-[150px]">
        {label}
      </p>
    </div>
  );
};

const Stats = () => {
  const { faculty } = useData();

  return (
    <section className="relative z-20 w-[95%] sm:w-[92%] md:w-[85%] max-w-6xl mx-auto -mt-8 sm:-mt-10 md:-mt-20 bg-primary-dark text-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden py-4 sm:py-6 border border-white/10">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6 md:gap-0 divide-y-0 divide-x-0 md:divide-x divide-white/10 text-center">
          <StatCard 
            icon={Award} 
            targetVal={41} 
            suffix="+"
            label="Years of Excellence" 
          />
          <StatCard 
            icon={FlaskConical} 
            targetVal={7} 
            label="Laboratories" 
          />
          <StatCard 
            icon={Users} 
            targetVal={faculty.length} 
            label="Faculty Members" 
          />
          <StatCard 
            icon={GraduationCap} 
            targetVal={3} 
            label="Programs Offered" 
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
