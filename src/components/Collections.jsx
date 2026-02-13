import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const Collections = () => {
  // Mock Data - Replace with your actual collection data
  const collections = [
    { id: 1, title: "Luxury Persian", category: "Residential", img: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?q=80&w=1035&auto=format&fit=crop" },
    { id: 2, title: "Modern Minimalist", category: "Commercial", img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, title: "Vintage Heritage", category: "Hospitality", img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80" },
    { id: 4, title: "Executive Office", category: "Corporate", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80" },
  ];

  return (
    <section className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Premium Collections</h1>
          <p className="text-slate-500">Discover our curated range of designs crafted for elegance.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <Link to={`/products/${item.id}`} className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-sm">View Details</Link>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{item.category}</p>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;