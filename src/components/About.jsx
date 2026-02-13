import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Intro */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-6">About Azal International</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We are a manufacturing and exporting company dealing in Surgical Instruments and Medical Diagnostic sets based in Sialkot, Pakistan. But we have evolved.
          </p>
        </motion.div>
      </div>

      {/* Content Grid */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-900">Our Core Strength</h2>
            <div className="w-20 h-1 bg-accent mb-6"></div>
            <p className="text-slate-600 leading-7">
              Our skilled workforce utilizes state-of-the-art techniques including computer-aided designing and imaging, combined with cost-effective production methods. 
            </p>
            <p className="text-slate-600 leading-7">
              From precision surgical instruments to premium flooring solutions, our research and development team continuously strives to improve product specifications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-slate-200 rounded-2xl transform rotate-3 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
              alt="Team working" 
              className="relative z-10 rounded-xl shadow-lg w-full"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;