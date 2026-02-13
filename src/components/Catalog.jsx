import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, ArrowRight, FileText } from 'lucide-react';

const Catalog = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80" 
          alt="Dark Texture Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6 mx-auto md:mx-0">
            <FileText size={14} /> New Edition Available By Shailesh Kumar
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Download Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              2026 Product Catalog
            </span>
          </h2>
          
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Explore our complete range of premium carpets, technical specifications, and design inspirations in one comprehensive document.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-accent hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2 group">
              <Download size={20} className="group-hover:translate-y-1 transition-transform" /> 
              Download PDF
            </button>
            <Link to="/contact" className="px-8 py-4 rounded-xl font-bold text-white border border-slate-700 hover:bg-slate-800 transition-all flex items-center gap-2">
              Request Hard Copy <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Abstract Visual / Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hidden md:block relative"
        >
           {/* Floating Card Design */}
           <div className="w-64 h-80 bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 rounded-lg shadow-2xl transform rotate-6 flex items-center justify-center relative z-10 group hover:rotate-0 transition-transform duration-500">
              <div className="text-center">
                <span className="text-5xl font-bold text-white/10 tracking-tighter group-hover:text-accent/20 transition-colors">AZAL</span>
                <p className="text-white/20 text-sm mt-2 uppercase tracking-widest">Catalog 2026</p>
              </div>
           </div>
           
           {/* Decorative Glow Effect */}
           <div className="absolute top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl z-0"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Catalog;