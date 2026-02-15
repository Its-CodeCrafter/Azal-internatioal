import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe, Building2, User, FileText, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('general'); // 'general' or 'export'

  // Form State
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', country: '', message: '', productInterest: 'Carpets'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! We will contact you shortly.");
    // Add actual submission logic here
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      
      {/* --- Header --- */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="text-accent font-bold tracking-widest uppercase text-sm"></span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">Contact Us</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Whether you have a question about our collections, need a custom quote, or want to discuss an export partnership, our team is ready to help.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        
        {/* --- Left Column: Contact Info --- */}
        <div className="space-y-8">
          
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white mb-4">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
              <p className="text-slate-500 text-sm">+92 300 1234567</p>
              <p className="text-slate-400 text-xs mt-1">Mon-Sat, 9am - 6pm PKT</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white mb-4">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
              <p className="text-slate-500 text-sm">info@azalinternational.com</p>
              <p className="text-slate-500 text-sm">export@azalinternational.com</p>
            </motion.div>
          </div>

          {/* Address Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Headquarters & Factory</h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                Small Industrial Estate, <br />
                Sialkot, 51310, <br />
                Punjab, Pakistan.
              </p>
              <div className="flex gap-2">
                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">Manufacturing Unit</span>
                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">Showroom</span>
              </div>
            </div>
          </motion.div>

          {/* FAQ Teaser */}
          <div className="bg-slate-900 text-white p-8 rounded-2xl">
            <h3 className="font-bold text-xl mb-2">Need a quick answer?</h3>
            <p className="text-slate-400 mb-4">Check our frequently asked questions regarding shipping, customization, and minimum order quantities.</p>
            <button className="text-accent font-bold border-b border-accent pb-1 hover:text-white transition-colors">
              Visit FAQ Page
            </button>
          </div>
        </div>

        {/* --- Right Column: Dual Forms --- */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          
          {/* Tabs */}
          <div className="flex border-b border-slate-100">
            <button 
              onClick={() => setActiveTab('general')}
              className={`flex-1 py-4 font-bold text-sm uppercase tracking-wide transition-colors ${
                activeTab === 'general' ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 hover:bg-slate-50'
              }`}
            >
              General Inquiry
            </button>
            <button 
              onClick={() => setActiveTab('export')}
              className={`flex-1 py-4 font-bold text-sm uppercase tracking-wide transition-colors ${
                activeTab === 'export' ? 'bg-accent text-white' : 'bg-white text-slate-500 hover:bg-slate-50'
              }`}
            >
              Export / Wholesale
            </button>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Common Fields */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Shailesh Kumar" 
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 outline-none bg-slate-50"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 text-slate-400" size={18} />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="skraj@example.com" 
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 outline-none bg-slate-50"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Export Specific Fields */}
              {activeTab === 'export' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-900">Company Name</label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-3.5 text-slate-400" size={18} />
                        <input 
                          type="text" 
                          name="company"
                          placeholder="Business Ltd." 
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 outline-none bg-slate-50"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-900">Country</label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-3.5 text-slate-400" size={18} />
                        <input 
                          type="text" 
                          name="country"
                          placeholder="USA" 
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 outline-none bg-slate-50"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900">Product Interest</label>
                    <select 
                      name="productInterest"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 outline-none bg-slate-50"
                      onChange={handleChange}
                    >
                      <option>Carpets & Rugs</option>
                      <option>Surgical Instruments</option>
                      <option>Both</option>
                    </select>
                  </div>
                </motion.div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900">Message</label>
                <div className="relative">
                  <FileText className="absolute left-4 top-3.5 text-slate-400" size={18} />
                  <textarea 
                    rows="4" 
                    name="message"
                    placeholder="How can we help you?" 
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 outline-none bg-slate-50"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${activeTab === 'export' ? 'bg-accent hover:bg-slate-900' : 'bg-slate-900 hover:bg-accent'}`}>
                <Send size={20} /> Send Message
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* --- Map Section --- */}
      <section className="w-full h-[500px] bg-slate-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.417852936785!2d74.52289457497299!3d32.49221127378453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eebe46a782e3b%3A0xf62a21e70e28156!2sSmall%20Industrial%20Estate%2C%20Sialkot%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1707920000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
        
        {/* Overlay Card on Map */}
        <div className="absolute top-10 left-10 md:left-20 bg-white p-6 rounded-xl shadow-2xl max-w-xs hidden md:block">
          <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
            <CheckCircle size={18} className="text-green-500"/> Open Now
          </h4>
          <p className="text-sm text-slate-500">
            Visitors are welcome by appointment. Please contact our sales team to schedule a factory tour.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Contact;