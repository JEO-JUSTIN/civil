import React from 'react';
import { MapPin, Layers, Droplet, Hammer, Waves, Map, Laptop, CheckCircle } from 'lucide-react';

const LabCard = ({ title, desc, icon: Icon }) => (
  <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-start text-left">
    <div className="w-14 h-14 bg-primary-light/10 text-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 stroke-[1.5]" />
    </div>
    <h5 className="text-xl font-bold text-primary-dark mb-3 tracking-wide">{title}</h5>
    <p className="text-slate-600 text-sm leading-relaxed m-0 flex-grow">{desc}</p>
  </div>
);

const Facilities = () => {
  const labs = [
    {
      title: "Surveying Laboratory",
      desc: "Equipped with 4 total station instruments, 4 automatic engineering levels, tripod-mounted laser level, hand-held laser distance meter, and 3 mapping-grade GPS units with all ancillary equipment.",
      icon: MapPin
    },
    {
      title: "Soil Mechanics Laboratory",
      desc: "Comprehensive facility for studying soil behavior under loading and weathering conditions. Focuses on geotechnical engineering principles and soil-structure interactions.",
      icon: Layers
    },
    {
      title: "Water & Waste Water Analysis Lab",
      desc: "Environmental testing facility for water quality analysis, helping students understand appropriate tests for environmental problems and technical solutions.",
      icon: Droplet
    },
    {
      title: "Strength of Materials Laboratory",
      desc: "Features Universal Testing Machine, Compression Testing Machine, Hardness Testing Machine, and Rebound Hammer for comprehensive material testing and mechanical analysis of specimens.",
      icon: Hammer
    },
    {
      title: "Hydraulic Engineering Laboratory",
      desc: "Specialized for fluid mechanics applications including open channel flow, hydraulic structures design, and environmental water management studies.",
      icon: Waves
    },
    {
      title: "Highway Engineering Laboratory",
      desc: "Complete facility for standardized highway materials testing, pavement evaluation, and traffic engineering studies with quality assurance protocols.",
      icon: Map
    }
  ];

  return (
    <section id="facilities" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h6 className="text-accent font-bold uppercase tracking-widest text-xs md:text-sm mb-2">
            State of the Art
          </h6>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">
            Department Facilities
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
            Seven well-established, comprehensively equipped laboratories that enhance conceptual understanding through hands-on practical exposure and advanced research.
          </p>
        </div>

        {/* Labs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-8 sm:mb-12">
          {labs.map((lab, index) => (
            <LabCard 
              key={index}
              title={lab.title}
              desc={lab.desc}
              icon={lab.icon}
            />
          ))}
        </div>

        {/* CAD Lab Highlight Container */}
        <div className="bg-primary-dark rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl text-white border border-white/5">
          <div className="flex flex-col md:flex-row items-stretch">
            
            {/* Left Block */}
            <div className="md:w-1/3 p-6 sm:p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center md:items-start text-center md:text-left justify-center bg-slate-950/20">
              <div className="w-16 h-16 bg-accent text-primary-dark rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Laptop className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-wide text-white">CAD Laboratory</h3>
              <span className="inline-block bg-white/10 text-accent px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider">
                Premier Computing Facility
              </span>
            </div>

            {/* Right Block */}
            <div className="md:w-2/3 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-white/80 text-base md:text-lg font-light leading-relaxed mb-8 text-left">
                Equipped with more than 30 computer systems installed with industry-standard design software. The lab provides a modern environment for students to master technical computation and design drafting.
              </p>
              
              {/* Softwares Grid */}
              <div className="grid sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-semibold text-white/90 text-sm md:text-base">AutoCAD 2D & 3D</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-semibold text-white/90 text-sm md:text-base">Revit Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-semibold text-white/90 text-sm md:text-base">STAAD.Pro</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Facilities;
