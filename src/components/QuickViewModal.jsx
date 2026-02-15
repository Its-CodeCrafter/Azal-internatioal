import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Star, Check, ShoppingBag } from 'lucide-react';

const QuickViewModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    // 1. Backdrop (Closes on click)
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose} 
    >
      {/* 2. Modal Content (Stops click propagation) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl relative grid md:grid-cols-2"
        onClick={(e) => e.stopPropagation()} 
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-slate-100 text-slate-900 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Left: Image Section */}
        <div className="h-64 md:h-full bg-slate-100 relative">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.category && (
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm">
              {product.category}
            </span>
          )}
        </div>

        {/* Right: Details Section */}
        <div className="p-8 flex flex-col h-full">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">{product.name}</h2>
          
          {/* Rating & Price */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold text-slate-700">${product.price}</span>
            <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold bg-yellow-50 px-2 py-1 rounded border border-yellow-100">
                <Star size={14} fill="currentColor" /> {product.rating || "4.8"}
            </div>
          </div>

          <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
            {product.description || "Experience premium quality tailored for modern spaces. This product combines durability with aesthetic elegance, perfect for high-traffic environments."}
          </p>

          {/* Quick Specs (Dynamic) */}
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-600 mb-8 bg-slate-50 p-5 rounded-xl border border-slate-100">
             {product.material && (
               <div className="flex items-center gap-2"><Check size={14} className="text-accent" /> <span>{product.material}</span></div>
             )}
             {product.color && (
               <div className="flex items-center gap-2"><Check size={14} className="text-accent" /> <span>{product.color}</span></div>
             )}
             <div className="flex items-center gap-2"><Check size={14} className="text-accent" /> <span>In Stock</span></div>
             <div className="flex items-center gap-2"><Check size={14} className="text-accent" /> <span>Fast Shipping</span></div>
          </div>

          {/* 4. Action Buttons (Redirect Logic) */}
          <div className="flex gap-4 mt-auto">
            <Link
              to={`/products/${product.id}`}
              className="flex-1 bg-slate-900 text-white py-3.5 rounded-xl font-bold text-center hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Full Details <ArrowRight size={18} />
            </Link>
            <button className="px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-accent transition-colors">
               <ShoppingBag size={20} />
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default QuickViewModal;