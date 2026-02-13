import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Building2 } from 'lucide-react';

const GlobalPresence = () => {
  const locations = [
    { country: "UAE", city: "Dubai", address: "Business Bay, Tower A", phone: "+971 50 123 4567" },
    { country: "UK", city: "London", address: "Canary Wharf, Level 32", phone: "+44 20 7946 0123" },
    { country: "USA", city: "New York", address: "Manhattan, 5th Avenue", phone: "+1 212 555 0199" },
    { country: "Germany", city: "Frankfurt", address: "Main Tower, Neue Mainzer", phone: "+49 69 1234 5678" },
    { country: "India", city: "Mumbai", address: "BKC, Trade Centre", phone: "+91 22 1234 5678" },
    { country: "Pakistan", city: "Sialkot", address: "Industrial Estate, 51310", phone: "+92 52 123 4567" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-accent font-bold tracking-widest uppercase text-sm"
        >
          Worldwide Network
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6"
        >
          Global Presence
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-500 max-w-2xl mx-auto text-lg"
        >
          Delivering premium quality and service across borders. We are strategically located to serve our international clientele efficiently.
        </motion.p>
      </div>

      {/* Map Section - Dark Modern Look */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[300px] md:h-[500px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
        >
          {/* Abstract Map Background Image */}
          <img 
            // Reliable Unsplash Image for "Global Network"
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="World Map Network" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
          
          <div className="relative z-10 text-center px-4">
            <Globe className="w-16 h-16 text-accent mx-auto mb-4 animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Connecting Continents</h2>
          </div>
        </motion.div>
      </div>

      {/* Locations Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-accent transition-colors">{loc.country}</h3>
                  <p className="text-slate-500 font-medium">{loc.city}</p>
                </div>
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-accent group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
              </div>
              
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <Building2 size={16} className="text-slate-400" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-slate-400 text-xs uppercase tracking-wider">Phone:</span>
                  <span>{loc.phone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default GlobalPresence;