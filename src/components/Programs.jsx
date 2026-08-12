import React, { useState } from 'react';
import { Building, Building2, Microscope, Quote, ChevronDown, ChevronUp } from 'lucide-react';

const ProgramCard = ({ title, sub, icon: Icon, outcomes }) => {
  const [showOutcomes, setShowOutcomes] = useState(false);

  return (
    <div className="rounded-3xl shadow-lg hover:shadow-xl overflow-hidden flex flex-col transform hover:-translate-y-2 transition-all duration-300 bg-white border border-slate-100">
      <div className="p-8 text-center flex-grow flex flex-col justify-between">
        <div>
          {/* Circular Icon */}
          <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 bg-primary-light/10 text-primary-dark">
            <Icon className="w-8 h-8 stroke-[1.5]" />
          </div>
          <h3 className="text-2xl font-extrabold text-primary-dark mb-1">{title}</h3>
          <h5 className="pb-4 mb-6 border-b border-dashed border-slate-200 text-slate-500 font-medium text-sm tracking-wide">
            {sub}
          </h5>
        </div>

        {/* Outcomes List (Collapsible) */}
        <div className="flex-grow flex flex-col justify-center">
          <ul className="text-left text-xs md:text-sm space-y-3 text-slate-600 list-none p-0 m-0">
            {outcomes.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-accent text-lg mr-2 leading-none">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {showOutcomes && outcomes.length > 3 && (
            <div className="mt-4 pt-4 border-t border-slate-100 text-left animate-fadeIn">
              <span className="text-xs font-bold text-primary-light uppercase tracking-wider block mb-2">Additional Outcomes:</span>
              <ul className="text-xs space-y-2 text-slate-500 list-none p-0 m-0">
                {outcomes.slice(3).map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-accent text-base mr-2 leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Expand/Collapse Button */}
      <div className="p-5 text-center bg-slate-50 border-t border-slate-100">
        <button 
          onClick={() => setShowOutcomes(!showOutcomes)}
          className="font-bold flex items-center justify-center mx-auto text-primary-dark hover:text-accent transition-colors duration-200 bg-transparent border-0 cursor-pointer text-sm"
        >
          {showOutcomes ? 'Hide Outcomes' : 'View Outcomes'}
          {showOutcomes ? <ChevronUp className="w-4 h-4 ml-1.5" /> : <ChevronDown className="w-4 h-4 ml-1.5" />}
        </button>
      </div>
    </div>
  );
};

const Programs = () => {
  const beOutcomes = [
    "Implement quality control systems in construction projects",
    "Design civil engineering systems (water supply, highways, structures)",
    "Use modern engineering tools & software (AutoCAD, STAAD.Pro)",
    "Apply ethical principles to professional civil engineering practices",
    "Understand sustainability principles in structural design"
  ];

  const meOutcomes = [
    "Analyze RC, PSC & steel structures under static and dynamic loading",
    "Solve complex structural problems using numerical methods and FEA",
    "Conduct independent research in materials and structural systems",
    "Formulate solutions for earthquake resistant building designs",
    "Contribute to technical papers and industrial structural consultancies"
  ];

  const phdOutcomes = [
    "Advanced concrete research on low-carbon binder systems",
    "Seismic analysis innovations and high-performance damping systems",
    "Sustainable construction materials study (recycled aggregates, fibers)",
    "Contribute to peer-reviewed journals and patent engineering concepts",
    "Supervise academic labs and deliver lectures on advanced structures"
  ];

  return (
    <section id="programs" className="py-12 sm:py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h6 className="text-accent font-bold uppercase tracking-widest text-xs md:text-sm mb-2">
            Academic Excellence
          </h6>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">
            Programs Offered
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-16">
          <ProgramCard 
            title="B.E." 
            sub="Civil Engineering" 
            icon={Building} 
            outcomes={beOutcomes} 
          />
          <ProgramCard 
            title="M.E." 
            sub="Structural Engineering" 
            icon={Building2} 
            outcomes={meOutcomes} 
          />
          <ProgramCard 
            title="Ph.D." 
            sub="Civil Engineering" 
            icon={Microscope} 
            outcomes={phdOutcomes} 
          />
        </div>

        {/* PEO Block */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 text-center relative border-t-4 border-accent max-w-4xl mx-auto overflow-hidden">
          <Quote className="absolute -top-4 -left-4 w-24 h-24 text-slate-100 opacity-60 z-0 select-none pointer-events-none stroke-[1]" />
          <div className="relative z-10">
            <h4 className="text-2xl font-extrabold text-primary-dark mb-4">
              Programme Educational Objectives
            </h4>
            <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto text-base">
              Civil Engineering is one of the oldest engineering disciplines dealing with the design, construction, and maintenance of infrastructure. The curriculum equips students with strong theoretical knowledge and practical skills, preparing them to pursue careers in industry, research, or entrepreneurship.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Programs;
