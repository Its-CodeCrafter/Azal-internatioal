import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';

// --- Sector Specific Data ---
const sectorDetails = {
  hospitality: {
    title: "Hospitality Flooring",
    subtitle: "Creating Unforgettable Guest Experiences",
    intro: "In the hospitality industry, every detail counts. From the moment a guest steps into the lobby to the comfort of their room, the flooring sets the tone. Our solutions blend acoustic comfort, luxury aesthetics, and high durability.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
    approach: [
      { title: "Acoustic Comfort", desc: "Sound-absorbing materials to ensure quiet corridors and rooms." },
      { title: "High Traffic Durability", desc: "Engineered to withstand thousands of daily footsteps without wear." },
      { title: "Custom Design", desc: "Bespoke patterns to match your hotel's unique brand identity." }
    ],
    relatedProjects: [
      { title: "Grand Hyatt Lobby", loc: "Dubai", img: "https://images.unsplash.com/photo-1560185127-6a6829f0ef71?auto=format&fit=crop&q=80&w=600" },
      { title: "Marriott Suites", loc: "London", img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  residential: {
    title: "Residential Flooring",
    subtitle: "Comfort & Style for Modern Living",
    intro: "Your home is your sanctuary. Our residential collections focus on warmth, softness, and timeless design. Whether it's a plush bedroom carpet or a durable living room rug, we ensure safety and style.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    approach: [
      { title: "Soft Touch", desc: "Premium wool blends for a luxurious underfoot feel." },
      { title: "Stain Resistance", desc: "Easy-to-clean fibers perfect for homes with kids and pets." },
      { title: "Eco-Friendly", desc: "Sustainable materials promoting a healthy indoor environment." }
    ],
    relatedProjects: [
      { title: "Skyline Penthouse", loc: "New York", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600" },
      { title: "Palm Villa", loc: "Miami", img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  commercial: {
    title: "Commercial Flooring",
    subtitle: "Engineered for Productivity",
    intro: "Modern workspaces require flooring that balances professional aesthetics with industrial-grade performance. Our modular tiles and broadloom carpets are designed for flexibility and longevity.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    approach: [
      { title: "Modular Flexibility", desc: "Carpet tiles that allow easy replacement and layout changes." },
      { title: "Ergonomic Support", desc: "Cushioned backing to reduce fatigue for standing staff." },
      { title: "Branding Integration", desc: "Colors and patterns that align with corporate identities." }
    ],
    relatedProjects: [
      { title: "TechSpace HQ", loc: "Berlin", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600" },
      { title: "Finance Tower", loc: "Singapore", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  exhibition: {
    title: "Exhibition Flooring",
    subtitle: "Impactful Designs for Events",
    intro: "Trade shows and events are temporary but high-impact. Our exhibition flooring creates zones, guides foot traffic, and elevates booth presentation with rapid installation and removal.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    approach: [
      { title: "Rapid Install", desc: "Lightweight systems designed for quick setup and breakdown." },
      { title: "High Visual Impact", desc: "Vibrant colors to capture attention in busy halls." },
      { title: "Recyclability", desc: "Sustainable options for short-term usage events." }
    ],
    relatedProjects: [
      { title: "Auto Expo Booth", loc: "Geneva", img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=600" },
      { title: "Tech Summit", loc: "San Francisco", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  retail: {
    title: "Retail Flooring",
    subtitle: "Enhancing the Shopper Journey",
    intro: "Flooring guides the customer journey. We create durable, attractive surfaces that withstand heavy foot traffic while complementing product displays.",
    img: "https://images.unsplash.com/photo-1567449303078-57a66152ec72?auto=format&fit=crop&q=80&w=1200",
    approach: [
      { title: "Heavy Duty Wear", desc: "Materials tested for thousands of daily visitors." },
      { title: "Wayfinding Design", desc: "Using patterns to subconsciously guide customer flow." },
      { title: "Maintenance", desc: "Stain-resistant coatings for easy nightly cleaning." }
    ],
    relatedProjects: [
      { title: "Luxury Mall Atrium", loc: "Paris", img: "https://images.unsplash.com/photo-1519567241046-7f570eee3d9f?auto=format&fit=crop&q=80&w=600" },
      { title: "Boutique Store", loc: "Milan", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600" }
    ]
  }
};

const SectorDetail = () => {
  const { type } = useParams();
  const data = sectorDetails[type];

  if (!data) return <div className="min-h-screen flex items-center justify-center">Sector Not Found</div>;

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      
      {/* Hero Header */}
      <div className="relative h-[50vh] w-full overflow-hidden mb-16">
        <img src={data.img} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center text-center px-6">
          <div>
             <span className="text-accent font-bold tracking-widest uppercase text-sm block mb-2">{data.title}</span>
             <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{data.subtitle}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation & Intro */}
        <div className="mb-16">
          <Link to="/sectors" className="text-slate-500 hover:text-slate-900 flex items-center gap-2 mb-6">
             <ArrowLeft size={18} /> Back to All Sectors
          </Link>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Introduction</h2>
            <p className="text-slate-600 text-lg leading-relaxed">{data.intro}</p>
          </div>
        </div>

        {/* Design Approach */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Design Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.approach.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent shadow-sm mb-4">
                  <CheckCircle size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Related Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.relatedProjects.map((project, index) => (
              <div key={index} className="group relative h-64 rounded-xl overflow-hidden cursor-pointer">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm opacity-80">{project.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-slate-900 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your space?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Get in touch with our {data.title} specialists today for a custom consultation.
          </p>
          <Link to="/contact" className="inline-block bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all">
            Inquire About {data.title}
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SectorDetail;