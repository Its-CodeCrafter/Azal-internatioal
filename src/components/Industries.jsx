import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Coffee, Projector, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Industries = () => {
  const sectors = [
    { title: "Commercial", icon: Building2, desc: "Office spaces & corporate hubs", path: "/sectors/commercial" },
    { title: "Residential", icon: Home, desc: "Luxury homes & apartments", path: "/sectors/residential" },
    { title: "Hospitality", icon: Coffee, desc: "Hotels, resorts & lounges", path: "/sectors/hospitality" },
    { title: "Exhibition", icon: Projector, desc: "Trade shows & events", path: "/sectors/exhibition" },
    { title: "Retail", icon: ShoppingBag, desc: "Stores & shopping malls", path: "/sectors/retail" },
  ];

  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-2">Sectors</h2>
          <h1 className="text-4xl md:text-5xl font-bold">Industries We Serve</h1>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Tailored flooring solutions for every environment, engineered for performance and aesthetics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sectors.map((item, index) => (
            <Link key={index} to={item.path} className="block h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl text-center cursor-pointer transition-colors h-full flex flex-col items-center justify-center group"
              >
                <div className="w-16 h-16 bg-slate-950 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors text-slate-300">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;