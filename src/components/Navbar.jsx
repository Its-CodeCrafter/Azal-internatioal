import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, User, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

 
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    
    { name: 'Global Presence', path: '/global' },
    { name: 'Projects', path: '/projects' },
  ];

  const sectors = [
    { name: 'Commercial', path: '/sectors/commercial' },
    { name: 'Residential', path: '/sectors/residential' },
    { name: 'Hospitality', path: '/sectors/hospitality' },
    { name: 'Exhibition', path: '/sectors/exhibition' },
    { name: 'Retail', path: '/sectors/retail' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tighter text-slate-900 flex items-center gap-2">
          <span className="bg-slate-900 text-white px-2 py-1 rounded">AZAL</span> International
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-slate-600' : 'text-slate-800'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors ${
                scrolled ? 'text-slate-600' : 'text-slate-800'
              }`}
            >
              Sectors <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden py-1"
                >
                  {sectors.map((sector) => (
                    <Link
                      key={sector.name}
                      to={sector.path}
                      className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-accent transition-colors"
                    >
                      {sector.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Login & Cart Buttons */}
          <div className="flex items-center gap-4 border-l border-slate-300 pl-4 ml-2">
            <Link to="/shop" className={`hover:text-accent transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-800'}`}>
                <ShoppingBag size={20} />
            </Link>
            
            <Link 
                to="/login" 
                className={`text-sm font-medium hover:text-accent transition-colors flex items-center gap-1 ${
                    scrolled ? 'text-slate-600' : 'text-slate-800'
                }`}
            >
                <User size={18} />
            </Link>
          </div>

          <Link to="/contact" className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl ml-2">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-800">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="text-slate-700 font-medium py-1">{link.name}</Link>
              ))}
              
              <div className="border-t border-slate-100 pt-2">
                <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-widest">Sectors</p>
                {sectors.map((sector) => (
                  <Link key={sector.name} to={sector.path} className="block py-1 text-slate-600 pl-2 hover:text-accent transition-colors">{sector.name}</Link>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-4 mt-2">
                 <Link 
                   to="/login" 
                   className="flex items-center justify-center gap-2 w-full bg-slate-100 text-slate-900 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors"
                 >
                   <User size={18} /> Login / Register
                 </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;