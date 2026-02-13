import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Filter } from 'lucide-react';

const Shop = () => {
  const products = [
    { 
      id: 1, 
      name: "Luxury Persian Rug", 
      category: "Residential",
      price: "$299", 
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1000" 
    },
    { 
      id: 2, 
      name: "Modern Minimal Carpet", 
      category: "Commercial",
      price: "$199", 
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      id: 3, 
      name: "Vintage Heritage Rug", 
      category: "Hospitality",
      price: "$249", 
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      id: 4, 
      name: "Executive Office Tiles", 
      category: "Corporate",
      price: "$350", 
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      id: 5, 
      name: "Geometric Lounge Mat", 
      category: "Retail",
      price: "$120", 
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      id: 6, 
      name: "Classic Hotel Runner", 
      category: "Hospitality",
      price: "$450", 
      rating: 5.0,
      img: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1000&auto=format&fit=crop" 
    },
  ];

  return (
    <section className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-left"
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Online Store</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">
              Premium Collection
            </h2>
            <p className="text-slate-500 mt-2">Browse our exclusive range of high-quality flooring.</p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-2 bg-white border border-slate-200 px-5 py-2.5 rounded-lg text-slate-700 hover:border-slate-900 hover:text-slate-900 transition-all shadow-sm"
          >
            <Filter size={18} /> Filter Products
          </motion.button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Button */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link 
                    to={`/products/${product.id}`}
                    className="bg-white/90 backdrop-blur-sm text-slate-900 px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                     <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">{product.category}</p>
                     <h3 className="text-lg font-bold text-slate-900 group-hover:text-accent transition-colors">{product.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold bg-yellow-50 px-2 py-1 rounded">
                    <Star size={12} fill="currentColor" /> {product.rating}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                  <span className="text-xl font-bold text-slate-900">{product.price}</span>
                  <Link
                    to="/cart"
                    className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 active:scale-95 transform"
                  >
                    <ShoppingBag size={16} /> Add to Cart
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;