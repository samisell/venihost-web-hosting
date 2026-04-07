import React from 'react';
import { motion } from 'motion/react';
import { Search, Globe, Shield, Zap, Check, ArrowRight } from 'lucide-react';
import OptimizedImage from '@/src/components/OptimizedImage';

import SEO from '@/src/components/SEO';

const Domains = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Domain Registration",
    "description": "Find and register your perfect domain name. Hundreds of extensions available including .com, .ng, .com.ng, and more.",
    "brand": {
      "@type": "Brand",
      "name": "Venihost"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "NGN",
      "lowPrice": "1500",
      "highPrice": "14500",
      "offerCount": "8"
    }
  };

  const tlds = [
    { name: ".com", price: "₦12,000", oldPrice: "₦15,000", popular: true },
    { name: ".net", price: "₦14,500", oldPrice: "₦17,000" },
    { name: ".org", price: "₦13,000", oldPrice: "₦16,000" },
    { name: ".ng", price: "₦5,000", oldPrice: "₦7,500" },
    { name: ".com.ng", price: "₦1,500", oldPrice: "₦2,500" },
    { name: ".biz", price: "₦11,000", oldPrice: "₦14,000" },
    { name: ".info", price: "₦10,000", oldPrice: "₦13,000" },
    { name: ".me", price: "₦9,000", oldPrice: "₦12,000" }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Find Your Perfect Domain Name | Domain Registration"
        description="Search and register domain names in Nigeria. Choose from .com, .ng, .com.ng, .net, .org and more. Secure your online identity today with Venihost."
        keywords="domain registration nigeria, buy domain name, .ng domain, .com.ng domain, domain search"
        structuredData={structuredData}
      />
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <OptimizedImage 
            src="/servers-delivering-web-content.jpg" 
            alt="Domains Hero" 
            className="object-cover" 
            priority={true}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')]" />
        
        {/* Added Hero PNG Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0"
        >
          <OptimizedImage 
            src="/data-center-engineer-leverages-artificial-intelligence-visualization-tools.jpg" 
            alt="Globe Illustration" 
            className="object-contain"
          />
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">Find Your Perfect Domain</h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Your domain name is your identity on the web. Search from hundreds of extensions and secure your brand today.
          </p>
          
          <form 
            action="https://app.venihost.com.ng/cart.php?a=add&domain=register" 
            method="post" 
            target="_blank"
            className="max-w-4xl mx-auto bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2"
          >
            <div className="flex-grow flex items-center px-6">
              <Search className="text-slate-400 mr-3" size={24} />
              <input 
                type="text" 
                name="query"
                placeholder="Enter your domain name here..." 
                className="w-full py-4 text-lg text-primary focus:outline-none"
                required
              />
            </div>
            <button 
              type="submit"
              className="bg-secondary text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all"
            >
              Search Domain
            </button>
          </form>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {tlds.slice(0, 5).map((tld, i) => (
              <div key={i} className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl backdrop-blur-sm">
                <span className="font-bold text-secondary mr-2">{tld.name}</span>
                <span className="text-sm font-medium">Only {tld.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TLD Pricing Table */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Popular Extensions</h2>
            <p className="text-slate-600">Check out our competitive pricing for popular domain extensions.</p>
          </div>
          
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-4 bg-slate-50 p-6 font-bold text-primary border-b border-slate-100">
              <div>Extension</div>
              <div className="text-center">Registration</div>
              <div className="text-center">Renewal</div>
              <div className="text-right">Action</div>
            </div>
            <div className="divide-y divide-slate-50">
              {tlds.map((tld, i) => (
                <div key={i} className="grid grid-cols-4 p-6 items-center hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">{tld.name}</span>
                    {tld.popular && <span className="text-[10px] font-bold uppercase bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">Popular</span>}
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-bold text-primary">{tld.price}</span>
                    <div className="text-xs text-slate-400 line-through">{tld.oldPrice}</div>
                  </div>
                  <div className="text-center font-medium text-slate-600">{tld.price}</div>
                  <div className="text-right">
                    <button className="text-secondary font-bold flex items-center gap-1 ml-auto hover:gap-2 transition-all">
                      Register <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Domain Privacy", desc: "Keep your personal information private and away from spammers with our WHOIS privacy protection.", icon: Shield },
              { title: "Easy Management", desc: "Manage all your domains from our simple and intuitive control panel.", icon: Globe },
              { title: "Auto-Renewal", desc: "Never lose your domain again. Set up auto-renewal and we'll handle the rest.", icon: Zap }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Domains;
