import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Zap, Globe, Cpu, Server, Cloud } from 'lucide-react';
import PricingCard from '@/src/components/PricingCard';
import OptimizedImage from '@/src/components/OptimizedImage';
import { cn } from '@/src/lib/utils';
import SEO from '@/src/components/SEO';

const WordPressHosting = () => {
  const [billingCycle, setBillingCycle] = useState<'1yr' | '2yr' | '3yr'>('3yr');

  const pricingData = {
    Starter: { '1yr': '₦700', '2yr': '₦600', '3yr': '₦500' },
    Professional: { '1yr': '₦1,700', '2yr': '₦1,600', '3yr': '₦1,500' },
    Business: { '1yr': '₦3,200', '2yr': '₦3,100', '3yr': '₦3,000' }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Managed WordPress Hosting",
    "description": "Ultra-fast WordPress hosting with LiteSpeed Cache, NVMe storage, and expert WordPress support.",
    "brand": { "@type": "Brand", "name": "Venihost" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "NGN",
      "lowPrice": "500",
      "highPrice": "3200",
      "offerCount": "3"
    }
  };

  const plans = [
    {
      name: "WordPress Starter",
      price: pricingData.Starter[billingCycle],
      period: "mo",
      description: "Optimized for blogs",
      features: ["1 Website", "10GB NVMe Storage", "Unlimited Bandwidth", "Free SSL (AutoSSL)", "WordPress Pre-installed", "LiteSpeed Cache"],
      ctaLink: "https://app.venihost.com.ng/cart.php?a=add&pid=67"
    },
    {
      name: "WordPress Pro",
      price: pricingData.Professional[billingCycle],
      period: "mo",
      description: "Power for multiple sites",
      features: ["5 Websites", "15GB NVMe Storage", "Unlimited Bandwidth", "Daily Cloud Backups", "WordPress Staging", "Object Cache (Redis)"],
      isPopular: true,
      ctaLink: "https://app.venihost.com.ng/cart.php?a=add&pid=68"
    },
    {
      name: "WordPress Enterprise",
      price: pricingData.Business[billingCycle],
      period: "mo",
      description: "Ultimate WP Scale",
      features: ["10 Websites", "30GB NVMe Storage", "Unlimited Bandwidth", "Free .com.ng (1 Year)", "VIP WP Support", "Premium WP Plugins"],
      ctaLink: "https://app.venihost.com.ng/cart.php?a=add&pid=69"
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Managed WordPress Hosting | Ultra-Fast WP Performance"
        description="Premium Managed WordPress hosting in Nigeria. Optimized for speed with LiteSpeed Cache, NVMe storage, and expert WordPress support."
        keywords="managed wordpress hosting nigeria, fast wordpress hosting, wp hosting litespeed, affordable wordpress hosting"
        structuredData={structuredData}
      />
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage 
            src="/CyberPanel-409965283.webp" 
            alt="WordPress Hosting Hero" 
            className="object-cover" 
            priority={true}
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                Managed <span className="text-secondary">WordPress</span> Hosting
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Take your WordPress site to the next level with our high-performance infrastructure. Built for speed, security, and simplicity.
              </p>
              <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> LiteSpeed Powered</div>
                <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> WP-CLI Included</div>
                <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> NVMe Storage</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-primary mb-4">WordPress Plans</h2>
            <div className="inline-flex items-center p-1 bg-slate-200 rounded-2xl shadow-inner mt-4">
              {(['1yr', '2yr', '3yr'] as const).map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={cn(
                    "px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
                    billingCycle === cycle 
                      ? "bg-white text-primary shadow-md" 
                      : "text-slate-500 hover:text-primary"
                  )}
                >
                  {cycle === '1yr' ? '1 Year' : cycle === '2yr' ? '2 Years' : '3 Years'}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard key={`${index}-${billingCycle}`} {...plan} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Features Table */}
      <section className="py-24 bg-slate-50 overflow-x-auto">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-extrabold text-primary mb-16 text-center">Comprehensive Specifications</h2>
          <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-8 font-bold">Features</th>
                  <th className="p-8 font-bold text-center border-l border-white/20">Starter</th>
                  <th className="p-8 font-bold text-center border-l border-white/20">Pro</th>
                  <th className="p-8 font-bold text-center border-l border-white/20">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { f: "Websites Hosted", a: "1 Website", b: "5 Websites", c: "10 Websites" },
                  { f: "Storage Space", a: "10 GB NVMe", b: "15 GB NVMe", c: "30 GB NVMe" },
                  { f: "Control Panel", a: "CyberPanel", b: "CyberPanel", c: "CyberPanel" },
                  { f: "Web Server", a: "OpenLiteSpeed", b: "OpenLiteSpeed", c: "OpenLiteSpeed" },
                  { f: "Monthly Bandwidth", a: "Unlimited", b: "Unlimited", c: "Unlimited" },
                  { f: "Free Domain Registration", a: "-", b: "-", c: "Yes (.com.ng, 1st Year)" },
                  { f: "WordPress Install", a: "1-Click Install", b: "1-Click Install", c: "1-Click Install" },
                  { f: "Caching Engine", a: "LSCache", b: "LSCache + Redis", c: "LSCache + Redis" },
                  { f: "Professional Email Accounts", a: "Unlimited", b: "Unlimited", c: "Unlimited" },
                  { f: "MySQL Databases", a: "Unlimited", b: "Unlimited", c: "Unlimited" },
                  { f: "Free SSL Certificates", a: "Yes", b: "Yes", c: "Yes" },
                  { f: "Malware Scanner & WAF", a: "Basic", b: "Advanced", c: "Premium" },
                  { f: "Automated Backups", a: "Weekly", b: "Daily", c: "Daily Premium Backups" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-8 font-bold text-primary">{row.f}</td>
                    <td className="p-8 text-center text-slate-600 font-medium border-l border-slate-100">{row.a}</td>
                    <td className="p-8 text-center text-slate-600 font-medium border-l border-slate-100">{row.b}</td>
                    <td className="p-8 text-center text-slate-600 font-bold text-secondary border-l border-slate-100">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Managed Updates", desc: "We handle core WordPress and plugin updates to keep your site secure and stable.", icon: Shield },
              { title: "Expert WP Support", desc: "Our team consists of WordPress experts ready to help with any technical issue.", icon: Zap },
              { title: "LiteSpeed Cache", desc: "Pre-configured enterprise caching for sub-second page load times.", icon: Globe },
              { title: "Staging Environment", desc: "Test changes on a duplicate of your site before pushing to live.", icon: Server },
              { title: "Daily Backups", desc: "Automated nightly backups ensure your data is always safe and recoverable.", icon: Cloud },
              { title: "Developer Tools", desc: "Support for GIT, SSH, and WP-CLI for advanced site management.", icon: Cpu }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-4xl font-extrabold text-primary mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is Managed WordPress hosting?", a: "It is a specialized hosting service where the server is specifically optimized for WordPress performance and security, and management tasks like updates are handled for you." },
              { q: "Can I migrate my existing site?", a: "Yes! We offer free professional migration for all WordPress sites from your old provider." },
              { q: "Do you offer a money-back guarantee?", a: "Absolutely. We offer a 30-day money-back guarantee if you are not satisfied with our service." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-primary mb-2">{item.q}</h4>
                <p className="text-slate-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WordPressHosting;
