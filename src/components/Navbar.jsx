import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, User, ShoppingBag, Building2, Home, Coffee, Projector, ShoppingCart, Layers, Star } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // State for Mega Menus
  const [activeDropdown, setActiveDropdown] = useState(null); // 'sectors' | 'collections' | null
  
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- Data for Mega Menus ---
  const sectors = [
    { name: 'Commercial', path: '/sectors/commercial', icon: Building2, desc: 'Offices & Corporate' },
    { name: 'Residential', path: '/sectors/residential', icon: Home, desc: 'Luxury Homes' },
    { name: 'Hospitality', path: '/sectors/hospitality', icon: Coffee, desc: 'Hotels & Resorts' },
    { name: 'Exhibition', path: '/sectors/exhibition', icon: Projector, desc: 'Trade Shows' },
    { name: 'Retail', path: '/sectors/retail', icon: ShoppingCart, desc: 'Stores & Malls' },
  ];

  const collections = [
    { name: 'Luxury Persian', path: '/products/1', icon: Star, desc: 'Timeless Elegance' },
    { name: 'Modern Minimal', path: '/products/2', icon: Layers, desc: 'Sleek & Clean' },
    { name: 'Vintage Heritage', path: '/products/3', icon: Star, desc: 'Classic Revival' },
    { name: 'Executive Office', path: '/products/4', icon: Building2, desc: 'Professional Grade' },
  ];

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Global Presence', path: '/global' },
    { name: 'Projects', path: '/projects' },
  ];

  // Helper to check active state
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
      onMouseLeave={() => setActiveDropdown(null)} // Close mega menu on mouse leave
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tighter text-slate-900 flex items-center gap-2 z-50">
          <span className="bg-slate-900 text-white px-2 py-1 rounded">AZAL</span> International
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden lg:flex items-center gap-8">
          
          {/* Simple Links */}
          {mainLinks.slice(0, 2).map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-bold transition-colors ${
                isActive(link.path) ? 'text-accent' : scrolled ? 'text-slate-700 hover:text-accent' : 'text-slate-800 hover:text-accent'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* MEGA MENU: Collections */}
          <div className="relative" onMouseEnter={() => setActiveDropdown('collections')}>
            <button className={`flex items-center gap-1 text-sm font-bold transition-colors ${activeDropdown === 'collections' ? 'text-accent' : scrolled ? 'text-slate-700 hover:text-accent' : 'text-slate-800 hover:text-accent'}`}>
              Collections <ChevronDown size={14} className={`transition-transform ${activeDropdown === 'collections' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === 'collections' && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute top-full -left-10 mt-4 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden p-2 grid gap-1"
                >
                  {collections.map((item) => (
                    <Link key={item.name} to={item.path} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 group">
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 group-hover:bg-accent group-hover:text-white transition-colors">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{item.name}</div>
                        <div className="text-xs text-slate-400">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                  <Link to="/shop" className="block text-center text-xs font-bold text-accent mt-2 hover:underline">View All Products</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* MEGA MENU: Sectors */}
          <div className="relative" onMouseEnter={() => setActiveDropdown('sectors')}>
            <button className={`flex items-center gap-1 text-sm font-bold transition-colors ${activeDropdown === 'sectors' ? 'text-accent' : scrolled ? 'text-slate-700 hover:text-accent' : 'text-slate-800 hover:text-accent'}`}>
              Sectors <ChevronDown size={14} className={`transition-transform ${activeDropdown === 'sectors' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === 'sectors' && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute top-full -left-10 mt-4 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden p-2 grid gap-1"
                >
                  {sectors.map((item) => (
                    <Link key={item.name} to={item.path} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 group">
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 group-hover:bg-accent group-hover:text-white transition-colors">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{item.name}</div>
                        <div className="text-xs text-slate-400">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Remaining Links */}
          {mainLinks.slice(2).map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-bold transition-colors ${
                isActive(link.path) ? 'text-accent' : scrolled ? 'text-slate-700 hover:text-accent' : 'text-slate-800 hover:text-accent'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Icons & CTA */}
          <div className="flex items-center gap-4 border-l border-slate-200 pl-6 ml-2">
            <Link to="/shop" className={`hover:text-accent transition-colors ${isActive('/shop') ? 'text-accent' : 'text-slate-700'}`}>
              <ShoppingBag size={20} />
            </Link>
            <Link to="/login" className={`hover:text-accent transition-colors ${isActive('/login') ? 'text-accent' : 'text-slate-700'}`}>
              <User size={20} />
            </Link>
            <Link to="/contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-accent transition-all shadow-lg hover:shadow-xl">
              Contact Us
            </Link>
          </div>
        </div>

        {/* --- MOBILE HAMBURGER --- */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-slate-900 z-50">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-0 bg-white z-40 pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-lg font-medium">
              
              {/* Main Links */}
              {mainLinks.map((link) => (
                <Link key={link.name} to={link.path} className={`py-2 border-b border-slate-100 ${isActive(link.path) ? 'text-accent' : 'text-slate-900'}`}>
                  {link.name}
                </Link>
              ))}

              {/* Mobile Dropdown: Collections */}
              <div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Collections</div>
                {collections.map((item) => (
                  <Link key={item.name} to={item.path} className="flex items-center gap-3 py-2 text-slate-700 hover:text-accent">
                    <item.icon size={16} /> {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Dropdown: Sectors */}
              <div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Sectors</div>
                {sectors.map((item) => (
                  <Link key={item.name} to={item.path} className="flex items-center gap-3 py-2 text-slate-700 hover:text-accent">
                    <item.icon size={16} /> {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="mt-4 flex flex-col gap-4">
                 <Link to="/shop" className="flex items-center justify-center gap-2 bg-slate-100 py-3 rounded-lg text-slate-900 font-bold">
                   <ShoppingBag size={18} /> Visit Shop
                 </Link>
                 <Link to="/login" className="flex items-center justify-center gap-2 bg-slate-100 py-3 rounded-lg text-slate-900 font-bold">
                   <User size={18} /> Login
                 </Link>
                 <Link to="/contact" className="flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-lg font-bold">
                   Contact Support
                 </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;