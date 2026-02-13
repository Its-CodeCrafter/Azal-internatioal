import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, ShoppingBag } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();

  // Mock Data (Real app mein ye API se aayega)
  const products = [
    { 
      id: 1, 
      title: "Luxury Persian", 
      category: "Residential", 
      price: "$1,200",
      description: "Hand-knotted wool carpet featuring intricate traditional patterns. Perfect for adding a touch of elegance to living rooms.",
      specs: ["100% Wool", "Hand-knotted", "High Durability", "Stain Resistant"],
      img: "https://images.unsplash.com/photo-158249244916-6f15ddc2c2cb?auto=format&fit=crop&q=80" 
    },
    { 
      id: 2, 
      title: "Modern Minimalist", 
      category: "Commercial", 
      price: "$850",
      description: "Sleek, grey-toned flooring designed for modern office spaces. Easy to clean and highly durable for heavy foot traffic.",
      specs: ["Nylon Fiber", "Machine Tufted", "Sound Absorbing", "Fire Resistant"],
      img: "https://images.unsplash.com/photo-1561627939-7013d1a9a36c?auto=format&fit=crop&q=80" 
    },
    { 
      id: 3, 
      title: "Vintage Heritage", 
      category: "Hospitality", 
      price: "$2,100",
      description: "A timeless classic design that brings warmth and luxury to hotel lobbies and suites.",
      specs: ["Silk & Wool Blend", "Hand-woven", "Fade Resistant", "Premium Finish"],
      img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80" 
    },
    { 
      id: 4, 
      title: "Executive Office", 
      category: "Corporate", 
      price: "$950",
      description: "Professional grade carpet tiles offering flexibility and sophisticated aesthetics for boardrooms.",
      specs: ["Modular Tiles", "Eco-friendly", "Easy Replacement", "Anti-static"],
      img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80" 
    },
  ];

  // Find product by ID
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-400">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Button */}
        <Link to="/collections" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 transition-colors">
          <ArrowLeft size={20} /> Back to Collections
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-xl">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
          >
            <img src={product.img} alt={product.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>

          {/* Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2">{product.category}</span>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.title}</h1>
            <p className="text-2xl font-semibold text-slate-700 mb-6">{product.price}</p>
            
            <p className="text-slate-500 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Specs List */}
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-4">Specifications:</h3>
              <ul className="grid grid-cols-2 gap-3">
                {product.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check size={16} className="text-green-500" /> {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                <ShoppingBag size={20} /> Enquire Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;