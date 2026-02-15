import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          // REPLACE with your actual high-res image URL
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
          alt="Modern Architecture"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium tracking-wide mb-6"
        >
          PREMIUM CARPETS & FLOORING
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight"
        >
          Crafting World-Class <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
            Corporate Environments
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light"
        >
          Setting the standard for floors worldwide. We deliver luxury, durability, and 
          sustainable design for the modern age.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/collections" className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Explore Collections
          </Link>
          <Link to="/about" className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition">
            Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;