import React from 'react';
import { motion } from 'framer-motion';

const Commercial = () => {
  // Mock Data
  const features = [
    { title: "High Traffic Resistant", desc: "Engineered for durability in busy corporate hubs." },
    { title: "Acoustic Insulation", desc: "Reduce noise pollution in open-plan offices." },
    { title: "Modular Design", desc: "Easy replacement and flexible layout options." },
    { title: "Sustainable Materials", desc: "Eco-friendly production meeting LEED standards." },
  ];

  return (
    <section className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Sectors</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Commercial Solutions</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Professional flooring solutions tailored for modern offices, trade shows, and event spaces. 
            Blending aesthetics with industrial-grade durability.
          </p>
        </motion.div>

        {/* Main Banner Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl mb-20 relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" 
            alt="Office Interior" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-slate-900">
                {/* You can add icons here based on index */}
                <div className="w-6 h-6 bg-slate-900 rounded-full" /> 
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commercial;