import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
    { id: 1, title: "Grand Hyatt Lobby", loc: "Dubai, UAE", img: "https://images.unsplash.com/photo-1560185127-6a6829f0ef71?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "TechSpace HQ", loc: "Berlin, Germany", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Featured Projects</h2>
          </div>
          <Link to="/projects" className="hidden md:flex items-center gap-2 text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-accent hover:border-accent transition-colors">
            View All Case Studies <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-slate-300">{item.loc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
           <Link to="/projects" className="inline-block bg-slate-100 px-6 py-3 rounded-lg font-bold">View All Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;