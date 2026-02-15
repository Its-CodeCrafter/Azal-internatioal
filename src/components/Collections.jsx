import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, Eye, ArrowRight, ShoppingBag } from 'lucide-react';

const Collections = () => {
  // --- 1. Raw Data ---
  const rawProducts = [
    { 
      id: 1, 
      name: "Luxury Persian Rug", 
      category: "Residential", 
      material: "Wool", 
      color: "Red", 
      price: 299, 
      style: "Traditional",
      size: "Large",
      tags: ["hand-knotted", "luxury", "vintage"],
      img: "https://images.unsplash.com/photo-158249244916-6f15ddc2c2cb?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 2, 
      name: "Modern Minimal Carpet", 
      category: "Commercial", 
      material: "Synthetic", 
      color: "Grey", 
      price: 199, 
      style: "Modern",
      size: "Medium",
      tags: ["office", "durable", "clean"],
      img: "https://images.unsplash.com/photo-1561627939-7013d1a9a36c?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 3, 
      name: "Vintage Heritage Rug", 
      category: "Hospitality", 
      material: "Silk Blend", 
      color: "Beige", 
      price: 450, 
      style: "Vintage",
      size: "Large",
      tags: ["hotel", "elegant", "soft"],
      img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 4, 
      name: "Executive Tiles", 
      category: "Corporate", 
      material: "Nylon", 
      color: "Blue", 
      price: 120, 
      style: "Modern",
      size: "Small",
      tags: ["tiles", "office", "modular"],
      img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 5, 
      name: "Boho Chic Runner", 
      category: "Residential", 
      material: "Cotton", 
      color: "Multi", 
      price: 85, 
      style: "Bohemian",
      size: "Small",
      tags: ["colorful", "artistic", "runner"],
      img: "https://images.unsplash.com/photo-1574634534894-89d750a6f8bc?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 6, 
      name: "Industrial Concrete Look", 
      category: "Commercial", 
      material: "Vinyl", 
      color: "Grey", 
      price: 150, 
      style: "Industrial",
      size: "Large",
      tags: ["waterproof", "heavy-duty"],
      img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800" 
    },
  ];

  // --- State ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); // For Modal
  const [showFilters, setShowFilters] = useState(false); // Mobile toggle
  
  const [filters, setFilters] = useState({
    material: [],
    color: [],
    style: [],
    priceRange: 1000 // Max price slider
  });

  // --- Filter Options ---
  const materials = ["Wool", "Synthetic", "Silk Blend", "Nylon", "Cotton", "Vinyl"];
  const colors = ["Red", "Grey", "Beige", "Blue", "Multi"];
  const styles = ["Traditional", "Modern", "Vintage", "Bohemian", "Industrial"];

  // --- Handlers ---
  const handleFilterChange = (category, value) => {
    setFilters(prev => {
      const current = prev[category];
      if (current.includes(value)) {
        return { ...prev, [category]: current.filter(item => item !== value) };
      } else {
        return { ...prev, [category]: [...current, value] };
      }
    });
  };

  // --- Data Logic: Filter -> Search -> Render ---
  const filteredProducts = useMemo(() => {
    return rawProducts.filter(product => {
      // 1. Apply Filters
      const matchesMaterial = filters.material.length === 0 || filters.material.includes(product.material);
      const matchesColor = filters.color.length === 0 || filters.color.includes(product.color);
      const matchesStyle = filters.style.length === 0 || filters.style.includes(product.style);
      const matchesPrice = product.price <= filters.priceRange;

      if (!matchesMaterial || !matchesColor || !matchesStyle || !matchesPrice) return false;

      // 2. Apply Search (Name, Category, Material, Tags)
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.material.toLowerCase().includes(query) ||
          product.tags.some(tag => tag.toLowerCase().includes(query));
        
        if (!matchesSearch) return false;
      }

      return true;
    });
  }, [filters, searchQuery, rawProducts]);

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      
      {/* --- Top Bar: Search & Mobile Filter Toggle --- */}
      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 px-6 mb-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-3 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by name, material, or tag..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none bg-slate-50"
            />
          </div>

          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 text-slate-700 font-bold"
          >
            <Filter size={20} /> Filters
          </button>

          <div className="hidden md:block text-slate-500 text-sm">
            Showing {filteredProducts.length} results
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* --- Sidebar: Filters --- */}
        <aside className={`md:block ${showFilters ? 'block' : 'hidden'} space-y-8 bg-white p-6 rounded-xl shadow-sm h-fit`}>
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Price Range</h3>
            <input 
              type="range" 
              min="0" 
              max="1000" 
              value={filters.priceRange} 
              onChange={(e) => setFilters({...filters, priceRange: Number(e.target.value)})}
              className="w-full accent-slate-900" 
            />
            <div className="text-sm text-slate-500 mt-2">Max Price: ${filters.priceRange}</div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-3">Material</h3>
            <div className="space-y-2">
              {materials.map(m => (
                <label key={m} className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={filters.material.includes(m)}
                    onChange={() => handleFilterChange('material', m)}
                    className="accent-accent w-4 h-4" 
                  />
                  <span className="text-slate-600 text-sm">{m}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-3">Style</h3>
            <div className="space-y-2">
              {styles.map(s => (
                <label key={s} className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={filters.style.includes(s)}
                    onChange={() => handleFilterChange('style', s)}
                    className="accent-accent w-4 h-4" 
                  />
                  <span className="text-slate-600 text-sm">{s}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-3">Color</h3>
            <div className="flex flex-wrap gap-2">
              {colors.map(c => (
                <button
                  key={c}
                  onClick={() => handleFilterChange('color', c)}
                  className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${
                    filters.color.includes(c) ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* --- Product Grid --- */}
        <div className="md:col-span-3">
          {filteredProducts.length === 0 ? (
             <div className="text-center py-20">
               <p className="text-slate-400 text-lg">No products match your criteria.</p>
               <button onClick={() => setFilters({ material: [], color: [], style: [], priceRange: 1000 })} className="text-accent font-bold mt-2 hover:underline">Clear Filters</button>
             </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-200">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    
                    {/* Quick View Button (Overlay) */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button 
                        onClick={() => setSelectedProduct(product)}
                        className="bg-white text-slate-900 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-accent hover:text-white transition-colors"
                      >
                        <Eye size={16} /> Quick View
                      </button>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase">{product.category}</span>
                      <span className="text-slate-900 font-bold">${product.price}</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{product.name}</h3>
                    <p className="text-xs text-slate-500 mb-4">{product.material} • {product.style}</p>
                    
                    <Link 
                      to={`/products/${product.id}`}
                      className="w-full block text-center border border-slate-200 py-2 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* --- Quick View Modal --- */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl relative grid md:grid-cols-2"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-white text-slate-900 transition"
              >
                <X size={20} />
              </button>
              
              <div className="h-64 md:h-full bg-slate-100">
                <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <span className="text-accent font-bold uppercase tracking-widest text-xs mb-2">{selectedProduct.category}</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">{selectedProduct.name}</h2>
                <div className="text-2xl font-bold text-slate-700 mb-6">${selectedProduct.price}</div>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 mb-8">
                  <div><span className="font-bold block text-slate-900">Material</span> {selectedProduct.material}</div>
                  <div><span className="font-bold block text-slate-900">Style</span> {selectedProduct.style}</div>
                  <div><span className="font-bold block text-slate-900">Color</span> {selectedProduct.color}</div>
                  <div><span className="font-bold block text-slate-900">Size</span> {selectedProduct.size}</div>
                </div>

                <Link 
                  to={`/products/${selectedProduct.id}`}
                  className="bg-slate-900 text-white py-4 rounded-xl font-bold text-center hover:bg-accent transition-colors flex items-center justify-center gap-2"
                >
                  View Full Details <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Collections;