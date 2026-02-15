import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingBag, Filter, Star, Eye } from 'lucide-react';

// Import the Modal
import QuickViewModal from '../components/QuickViewModal';

// --- Shared Data ---
export const productsData = [
  { 
    id: 1, 
    name: "Luxury Persian Rug", 
    category: "Residential", 
    price: 299, 
    rating: 4.9, 
    reviews: 12,
    specs: { material: "100% Wool", origin: "Iran", weight: "12kg" },
    img: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    name: "Modern Minimal Carpet", 
    category: "Commercial", 
    price: 199, 
    rating: 4.7, 
    reviews: 8,
    specs: { material: "Nylon Blend", origin: "Germany", weight: "8kg" },
    img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    name: "Vintage Heritage Rug", 
    category: "Hospitality", 
    price: 450, 
    rating: 5.0, 
    reviews: 24,
    specs: { material: "Silk & Wool", origin: "Turkey", weight: "15kg" },
    img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 4, 
    name: "Executive Office Tiles", 
    category: "Corporate", 
    price: 120, 
    rating: 4.5, 
    reviews: 5,
    specs: { material: "Synthetic", origin: "China", weight: "2kg/tile" },
    img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 5, 
    name: "Bohemian Runner", 
    category: "Residential", 
    price: 85, 
    rating: 4.6, 
    reviews: 18,
    specs: { material: "Cotton", origin: "India", weight: "3kg" },
    img: "https://images.unsplash.com/photo-1574634534894-89d750a6f8bc?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 6, 
    name: "Industrial Grey", 
    category: "Commercial", 
    price: 150, 
    rating: 4.8, 
    reviews: 9,
    specs: { material: "Vinyl", origin: "USA", weight: "10kg" },
    img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800" 
  },
];

const Shop = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Modal State

  const categories = ["All", ...new Set(productsData.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [query, selectedCategory]);

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header & Search --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Online Store</h1>
            <p className="text-slate-500 mt-1">Found {filteredProducts.length} premium items</p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-3 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 focus:border-slate-900 outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <button className="bg-slate-900 text-white p-3 rounded-full relative">
              <ShoppingBag size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* --- Sidebar Filters --- */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Filter size={18} /> Categories
              </h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                      selectedCategory === cat 
                        ? 'bg-slate-900 text-white font-bold' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* --- Product Grid (RESPONSIVE UPDATE HERE) --- */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-200">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    
                    {/* Wishlist Button */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(product.id);
                        }}
                        className={`p-2 rounded-full shadow-md transition-all ${
                          wishlist.includes(product.id) ? 'bg-red-500 text-white' : 'bg-white text-slate-400 hover:text-red-500'
                        }`}
                      >
                        <Heart size={18} fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
                      </button>
                    </div>

                    {/* Quick View Button */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <button 
                         onClick={() => setSelectedProduct(product)}
                         className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full font-bold text-slate-900 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all hover:bg-accent hover:text-white"
                       >
                         <Eye size={16} /> Quick View
                       </button>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">{product.category}</span>
                      <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold">
                        <Star size={12} fill="currentColor" /> {product.rating}
                      </div>
                    </div>
                    <Link to={`/products/${product.id}`} className="block mb-auto">
                      <h3 className="font-bold text-lg text-slate-900 mb-1 hover:text-accent transition-colors line-clamp-2">{product.name}</h3>
                    </Link>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-slate-900">${product.price}</span>
                      <button 
                        onClick={() => addToCart(product)}
                        className="bg-slate-900 text-white p-2 rounded-lg hover:bg-accent transition-colors"
                      >
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <QuickViewModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
};

export default Shop;