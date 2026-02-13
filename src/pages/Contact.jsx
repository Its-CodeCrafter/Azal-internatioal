import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We have received your message.");
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      
      {/* --- Header Section --- */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-accent font-bold tracking-widest uppercase text-sm"
        >
          Get in Touch
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6"
        >
          We'd Love to Hear From You
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-500 max-w-2xl mx-auto text-lg"
        >
          Whether you have a question about our products, pricing, or global distribution, our team is ready to answer all your questions.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* --- Left Column: Contact Info & Map --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-accent/50 transition-colors group">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                <Phone size={24} className="text-accent group-hover:text-white" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Call Us</h3>
              <p className="text-slate-500 mt-2 text-sm">+91-xxxx</p>
              <p className="text-slate-500 text-sm">+91-xxxxx</p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-accent/50 transition-colors group">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                <Mail size={24} className="text-accent group-hover:text-white" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Email Us</h3>
              <p className="text-slate-500 mt-2 text-sm"></p>
              <p className="text-slate-500 text-sm">skrajbhar551@gmail.com</p>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-accent/50 transition-colors group">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                <MapPin size={24} className="text-accent group-hover:text-white" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Headquarters</h3>
              <p className="text-slate-500 mt-2 text-sm"> Lucknow,<br /> 226001, Uttar Pradesh , India</p>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-accent/50 transition-colors group">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                <Clock size={24} className="text-accent group-hover:text-white" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Working Hours</h3>
              <p className="text-slate-500 mt-2 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
              <p className="text-slate-500 text-sm">Sunday: Closed</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden shadow-lg relative group">
             <img 
               src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" 
               alt="Office Location Map" 
               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
             />
             <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                <a 
                  href="https://www.google.com/maps" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-bold hover:bg-accent hover:text-white transition-all shadow-lg flex items-center gap-2 transform hover:-translate-y-1"
                >
                  <Globe size={18} /> View on Google Maps
                </a>
             </div>
          </div>
        </motion.div>

        {/* --- Right Column: Contact Form --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Send us a Message</h2>
            <p className="text-slate-500 text-sm mt-2">Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="Shailesh Kumar" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="skrajbhar551@gmail.com" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Subject</label>
              <input 
                type="text" 
                name="subject"
                required
                value={formState.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-slate-50 focus:bg-white"
                placeholder="Inquiry regarding..." 
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Message</label>
              <textarea 
                rows="5" 
                name="message"
                required
                value={formState.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                placeholder="How can we help you?" 
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform active:scale-95"
            >
              <Send size={20} /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;