import React from 'react';
import { motion } from 'motion/react';
import { Check, Cloud, Zap, Shield, Globe, Cpu, Server, BarChart, Activity } from 'lucide-react';
import PricingCard from '@/src/components/PricingCard';
import OptimizedImage from '@/src/components/OptimizedImage';

import SEO from '@/src/components/SEO';

const CloudHosting = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Cloud Hosting",
    "description": "Enterprise-grade cloud hosting with high availability, instant scaling, and NVMe storage. Distributed cloud infrastructure for mission-critical apps.",
    "brand": {
      "@type": "Brand",
      "name": "Venihost"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "NGN",
      "lowPrice": "25000",
      "highPrice": "95000",
      "offerCount": "3"
    }
  };

  const plans = [
    {
      name: "Cloud Starter",
      price: "₦25,000",
      period: "mo",
      description: "Fast cloud performance",
      features: ["4GB RAM", "2 vCPU Cores", "100GB NVMe Storage", "Unlimited Bandwidth", "Free SSL & Backups", "99.99% Uptime"],
      ctaLink: "https://app.venihost.com.ng/cart.php?pid=7"
    },
    {
      name: "Cloud Professional",
      price: "₦55,000",
      period: "mo",
      description: "Scale with confidence",
      features: ["8GB RAM", "4 vCPU Cores", "200GB NVMe Storage", "Unlimited Bandwidth", "Free SSL & Backups", "Priority Support"],
      isPopular: true,
      ctaLink: "https://app.venihost.com.ng/cart.php?pid=8"
    },
    {
      name: "Cloud Enterprise",
      price: "₦95,000",
      period: "mo",
      description: "Maximum cloud power",
      features: ["16GB RAM", "8 vCPU Cores", "400GB NVMe Storage", "Unlimited Bandwidth", "Free SSL & Backups", "Dedicated Account Manager"],
      ctaLink: "https://app.venihost.com.ng/cart.php?pid=9"
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Enterprise-Grade Cloud Hosting | High Availability"
        description="Experience the power of distributed cloud hosting in Nigeria. High availability, instant scaling, and lightning-fast NVMe storage. Plans starting from ₦25,000/mo."
        keywords="cloud hosting nigeria, managed cloud, high availability hosting, nvme cloud hosting"
        structuredData={structuredData}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-slate-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <OptimizedImage 
            src="/computer-scientist-data-center-using-diagnostic-tools-laptop.jpg" 
            alt="Cloud Hosting Hero" 
            className="object-cover" 
            priority={true}
          />
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
        
        {/* Added Hero PNG Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute left-0 bottom-0 w-full h-full pointer-events-none hidden lg:block"
        >
          <OptimizedImage 
            src="/data-center-engineer-leverages-artificial-intelligence-visualization-tools.jpg" 
            alt="Cloud Hosting Features" 
            className="object-contain"
          />
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary font-bold text-sm mb-6">
                <Cloud size={18} /> High Availability Cloud
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Enterprise-Grade <span className="text-secondary">Cloud</span> Hosting
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Experience the power of distributed cloud infrastructure. High availability, instant scaling, and lightning-fast NVMe storage for your most critical applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#plans" className="px-8 py-4 bg-secondary text-white rounded-full font-bold shadow-xl shadow-secondary/20 hover:bg-secondary/90 transition-all">
                  Explore Cloud Plans
                </a>
              </div>
            </div>
            <div className="flex-1 relative">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Uptime", val: "99.99%", icon: Zap },
                      { label: "Storage", val: "NVMe", icon: Server },
                      { label: "Scaling", val: "Instant", icon: BarChart },
                      { label: "Global", val: "CDN", icon: Globe }
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                        <stat.icon className="mx-auto text-secondary mb-3" size={24} />
                        <div className="text-2xl font-bold">{stat.val}</div>
                        <div className="text-xs text-slate-400 uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/40 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="plans" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Cloud Hosting Plans</h2>
            <p className="text-slate-600">Powerful resources that scale with your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Fully Managed", desc: "We handle the technical details so you can focus on your business.", icon: Cpu },
              { title: "DDoS Protection", desc: "Advanced security layers to keep your cloud environment safe from attacks.", icon: Shield },
              { title: "Global Network", desc: "Our cloud infrastructure is distributed globally for low latency everywhere.", icon: Globe }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center text-secondary mx-auto mb-8 border border-slate-100">
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

export default CloudHosting;
