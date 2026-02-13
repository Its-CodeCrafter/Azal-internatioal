import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
 
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Collections', path: '/collections' },
    { name: 'Global Presence', path: '/global' }, 
    { name: 'Contact Us', path: '/contact' },
  ];

  const sectors = [
    { name: 'Commercial', path: '/sectors/commercial' },
    { name: 'Residential', path: '/sectors/residential' },
    { name: 'Hospitality', path: '/sectors/hospitality' },
    { name: 'Exhibition', path: '/sectors/exhibition' },
    { name: 'Retail', path: '/sectors/retail' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
             <span className="bg-white text-slate-950 px-2 py-1 rounded text-lg">AZAL</span> International
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Leading manufacturer and exporter of premium carpets and precision surgical instruments. 
            Quality meets innovation in every product we deliver globally.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-slate-800">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links (FIXED) */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="hover:text-accent transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="text-slate-600 group-hover:text-accent transition-colors" /> 
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sectors */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Sectors</h3>
          <ul className="space-y-3 text-sm">
            {sectors.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="hover:text-accent transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="text-slate-600 group-hover:text-accent transition-colors" />
                  {item.name} Flooring
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-accent shrink-0 mt-1" size={18} />
              <span> ,  Lucknow, 226001, Indain</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-accent shrink-0" size={18} />
              <span>+91xxxxxx</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-accent shrink-0" size={18} />
              <span>info@xxxxxx.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-900 pt-8 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Azal International. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;