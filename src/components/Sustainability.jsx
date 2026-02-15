import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Droplets, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sustainability = () => {
  return (
    <section className="py-24 bg-green-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-green-700 font-bold tracking-widest uppercase text-sm mb-2 block">Our Commitment</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Sustainable <br /><span className="text-green-600">Flooring Solutions</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            We believe in luxury that doesn't cost the earth. Our manufacturing processes prioritize eco-friendly materials, zero-waste initiatives, and energy efficiency.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700"><Recycle size={20}/></div>
              <span className="font-semibold text-slate-800">100% Recyclable Materials</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700"><Droplets size={20}/></div>
              <span className="font-semibold text-slate-800">Water Conservation Tech</span>
            </div>
          </div>

          <Link to="/sustainability" className="inline-flex items-center gap-2 text-green-700 font-bold hover:gap-4 transition-all">
            Read our Green Policy <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb771343?auto=format&fit=crop&q=80&w=1000" 
            alt="Nature and Architecture" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent flex items-end p-8">
            <div className="text-white">
               <Leaf className="mb-4 text-green-400" size={32} />
               <p className="font-medium">"Building a greener future, one floor at a time."</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sustainability;