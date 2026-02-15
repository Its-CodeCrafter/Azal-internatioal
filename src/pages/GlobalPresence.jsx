import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Award, Truck, Map, Users, CheckCircle, Package } from 'lucide-react';

const GlobalPresence = () => {
  // --- Data ---
  const stats = [
    { label: "Countries Served", value: "25+" },
    { label: "Global Partners", value: "50+" },
    { label: "Years Exporting", value: "30+" },
    { label: "International Offices", value: "6" },
  ];

  const regions = [
    { name: "North America", countries: ["USA", "Canada"] },
    { name: "Europe", countries: ["UK", "Germany", "France", "Italy", "Netherlands"] },
    { name: "Middle East", countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait"] },
    { name: "Asia Pacific", countries: ["Australia", "Japan", "Singapore", "Malaysia"] },
  ];

  const certifications = [
    { title: "ISO 9001:2015", desc: "Quality Management System Certified", icon: ShieldCheck },
    { title: "CE Marking", desc: "European Health, Safety & Environmental Standards", icon: CheckCircle },
    { title: "Green Label Plus", desc: "Eco-friendly Low VOC Emissions", icon: Award },
    { title: "Sialkot Chamber", desc: "Registered Member of SCCI", icon: Users },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      
      {/* --- Hero Section --- */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-bold tracking-widest uppercase text-sm">International Reach</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">Connecting the World</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            From our manufacturing hub in Sialkot to skyscrapers in New York and hotels in Dubai, 
            AZAL International delivers premium quality across the globe.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Map & Export Countries --- */}
      <section className="bg-slate-900 py-20 mb-20 relative overflow-hidden">
        {/* Background Map Image */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" 
            alt="World Map" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-white">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Globe className="text-accent" /> Export Destinations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {regions.map((region) => (
                  <div key={region.name}>
                    <h3 className="text-accent font-bold mb-3 border-b border-white/10 pb-2">{region.name}</h3>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      {region.countries.map(c => <li key={c} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div>{c}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual: Glowing Map Dots (Abstract Representation) */}
            <div className="w-full md:w-1/2 h-80 relative bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center">
               <div className="text-center">
                 <Map size={64} className="text-white/20 mx-auto mb-4" />
                 <p className="text-slate-400">Serving 4 Continents</p>
               </div>
               {/* Animated Dots */}
               <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent rounded-full animate-ping"></div>
               <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-ping delay-100"></div>
               <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-accent rounded-full animate-ping delay-200"></div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Distribution & Logistics --- */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Global Distribution Network</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Strategic Warehousing", icon: Package, desc: "Regional hubs in UAE and Europe ensure rapid deployment of stock for urgent projects." },
            { title: "Reliable Shipping", icon: Truck, desc: "Partnerships with top-tier logistics providers (DHL, Maersk) for air and sea freight." },
            { title: "Customs Compliance", icon: ShieldCheck, desc: "Full handling of export documentation, duties, and clearances for a hassle-free experience." }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all text-center"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 mx-auto mb-6">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Certifications & Memberships --- */}
      <div className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Certifications & Memberships</h2>
            <p className="text-slate-500 mt-2">Verified quality and trusted trade affiliations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-4 p-6 border border-slate-200 rounded-xl hover:border-accent transition-colors group">
                <div className="bg-slate-50 p-3 rounded-lg text-slate-400 group-hover:text-accent group-hover:bg-white transition-colors">
                  <cert.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{cert.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default GlobalPresence;