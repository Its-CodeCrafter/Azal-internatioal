import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Filter, ArrowUpRight } from 'lucide-react';

// --- Mock Data (Ideally moved to a separate file) ---
export const projectsData = [
  {
    id: 1,
    title: "Grand Hyatt Lobby Renovation",
    sector: "Hospitality",
    year: "2025",
    location: "Dubai, UAE",
    client: "Hyatt Hotels Corp",
    carpet: "Custom Axminster Wool Blend",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    description: "A complete overhaul of the main lobby flooring, featuring bespoke patterns inspired by desert dunes."
  },
  {
    id: 2,
    title: "TechSpace HQ Offices",
    sector: "Commercial",
    year: "2024",
    location: "Berlin, Germany",
    client: "TechSpace Global",
    carpet: "Modular Nylon Tiles (Grey Series)",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    description: "High-traffic acoustic flooring solutions for an open-plan office environment designed for collaboration."
  },
  {
    id: 3,
    title: "Royal Opera House VIP Lounge",
    sector: "Exhibition",
    year: "2023",
    location: "London, UK",
    client: "Royal Arts Council",
    carpet: "Hand-Tufted Silk & Wool",
   img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    description: "Luxurious, sound-absorbing carpeting for the exclusive VIP areas, featuring gold-thread accents."
  },
  {
    id: 4,
    title: "Skyline Penthouse",
    sector: "Residential",
    year: "2025",
    location: "New York, USA",
    client: "Private Client",
    carpet: "Plush Deep-Pile Saxonia",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
    description: "Wall-to-wall luxury carpeting for a 50th-floor penthouse overlooking Central Park."
  },
  {
    id: 5,
    title: "Dubai Mall Fashion Avenue",
    sector: "Retail",
    year: "2024",
    location: "Dubai, UAE",
    client: "Emaar Properties",
    carpet: "Heavy Duty Woven Vinyl",
    img: "https://images.unsplash.com/photo-1567449303078-57a66152ec72?q=80&w=800&auto=format&fit=crop",
    description: "Durable and stylish flooring solutions for high-footfall luxury retail corridors."
  }
];

const Projects = () => {
  const [filters, setFilters] = useState({
    sector: "All",
    year: "All",
    location: "All"
  });

  // Extract unique options for dropdowns
  const uniqueSectors = ["All", ...new Set(projectsData.map(p => p.sector))];
  const uniqueYears = ["All", ...new Set(projectsData.map(p => p.year))];
  const uniqueLocations = ["All", ...new Set(projectsData.map(p => p.location))];

  // Filter Logic
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchSector = filters.sector === "All" || project.sector === filters.sector;
      const matchYear = filters.year === "All" || project.year === filters.year;
      const matchLocation = filters.location === "All" || project.location === filters.location;
      return matchSector && matchYear && matchLocation;
    });
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <span className="text-accent font-bold tracking-widest uppercase text-sm">Portfolio</span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">Our Projects</h1>
        
        {/* --- Filter Bar --- */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Filter size={14} /> Sector
            </label>
            <select 
              className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
              value={filters.sector}
              onChange={(e) => handleFilterChange('sector', e.target.value)}
            >
              {uniqueSectors.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Calendar size={14} /> Year
            </label>
            <select 
              className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
              value={filters.year}
              onChange={(e) => handleFilterChange('year', e.target.value)}
            >
              {uniqueYears.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <MapPin size={14} /> Location
            </label>
            <select 
              className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            >
              {uniqueLocations.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          
          <div className="text-right pb-3 text-sm text-slate-400 font-medium">
             Showing {filteredProjects.length} Projects
          </div>
        </div>
      </div>

      {/* --- Projects Grid --- */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Link 
                     to={`/projects/${project.id}`} 
                     className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-accent hover:text-white transition-colors"
                   >
                     View Case Study <ArrowUpRight size={18} />
                   </Link>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.sector}
                  </span>
                  <span className="text-slate-400 text-sm font-medium">{project.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <MapPin size={16} className="text-accent" /> {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {filteredProjects.length === 0 && (
         <div className="text-center py-20 text-slate-400">
           No projects found matching your criteria.
         </div>
      )}

    </div>
  );
};

export default Projects;