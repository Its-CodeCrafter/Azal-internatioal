import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

// Import All Sections
import Hero from '../components/Hero';                     // 1. Hero
import AboutPreview from '../components/AboutPreview';     // 2. About Preview
import Collections from './Collections';       // 3. Featured Collections
import FeaturedProjects from '../components/FeaturedProjects'; // 4. Featured Projects
import Industries from '../components/Industries';         // 5. Sectors Preview
import Exhibitions from '../components/Exhibitions';       // 7. Exhibitions
import Sustainability from '../components/Sustainability'; // 8. Sustainability
import Catalog from '../components/Catalog';               // 9. Newsletter/Catalog

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Preview Section */}
      <AboutPreview />

      {/* 3. Featured Collections (Grid + Quick View) */}
      <Collections />

      {/* 4. Featured Projects (Previews + Redirect) */}
      <FeaturedProjects />

      {/* 5. Sectors Preview (Cards + Read More) */}
      <Industries />

      {/* 6. Global Presence Preview (Summary + Redirect) */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-lg">
             <span className="text-accent font-bold uppercase tracking-widest text-sm">International Reach</span>
             <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Exporting to 20+ Countries</h2>
             <p className="text-slate-600 mb-8 text-lg">
               From the heart of Sialkot to the skyscrapers of New York and Dubai, our products define quality on a global scale.
             </p>
             <Link to="/global" className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-accent transition-colors inline-flex items-center gap-2">
               <Globe size={18} /> View Global Network
             </Link>
          </div>
          {/* Simple Map Visual for Preview */}
          <div className="w-full md:w-1/2">
             <img 
               src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" 
               alt="World Map" 
               className="rounded-2xl shadow-2xl opacity-80" 
             />
          </div>
        </div>
      </section>

      {/* 7. Exhibition Section (Upcoming & Previous) */}
      <Exhibitions />

      {/* 8. Sustainability Section */}
      <Sustainability />

      {/* 9. Newsletter / Catalogue Request */}
      <Catalog />

    </div>
  );
};

export default Home;