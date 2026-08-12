import React from 'react';
import { Mail, Briefcase, GraduationCap, Award, Globe } from 'lucide-react';
import { useData } from '../context/DataContext';

const FacultyCard = ({ member }) => {
  // Get initials of faculty member (e.g. "Dr. K. Murugesan" -> "KM", "Mr. P. Ravichandran" -> "PR")
  const getInitials = (name) => {
    const parts = name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s+/i, '').split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0] ? parts[0].slice(0, 2).toUpperCase() : 'FC';
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col group h-full">
      {/* Profile Header Background */}
      <div className="bg-gradient-to-r from-primary-dark to-primary-light p-6 text-center relative flex-shrink-0">
        {/* Avatar or Picture Link */}
        {member.picture_link ? (
          <img 
            src={member.picture_link} 
            alt={member.name} 
            className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-accent shadow-md group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        ) : (
          <div className="w-20 h-20 mx-auto rounded-full bg-white text-primary-dark font-extrabold text-2xl flex items-center justify-center border-4 border-accent shadow-md select-none group-hover:scale-105 transition-transform duration-300">
            {getInitials(member.name)}
          </div>
        )}
        <h4 className="text-white font-extrabold text-lg mt-3 mb-0.5 tracking-wide">{member.name}</h4>
        <span className="inline-block bg-accent/20 text-accent font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full">
          {member.designation}
        </span>
      </div>

      {/* Profile Body */}
      <div className="p-6 flex-grow flex flex-col justify-between text-left space-y-4">
        <div className="space-y-3">
          {/* Qualification */}
          <div className="flex items-start text-sm">
            <GraduationCap className="w-4 h-4 text-accent mr-2.5 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700">
              <strong className="font-semibold text-slate-800">Degree:</strong> {member.qualification}
            </span>
          </div>

          {/* Specialization */}
          <div className="flex items-start text-sm">
            <Award className="w-4 h-4 text-accent mr-2.5 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700">
              <strong className="font-semibold text-slate-800">Expertise:</strong> {member.specialization}
            </span>
          </div>

          {/* Experience */}
          <div className="flex items-start text-sm">
            <Briefcase className="w-4 h-4 text-accent mr-2.5 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700">
              <strong className="font-semibold text-slate-800">Experience:</strong> {member.experience || 'N/A'}
            </span>
          </div>
        </div>

        {/* Action Links (Email / Website) */}
        <div className="space-y-2 pt-2">
          {member.email && (
            <a 
              href={`mailto:${member.email}`}
              className="flex items-center justify-center w-full py-2 bg-slate-50 border border-slate-100 hover:bg-primary-light hover:text-white rounded-xl text-xs font-bold text-slate-700 transition-all duration-200 overflow-hidden"
            >
              <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="truncate">{member.email}</span>
            </a>
          )}
          {member.website_link && (
            <a 
              href={member.website_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-2 bg-accent/10 hover:bg-accent text-primary-dark rounded-xl text-xs font-bold transition-all duration-200"
            >
              <Globe className="w-4 h-4 mr-2" />
              Faculty Profile Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Faculty = () => {
  const { faculty, loading } = useData();

  return (
    <section id="faculty" className="py-12 sm:py-20 bg-slate-50 text-center border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h6 className="text-accent font-bold uppercase tracking-widest text-xs md:text-sm mb-2">
            Renowned Educators
          </h6>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">
            Faculty Members
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Faculty Grid */}
        {loading ? (
          <div className="py-12 text-center">
            <div className="inline-block w-8 h-8 border-4 border-slate-200 border-t-primary-light rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-500 text-sm font-medium">Loading faculty profiles...</p>
          </div>
        ) : faculty.length === 0 ? (
          <div className="py-12 text-center text-slate-400">
            <p className="font-medium">No faculty members registered.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {faculty.map((member) => (
              <div key={member.id}>
                <FacultyCard member={member} />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Faculty;
