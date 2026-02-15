import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2, Clock } from 'lucide-react';
import { libraryData } from './Library'; // Importing data

const ArticleDetail = () => {
  const { id } = useParams();
  const article = libraryData.find(a => a.id === parseInt(id));

  if (!article) return <div className="min-h-screen flex items-center justify-center">Article Not Found</div>;

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      
      {/* Hero Image */}
      <div className="w-full h-[50vh] relative overflow-hidden">
        <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/50"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-4xl mx-auto">
          <Link to="/library" className="text-white/80 hover:text-white flex items-center gap-2 mb-6 transition-colors w-fit">
             <ArrowLeft size={20} /> Back to Library
          </Link>
          <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm font-medium">
             <div className="flex items-center gap-2"><User size={16}/> {article.author}</div>
             <div className="flex items-center gap-2"><Calendar size={16}/> {article.date}</div>
             <div className="flex items-center gap-2"><Clock size={16}/> 5 min read</div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        
        {/* Share Bar */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-8 mb-8">
           <p className="text-xl text-slate-600 font-medium italic">"{article.excerpt}"</p>
           <button className="text-slate-400 hover:text-accent transition-colors">
             <Share2 size={20} />
           </button>
        </div>

        {/* Dummy Rich Text Content */}
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <h3>Why This Matters Now</h3>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
          
          <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-accent my-8">
             <h4 className="font-bold text-slate-900 m-0 mb-2">Pro Tip:</h4>
             <p className="m-0 text-slate-600">Always test cleaning solutions on a small, hidden area of the carpet before applying them to a stain.</p>
          </div>

          <h3>The Future Outlook</h3>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-slate-100">
           <div className="flex gap-2">
             <span className="text-slate-400 text-sm font-bold">Tags:</span>
             <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded text-xs">Flooring</span>
             <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded text-xs">{article.category}</span>
             <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded text-xs">2026</span>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ArticleDetail;