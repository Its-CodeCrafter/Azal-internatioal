import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { History, Target, Lightbulb, Hammer, Leaf, ShieldCheck, ArrowRight, Cog, PenTool } from 'lucide-react';

const About = () => {
  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      
      {/* --- 1. Hero Section --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-20">
        <img 
          src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=2073&auto=format&fit=crop" 
          alt="Craftsmanship" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.span 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-accent font-bold tracking-widest uppercase text-sm"
          >
            Since 1995
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6"
          >
            Preserving Heritage, <br /> Engineering the Future.
          </motion.h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            From the intricate knots of a Persian rug to the precision of a surgical scalpel, AZAL International stands for uncompromising quality.
          </p>
        </div>
      </section>

      {/* --- 2. Company Story --- */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 text-accent font-bold mb-4">
              <History size={20} /> Our History
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">A Legacy of Excellence</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Founded three decades ago in Sialkot, Pakistan, AZAL International began as a small family-owned workshop dedicated to preserving the ancient art of carpet weaving.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Over the years, our commitment to precision led us to expand into a seemingly different but equally demanding field: surgical instruments. Today, we bridge the gap between art and science, exporting world-class products to over 25 countries.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
              alt="Factory Workshop" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* --- 3. Vision & Mission --- */}
      <section className="bg-slate-50 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <motion.div 
            whileHover={{ y: -5 }} 
            className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100"
          >
            <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white mb-6">
              <Lightbulb size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the global benchmark for quality in both textile artistry and medical precision, creating products that enhance lives and spaces worldwide.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }} 
            className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100"
          >
            <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To combine traditional craftsmanship with modern technology, delivering sustainable, high-performance solutions that exceed client expectations every time.
            </p>
          </motion.div>

        </div>
      </section>

      {/* --- 4. Manufacturing Process --- */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm">Behind the Scenes</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Our Manufacturing Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Raw Material", desc: "Sourcing premium wool, silk, and medical-grade steel.", icon: Cog },
            { step: "02", title: "Design & Cad", desc: "Digital blueprints for carpets and technical instruments.", icon: PenTool },
            { step: "03", title: "Fabrication", desc: "Hand-knotting for rugs; forging and milling for tools.", icon: Hammer },
            { step: "04", title: "Quality Control", desc: "Rigorous ISO-standard testing before shipping.", icon: ShieldCheck }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 border border-slate-200 rounded-xl hover:border-accent transition-colors group"
            >
              <div className="text-6xl font-bold text-slate-100 absolute top-4 right-4 group-hover:text-accent/10 transition-colors">
                {item.step}
              </div>
              <div className="relative z-10">
                <item.icon size={32} className="text-slate-900 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 5. Craftsmanship (Parallax-style) --- */}
      <section className="relative py-32 bg-slate-900 mb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=2000" 
            alt="Texture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Hammer size={48} className="text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Unrivaled Craftsmanship</h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            "We don't just manufacture; we create. Whether it is the 100 knots per square inch in our heritage rugs or the micron-level precision of our forceps, the human touch defines our quality."
          </p>
        </div>
      </section>

      {/* --- 6. Sustainability --- */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-green-50 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
             <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-2 block">Eco-Conscious</span>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Committed to Sustainability</h2>
             <p className="text-slate-600 mb-6 leading-relaxed">
               We believe luxury shouldn't cost the earth. Our facilities utilize solar power, 
               water recycling systems for textile dyeing, and ethically sourced raw materials.
             </p>
             <ul className="space-y-3 mb-8">
               <li className="flex items-center gap-3 text-slate-700 font-medium">
                 <Leaf size={20} className="text-green-600" /> Zero-Waste Manufacturing Goals
               </li>
               <li className="flex items-center gap-3 text-slate-700 font-medium">
                 <Leaf size={20} className="text-green-600" /> 100% Recyclable Packaging
               </li>
             </ul>
             <Link to="/contact" className="text-green-700 font-bold border-b border-green-700 pb-1 hover:text-green-900">
               Read our Green Policy
             </Link>
          </div>
          <div className="w-full md:w-1/2">
             <img 
               src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1000" 
               alt="Nature" 
               className="rounded-2xl shadow-xl"
             />
          </div>
        </div>
      </section>

      {/* --- 7. IP Consultation (Special Service) --- */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4 text-accent">
              <ShieldCheck size={32} />
              <span className="font-bold text-lg uppercase tracking-wide">IP & Design Consultation</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Protecting Your Unique Visions</h2>
            <p className="text-slate-400 text-lg mb-8">
              For our OEM/ODM clients, we offer specialized Intellectual Property consultation. 
              We ensure your custom carpet designs and surgical instrument prototypes are manufactured 
              with strict confidentiality and design-right protection.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-accent hover:text-white transition-all"
              >
                Book IP Consultation
              </Link>
              <Link 
                to="/projects" 
                className="px-8 py-3 rounded-full font-bold border border-slate-700 hover:bg-slate-800 transition-all"
              >
                View Private Label Work
              </Link>
            </div>
          </div>
          
          {/* Abstract Visual for IP */}
          <div className="w-full md:w-1/3 bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
             <h4 className="font-bold text-xl mb-4 border-b border-white/10 pb-4">Our Guarantee</h4>
             <ul className="space-y-4 text-slate-300">
               <li className="flex items-center gap-3"><CheckCircle size={18} className="text-accent"/> NDA Signing</li>
               <li className="flex items-center gap-3"><CheckCircle size={18} className="text-accent"/> Secure File Transfer</li>
               <li className="flex items-center gap-3"><CheckCircle size={18} className="text-accent"/> Exclusive Rights Production</li>
             </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

// Helper Icon for the "Guarantee" box
const CheckCircle = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default About;