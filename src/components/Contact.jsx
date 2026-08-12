import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Landmark } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate message sending
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h6 className="text-accent font-bold uppercase tracking-widest text-xs md:text-sm mb-2">
            Get in touch
          </h6>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Visit Us */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-start">
              <div className="w-12 h-12 bg-primary-light/10 text-primary-light rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                <MapPin className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-extrabold text-primary-dark text-base mb-1.5">Visit Us</h4>
                <p className="text-slate-600 text-sm leading-relaxed m-0">
                  Government College of Engineering,<br />
                  Erode - 638052, Tamil Nadu, India.
                </p>
              </div>
            </div>

            {/* Call Us */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-start">
              <div className="w-12 h-12 bg-accent/15 text-primary-dark rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-extrabold text-primary-dark text-base mb-1.5">Call Us</h4>
                <a 
                  href="tel:+914242530085"
                  className="text-slate-600 hover:text-primary-light text-sm font-semibold transition-colors m-0 block"
                >
                  +91 424 2530085
                </a>
              </div>
            </div>

            {/* Email Us */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-start">
              <div className="w-12 h-12 bg-primary-light/10 text-primary-light rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-extrabold text-primary-dark text-base mb-1.5">Email Us</h4>
                <a 
                  href="mailto:civil@gcee.ac.in"
                  className="text-slate-600 hover:text-primary-light text-sm font-semibold transition-colors m-0 block"
                >
                  civil@gcee.ac.in
                </a>
              </div>
            </div>

            {/* GCE Erode Blurb */}
            <div className="bg-primary-dark text-white p-6 rounded-3xl shadow-md border border-white/5 flex items-start flex-grow">
              <div className="w-12 h-12 bg-white/10 text-accent rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                <Landmark className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-extrabold text-accent text-base mb-1.5">GCE Erode</h4>
                <p className="text-white/80 text-xs md:text-sm leading-relaxed m-0 font-light">
                  Government College of Engineering, Erode imparts training to civil engineering students using the latest curriculum and modern pedagogical tools. It was established in 1984 as IRTT and is now a premier government institution.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Feedback Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-slate-100 h-full flex flex-col justify-center">
              <h3 className="text-xl font-bold text-primary-dark mb-6 text-left">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary-light transition-colors text-slate-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary-light transition-colors text-slate-800"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Subject</label>
                  <input 
                    type="text" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Admissions inquiry / Feedback"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary-light transition-colors text-slate-800"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Message</label>
                  <textarea 
                    rows="4" 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary-light transition-colors text-slate-800 resize-none"
                  ></textarea>
                </div>

                {isSent ? (
                  <div className="py-3 px-4 bg-green-50 text-green-700 rounded-xl text-sm font-semibold border border-green-200 text-center animate-fadeIn">
                    Message sent successfully! We will get back to you shortly.
                  </div>
                ) : (
                  <button 
                    type="submit"
                    className="inline-flex items-center justify-center bg-primary-light hover:bg-primary-dark text-white px-8 py-3.5 font-bold rounded-xl shadow transition-all duration-200 border-0 cursor-pointer text-sm w-full sm:w-auto"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
