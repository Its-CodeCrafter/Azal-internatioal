import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, TrendingUp, ShieldCheck, PenTool, ArrowRight, Calendar } from 'lucide-react';

// --- Shared Data (Exported for Detail Page) ---
export const libraryData = [
  {
    id: 1,
    title: "2026 Interior Trends: The Return of Texture",
    category: "Trends",
    date: "Feb 10, 2026",
    author: "Sarah Jenkins",
    excerpt: "Minimalism is evolving. Discover how textured flooring is becoming the centerpiece of modern interior design.",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
    content: "Full article content goes here..."
  },
  {
    id: 2,
    title: "Complete Guide to Wool Carpet Maintenance",
    category: "Carpet Care",
    date: "Jan 28, 2026",
    author: "Maintenance Team",
    excerpt: "Extend the life of your premium wool carpets with these professional cleaning tips and daily care routines.",
    img: "https://images.unsplash.com/photo-1558317374-a354d5f6d40b?auto=format&fit=crop&q=80&w=800",
    content: "Full article content goes here..."
  },
  {
    id: 3,
    title: "Sustainable Manufacturing in 2026",
    category: "Industry Insights",
    date: "Jan 15, 2026",
    author: "AZAL Research",
    excerpt: "How the flooring industry is reducing its carbon footprint through recycled materials and green energy.",
    img: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800",
    content: "Full article content goes here..."
  },
  {
    id: 4,
    title: "Choosing the Right Rug for High-Traffic Areas",
    category: "Blogs",
    date: "Dec 12, 2025",
    author: "Design Team",
    excerpt: "Hallways and living rooms take a beating. Here are the best materials and weaves for durability.",
    img: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80&w=800",
    content: "Full article content goes here..."
  },
  {
    id: 5,
    title: "The Psychology of Color in Office Spaces",
    category: "Industry Insights",
    date: "Nov 30, 2025",
    author: "Dr. Emily Carter",
    excerpt: "How floor color impacts employee productivity, mood, and creativity in corporate environments.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    content: "Full article content goes here..."
  },
  {
    id: 6,
    title: "Stain Removal 101: Quick Fixes",
    category: "Carpet Care",
    date: "Oct 20, 2025",
    author: "Support Team",
    excerpt: "Spilled coffee? Don't panic. Follow these immediate steps to prevent permanent staining.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    content: "Full article content goes here..."
  }
];

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", icon: BookOpen },
    { name: "Blogs", icon: PenTool },
    { name: "Industry Insights", icon: TrendingUp },
    { name: "Carpet Care", icon: ShieldCheck },
    { name: "Trends", icon: TrendingUp },
  ];

  // --- Filtering Logic ---
  const filteredArticles = useMemo(() => {
    return libraryData.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      
      {/* Header & Search */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-accent font-bold tracking-widest uppercase text-sm">Knowledge Hub</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">The Library</h1>
          <p className="text-slate-500 mb-8">
            Expert insights, care guides, and the latest trends from the world of premium flooring.
          </p>

          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search articles, guides, or trends..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-6 mb-12 overflow-x-auto">
        <div className="flex justify-center gap-4 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                selectedCategory === cat.name 
                  ? 'bg-slate-900 text-white shadow-lg' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
              }`}
            >
              <cat.icon size={16} /> {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredArticles.map((article, index) => (
            <motion.div
              layout
              key={article.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wide">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-3">
                  <Calendar size={12} /> {article.date}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>

                <Link 
                  to={`/library/${article.id}`} 
                  className="inline-flex items-center gap-2 text-slate-900 font-bold hover:gap-3 transition-all mt-auto"
                >
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-400 text-lg">No articles found matching "{searchQuery}".</p>
          <button onClick={() => setSearchQuery("")} className="text-accent font-bold mt-2 hover:underline">Clear Search</button>
        </div>
      )}

    </div>
  );
};

export default Library;