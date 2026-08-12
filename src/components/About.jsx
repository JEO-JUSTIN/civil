import React from 'react';
import { HardHat, Landmark } from 'lucide-react';
import civilDeptImage from '../assets/Civil_Dept.jpg';

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image with offset gold background */}
          <div className="relative order-2 lg:order-1 px-2 sm:px-4 lg:px-0">
            {/* Gold offset box */}
            <div className="absolute w-full h-full bg-accent/15 rounded-3xl top-5 left-5 -z-10 hidden sm:block"></div>
            
            {/* Image Frame */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white aspect-[4/3] bg-slate-100">
              <img 
                src={civilDeptImage} 
                alt="Civil Engineering Department Building" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Description Copy */}
          <div className="lg:pl-8 order-1 lg:order-2">
            <div className="mb-6">
              <h6 className="text-accent font-bold uppercase tracking-widest mb-2 text-xs md:text-sm">
                Discover Our Department
              </h6>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">
                About the Department
              </h2>
              <div className="w-20 h-1 bg-accent"></div>
            </div>

            <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
              Designing and executing structural works requires a great amount of analyzing, understanding, and planning. A skilled civil engineer plays a crucial role in infrastructure development.
            </p>

            <div className="border-l-4 border-accent pl-4 mb-8 text-slate-500 italic bg-slate-50 py-3 pr-2 rounded-r">
              <p className="opacity-90 leading-relaxed text-sm md:text-base">
                Modern construction management systems require a strong understanding of information technology. Keeping this in mind, Government College of Engineering, Erode imparts training to civil engineering students using the latest curriculum.
              </p>
            </div>

            {/* Feature Boxes */}
            <div className="space-y-4">
              
              {/* Feature 1 */}
              <div className="flex items-start p-4 bg-slate-50 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300 border border-slate-100">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-light/10 text-primary-dark rounded-xl flex items-center justify-center mr-4">
                  <HardHat className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h6 className="font-bold text-primary-dark text-base mb-1">Versatile Systems Integrator</h6>
                  <p className="text-slate-500 text-sm m-0 leading-relaxed">
                    Engineers trained to act as construction and environmental specialists.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start p-4 bg-slate-50 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300 border border-slate-100">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/15 text-primary-dark rounded-xl flex items-center justify-center mr-4">
                  <Landmark className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h6 className="font-bold text-primary-dark text-base mb-1">Practical Exposure</h6>
                  <p className="text-slate-500 text-sm m-0 leading-relaxed">
                    Hands-on experience through industrial visits, site visits, and guest lectures.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
