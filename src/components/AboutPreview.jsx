import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="py-20 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Redefining Spaces Since 1995</h2>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
           AZAL International is a premier manufacturing and exporting powerhouse based in Sialkot, Pakistan. 
           We specialize in high-precision surgical instruments and luxury flooring solutions, 
           blending traditional craftsmanship with modern innovation.
        </p>
        <Link 
          to="/about" 
          className="inline-flex items-center gap-2 bg-transparent border border-white/30 px-8 py-3 rounded-full hover:bg-white hover:text-slate-900 transition-all font-semibold"
        >
          Read Our Story <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;