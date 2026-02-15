import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Briefcase, Layers, User } from 'lucide-react';
import { projectsData } from './Projects'; // Importing data from the file we just made

const ProjectDetails = () => {
  const { id } = useParams();
  
  // Find project by ID
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center text-slate-400">Project Not Found</div>;
  }

  // Dummy gallery images (in a real app, these would be specific to the project)
  const gallery = [
    project.img,
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      
      {/* --- Hero Header --- */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <Link to="/projects" className="text-white/70 hover:text-white flex items-center gap-2 mb-6 transition-colors w-fit">
            <ArrowLeft size={20} /> Back to Projects
          </Link>
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2">{project.sector}</span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            {project.title}
          </motion.h1>
          <div className="flex items-center gap-2 text-white/80 text-lg">
            <MapPin size={20} className="text-accent" /> {project.location}
          </div>
        </div>
      </div>

      {/* --- Project Info Grid --- */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Description */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Overview</h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              {project.description}
            </p>
            <p className="text-slate-600 leading-relaxed">
              We worked closely with {project.client} to deliver a flooring solution that not only met the aesthetic requirements of the space but also adhered to strict acoustic and durability standards. The result is a seamless blend of functionality and luxury.
            </p>
          </div>

          {/* Side Details Panel */}
          <div className="bg-slate-50 p-8 rounded-xl space-y-6 h-fit border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2 border-b border-slate-200 pb-2">Project Details</h3>
            
            <div className="flex items-start gap-3">
              <User className="text-accent shrink-0 mt-1" size={20} />
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase">Client</span>
                <span className="text-slate-900 font-medium">{project.client}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Layers className="text-accent shrink-0 mt-1" size={20} />
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase">Carpet Used</span>
                <span className="text-slate-900 font-medium">{project.carpet}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="text-accent shrink-0 mt-1" size={20} />
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase">Year</span>
                <span className="text-slate-900 font-medium">{project.year}</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Image Gallery --- */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl overflow-hidden shadow-md h-72 group"
              >
                <img 
                  src={img} 
                  alt={`Project detail ${index + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;