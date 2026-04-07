import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Zap, Globe, Cpu, Server, Cloud, Terminal } from 'lucide-react';
import PricingCard from '@/src/components/PricingCard';
import OptimizedImage from '@/src/components/OptimizedImage';

import SEO from '@/src/components/SEO';

const VPSHosting = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "VPS Hosting",
    "description": "High-performance VPS hosting with full root access, SSD storage, and scalable resources. Perfect for developers and growing businesses.",
    "brand": {
      "@type": "Brand",
      "name": "Venihost"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "NGN",
      "lowPrice": "15000",
      "highPrice": "65000",
      "offerCount": "3"
    }
  };

  const plans = [
    {
      name: "VPS Starter",
      price: "₦15,000",
      period: "mo",
      description: "Entry-level VPS power",
      features: ["2 vCPU Cores", "4GB RAM", "80GB SSD Storage", "2TB Bandwidth", "Full Root Access", "Dedicated IP"],
      ctaLink: "https://app.venihost.com.ng/cart.php?pid=4"
    },
    {
      name: "VPS Professional",
      price: "₦35,000",
      period: "mo",
      description: "High performance VPS",
      features: ["4 vCPU Cores", "8GB RAM", "160GB SSD Storage", "4TB Bandwidth", "Full Root Access", "Dedicated IP"],
      isPopular: true,
      ctaLink: "https://app.venihost.com.ng/cart.php?pid=5"
    },
    {
      name: "VPS Business",
      price: "₦65,000",
      period: "mo",
      description: "Enterprise VPS power",
      features: ["8 vCPU Cores", "16GB RAM", "320GB SSD Storage", "8TB Bandwidth", "Full Root Access", "Dedicated IP"],
      ctaLink: "https://app.venihost.com.ng/cart.php?pid=6"
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="High-Performance VPS Hosting | Full Root Access"
        description="Scalable VPS hosting in Nigeria. Get full root access, NVMe SSD storage, and dedicated resources for your applications. Plans starting from ₦15,000/mo."
        keywords="vps hosting nigeria, linux vps, windows vps, root access hosting, scalable vps"
        structuredData={structuredData}
      />
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage 
            src="/african-american-engineer-inspecting-interlinked-computers-creating-server-network-high-tech-facility-using-parallel-computing-perform-complex-calculations-process-large-amounts-data.jpg" 
            alt="VPS Hosting Hero" 
            className="object-cover" 
            priority={true}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        {/* Added Hero PNG Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute right-0 top-0 w-full h-full pointer-events-none hidden lg:block"
        >
          <OptimizedImage 
            src="/2041339475967086592.png" 
            alt="VPS Illustration" 
            className="object-contain"
          />
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-white font-bold text-xs uppercase tracking-widest mb-6">
                High Performance
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">VPS Hosting</h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                Take full control of your server with our high-performance VPS hosting. Scalable resources, full root access, and SSD storage for your demanding applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#plans" className="px-8 py-4 bg-secondary text-white rounded-full font-bold shadow-xl shadow-secondary/20 hover:bg-secondary/90 transition-all">
                  View VPS Plans
                </a>
                <a href="/contact" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all">
                  Talk to Expert
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-slate-500 font-mono">root@venihost:~#</span>
                </div>
                <div className="space-y-3 font-mono text-sm text-slate-300">
                  <p><span className="text-secondary">$</span> apt-get update</p>
                  <p className="text-slate-500">Hit:1 http://archive.ubuntu.com/ubuntu focal InRelease</p>
                  <p><span className="text-secondary">$</span> systemctl status nginx</p>
                  <p className="text-green-400">● nginx.service - A high performance web server</p>
                  <p className="ml-4">Active: active (running) since Wed 2026-03-18</p>
                  <p><span className="text-secondary">$</span> _</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="plans" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Scalable VPS Plans</h2>
            <p className="text-slate-600">Choose the perfect amount of power for your project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-6">Why Choose Our VPS?</h2>
            <p className="text-lg text-slate-600">Experience the perfect balance of performance, control, and affordability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Full Root Access", desc: "Complete control over your server environment. Install any software or OS you need.", icon: Terminal },
              { title: "Instant Provisioning", desc: "Your VPS will be up and running in minutes after your payment is confirmed.", icon: Zap },
              { title: "SSD Storage", desc: "All our VPS plans come with high-speed SSD storage for lightning-fast performance.", icon: Server },
              { title: "Scalable Resources", desc: "Easily upgrade your RAM, CPU, or storage as your website traffic grows.", icon: Cpu },
              { title: "Dedicated IP", desc: "Each VPS comes with its own dedicated IPv4 address for maximum reliability.", icon: Globe },
              { title: "24/7 Monitoring", desc: "We monitor our network 24/7 to ensure your server is always online and secure.", icon: Shield }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 group hover:bg-primary transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                  <OptimizedImage src="/CyberPanel-409965283.webp" alt={item.title} />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-white group-hover:text-secondary transition-all">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-white transition-all">{item.title}</h3>
                  <p className="text-slate-600 group-hover:text-slate-300 transition-all">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VPSHosting;
