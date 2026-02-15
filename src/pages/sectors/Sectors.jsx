import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Home, Coffee, Projector, ShoppingBag, ArrowRight } from 'lucide-react';

export const sectorsList = [
  {
    id: 'hospitality',
    title: 'Hospitality',
    icon: Coffee,
    desc: 'Creating unforgettable guest experiences through luxury flooring.',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'residential',
    title: 'Residential',
    icon: Home,
    desc: 'Warm, durable, and stylish solutions for modern living spaces.',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'commercial',
    title: 'Commercial',
    icon: Building2,
    desc: 'High-performance flooring for high-traffic corporate environments.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'exhibition',
    title: 'Exhibition',
    icon: Projector,
    desc: 'Temporary and permanent flooring for trade shows and events.',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'retail',
    title: 'Retail',
    icon: ShoppingBag,
    desc: 'Flooring that enhances brand aesthetics and withstands footfall.',
    img: 'https://images.unsplash.com/photo-1567449303078-57a66152ec72?auto=format&fit=crop&q=80&w=1000'
  }
];

const Sectors = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-accent font-bold tracking-widest uppercase text-sm">Industries</span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">Sectors We Serve</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          We specialize in delivering tailored flooring solutions across five key industries, ensuring durability, aesthetics, and performance.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sectorsList.map((sector, index) => (
          <motion.div
            key={sector.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Background Image */}
            <img 
              src={sector.img} 
              alt={sector.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-accent mb-4 border border-white/20">
                <sector.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{sector.title}</h3>
              <p className="text-slate-300 text-sm mb-6 line-clamp-2">{sector.desc}</p>
              
              <Link 
                to={`/sectors/${sector.id}`} 
                className="inline-flex items-center gap-2 text-white font-bold border-b border-accent pb-1 hover:text-accent transition-colors"
              >
                Explore Sector <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sectors;