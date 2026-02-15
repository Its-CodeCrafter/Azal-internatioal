import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Heart, ArrowLeft, Check, Truck, Shield } from 'lucide-react';
import { productsData } from './Shop'; // Importing data from Shop.jsx

const ProductDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('specs');
  
  // Find Product
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) return <div className="min-h-screen flex items-center justify-center">Product Not Found</div>;

  // Find Related Products (Same category, excluding current)
  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <Link to="/shop" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8">
          <ArrowLeft size={18} /> Back to Shop
        </Link>

        {/* --- Main Product Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left: Image with Zoom Effect */}
          <div className="space-y-4">
            <div className="group relative h-[500px] rounded-2xl overflow-hidden bg-slate-100 cursor-zoom-in border border-slate-100">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-150 origin-center" 
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1,2,3,4].map((i) => (
                <div key={i} className="h-24 rounded-lg bg-slate-100 overflow-hidden cursor-pointer opacity-70 hover:opacity-100 border border-transparent hover:border-slate-900 transition-all">
                  <img src={product.img} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info & Actions */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold">
                <Star size={14} fill="currentColor" /> {product.rating} ({product.reviews} reviews)
              </div>
            </div>

            <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-accent mb-6">${product.price}</p>

            <p className="text-slate-600 leading-relaxed mb-8">
              Experience premium quality with our {product.name}. Designed for {product.category} spaces, 
              it offers superior durability and aesthetic appeal. Handcrafted perfection delivered to your doorstep.
            </p>

            {/* Actions */}
            <div className="flex gap-4 mb-10">
              <button className="flex-1 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2">
                <ShoppingBag size={20} /> Add to Cart
              </button>
              <button className="px-4 py-4 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-500 hover:text-red-500 transition-colors">
                <Heart size={20} />
              </button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Truck size={18} className="text-accent"/> Free Shipping Worldwide</div>
              <div className="flex items-center gap-2"><Shield size={18} className="text-accent"/> 5-Year Warranty</div>
            </div>
          </div>
        </div>

        {/* --- Specs & Reviews Tabs --- */}
        <div className="mb-20">
          <div className="flex border-b border-slate-200 mb-8">
            <button 
              onClick={() => setActiveTab('specs')}
              className={`pb-4 px-6 font-bold text-lg transition-colors relative ${activeTab === 'specs' ? 'text-slate-900' : 'text-slate-400'}`}
            >
              Specifications
              {activeTab === 'specs' && <div className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-t-full"></div>}
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 px-6 font-bold text-lg transition-colors relative ${activeTab === 'reviews' ? 'text-slate-900' : 'text-slate-400'}`}
            >
              Reviews ({product.reviews})
              {activeTab === 'reviews' && <div className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-t-full"></div>}
            </button>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl">
            {activeTab === 'specs' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold mb-4">Material Details</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Material</span>
                      <span className="font-medium">{product.specs.material}</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Origin</span>
                      <span className="font-medium">{product.specs.origin}</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Weight</span>
                      <span className="font-medium">{product.specs.weight}</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-500"><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/></div>
                      <span className="font-bold text-slate-900">Highly Recommended</span>
                    </div>
                    <p className="text-slate-600 text-sm">"Absolutely stunning quality. The texture is exactly what I was looking for. Fast delivery too!"</p>
                    <p className="text-slate-400 text-xs mt-4">- Verified Buyer</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* --- Related Products --- */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link to={`/products/${rel.id}`} key={rel.id} className="group block">
                  <div className="h-64 rounded-xl overflow-hidden bg-slate-100 mb-4">
                    <img src={rel.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-accent transition-colors">{rel.name}</h3>
                  <p className="text-slate-500 text-sm">${rel.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;