import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Exhibitions = () => {
  const events = [
    {
      id: 1,
      name: "Domotex 2026",
      type: "Global Flooring Trade Show",
      date: "15 - 18 Jan, 2026",
      location: "Hannover, Germany",
      // High-quality event image
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 2,
      name: "Heimtextil 2026",
      type: "Intl. Textile Fair",
      date: "12 - 15 Jan, 2026",
      location: "Frankfurt, Germany",
      // High-quality event image
      img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 3,
      name: "Index Dubai 2026",
      type: "Interior Design Exhibition",
      date: "20 - 22 May, 2026",
      location: "Dubai World Trade Centre",
      // High-quality event image
      img: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1000"
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
           <motion.span
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-accent font-bold tracking-widest uppercase text-sm"
           >
             Events Calendar
           </motion.span>
           <motion.h2
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-5xl font-bold text-slate-900 mt-2"
           >
             Upcoming Exhibitions
           </motion.h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image with Zoom Effect */}
              <img
                src={event.img}
                alt={event.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                 
                 {/* Date Badge (Glassmorphism) */}
                 <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2">
                    <Calendar size={16} className="text-accent" /> {event.date}
                 </div>

                 <span className="text-accent font-bold text-xs uppercase tracking-wider mb-2 block">
                    {event.type}
                 </span>
                 
                 <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                    {event.name}
                 </h3>

                 <div className="flex items-center gap-2 text-slate-300 text-sm mb-6">
                   <MapPin size={16} className="text-accent shrink-0" />
                   {event.location}
                 </div>

                 {/* Hover Action Link */}
                 <div className="w-full h-12 border-t border-white/20 flex items-center justify-between pt-4 text-white group-hover:text-accent transition-colors">
                    <span className="font-bold text-sm">Event Details</span>
                    <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;