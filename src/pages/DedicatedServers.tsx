import React from 'react';
import { motion } from 'motion/react';
import { Check, Server, Zap, Shield, Globe, Cpu, Database, Settings, Terminal } from 'lucide-react';
import PricingCard from '@/src/components/PricingCard';
import OptimizedImage from '@/src/components/OptimizedImage';

import SEO from '@/src/components/SEO';

const DedicatedServers = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Dedicated Servers",
    "description": "Enterprise-grade bare metal dedicated servers with maximum power and control. Intel Xeon processors, NVMe SSDs, and 24/7 on-site support.",
    "brand": {
      "@type": "Brand",
      "name": "Venihost"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "NGN",
      "lowPrice": "85000",
      "highPrice": "265000",
      "offerCount": "3"
    }
  };

  const plans = [
    {
      name: "DS Starter",
      price: "₦85,000",
      period: "mo",
      description: "Dedicated power for growth",
      features: ["Intel Xeon E-2224", "4 Cores @ 3.4GHz", "16GB DDR4 RAM", "2x 500GB SSD", "10TB Bandwidth", "Full Root Access"],
      ctaLink: "https://app.venihost.com.ng/cart.php?pid=10"
    },
    {
      name: "DS Professional",
      price: "₦145,000",
      period: "mo",
      description: "High performance enterprise",
      features: ["Intel Xeon Silver 4210", "10 Cores @ 2.2GHz", "32GB DDR4 RAM", "2x 1TB SSD", "20TB Bandwidth", "Full Root Access"],
      isPopular: true,
      ctaLink: "https://app.venihost.com.ng/cart.php?pid=11"
    },
    {
      name: "DS Enterprise",
      price: "₦265,000",
      period: "mo",
      description: "Maximum server power",
      features: ["2x Intel Xeon Gold 5218", "32 Cores @ 2.3GHz", "64GB DDR4 RAM", "2x 2TB SSD", "Unlimited Bandwidth", "Full Root Access"],
      ctaLink: "https://app.venihost.com.ng/cart.php?pid=12"
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Bare Metal Dedicated Servers | Maximum Power"
        description="Ultimate performance with bare metal dedicated servers in Nigeria. No shared resources, full root access, and enterprise-grade hardware. Plans starting from ₦85,000/mo."
        keywords="dedicated servers nigeria, bare metal servers, intel xeon servers, enterprise hosting"
        structuredData={structuredData}
      />
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage 
            src="/servers-delivering-web-content.jpg" 
            alt="Dedicated Servers Hero" 
            className="object-cover" 
            priority={true}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        {/* Added Hero PNG Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 2 }}
          className="absolute right-0 bottom-0 w-full h-full pointer-events-none hidden lg:block"
        >
          <OptimizedImage 
            src="/data-center-programmer-uses-node-tree-software-identify-equipment-issues.jpg" 
            alt="Server Rack Illustration" 
            className="object-contain"
          />
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-secondary font-bold text-sm mb-8">
              <Server size={18} /> Bare Metal Dedicated Servers
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
              Ultimate Power & <span className="text-secondary">Control</span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              No noisy neighbors. No shared resources. Just pure, unadulterated performance with our bare metal dedicated servers. Custom built for your enterprise needs.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#plans" className="px-10 py-5 bg-secondary text-white rounded-full font-bold text-lg shadow-2xl shadow-secondary/20 hover:bg-secondary/90 transition-all hover:scale-105">
                Configure Your Server
              </a>
              <a href="/contact" className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Custom Build Request
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="plans" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Dedicated Server Plans</h2>
            <p className="text-slate-600">Enterprise-grade hardware for your most demanding workloads.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Latest CPUs", desc: "Intel Xeon & AMD EPYC processors for peak performance.", icon: Cpu },
                  { title: "DDR4 RAM", desc: "High-speed memory for faster data processing.", icon: Database },
                  { title: "NVMe SSDs", desc: "The fastest storage technology available today.", icon: Zap },
                  { title: "1Gbps Network", desc: "High-speed connectivity for global reach.", icon: Globe },
                  { title: "Hardware RAID", desc: "Data redundancy and improved performance.", icon: Settings },
                  { title: "IPMI Access", desc: "Remote management even when the OS is down.", icon: Terminal }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-secondary shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-extrabold text-primary mb-8">Premium Hardware, Unmatched Performance</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We use only the highest quality enterprise hardware from manufacturers like Dell, HP, and Supermicro. Each server is meticulously tested before deployment to ensure 100% reliability.
              </p>
              <ul className="space-y-4">
                {["Free Setup & Deployment", "24/7 On-site Technical Support", "99.99% Network Uptime SLA", "Custom Firewall Configuration"].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-primary">
                    <div className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center">
                      <Check size={14} />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DedicatedServers;
