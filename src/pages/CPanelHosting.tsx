import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Zap, Globe, Cpu, Server, Cloud } from 'lucide-react';
import PricingCard from '@/src/components/PricingCard';
import OptimizedImage from '@/src/components/OptimizedImage';
import { cn } from '@/src/lib/utils';
import SEO from '@/src/components/SEO';

const CPanelHosting = () => {
  const [billingCycle, setBillingCycle] = useState<'1yr' | '2yr' | '3yr'>('3yr');

  const pricingData = {
    Starter: { '1yr': '₦1,400', '2yr': '₦1,300', '3yr': '₦1,200' },
    Professional: { '1yr': '₦6,400', '2yr': '₦6,000', '3yr': '₦5,800' },
    Business: { '1yr': '₦9,350', '2yr': '₦9,350', '3yr': '₦9,200' }
  };

  const plans = [
    {
      name: "cPanel Economy",
      price: pricingData.Starter[billingCycle],
      period: "mo",
      description: "Easy-to-use cPanel",
      features: ["10 Websites", "30GB SSD Storage", "Unlimited Bandwidth", "Free SSL Certificate", "1-Click WordPress", "99.9% Uptime Guarantee"],
      ctaLink: "https://app.venihost.com.ng/cart.php?a=add&pid=66"
    },
    {
      name: "cPanel Deluxe",
      price: pricingData.Professional[billingCycle],
      period: "mo",
      description: "Our most popular choice",
      features: ["30 Websites", "50GB SSD Storage", "Unlimited Bandwidth", "Free .com.ng (1 Year)", "Daily Backups", "Imunify360 Security"],
      isPopular: true,
      ctaLink: "https://app.venihost.com.ng/cart.php?a=add&pid=70"
    },
    {
      name: "cPanel Ultimate",
      price: pricingData.Business[billingCycle],
      period: "mo",
      description: "Maximum server power",
      features: ["Unlimited Websites", "Unlimited SSD Storage", "Unlimited Bandwidth", "Free .com.ng (1 Year)", "Premium Support", "Unlimited Emails & DBs"],
      ctaLink: "https://app.venihost.com.ng/cart.php?a=add&pid=62"
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="cPanel Web Hosting | The Industry Standard"
        description="Premium cPanel hosting in Nigeria. Manage your website easily with the world's most popular control panel. Includes free SSL and daily backups."
        keywords="cpanel hosting nigeria, cheap cpanel hosting, managed web hosting, cpanel africa"
      />
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage 
            src="/cPanel-logo.png" 
            alt="cPanel Hosting Hero" 
            className="object-contain p-20 scale-150 rotate-12" 
            priority={true}
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                Premium <span className="text-secondary">cPanel</span> Hosting
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Efficiently manage your website with the world's most trusted and intuitive control panel. Reliable, fast, and feature-rich.
              </p>
              <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> cPanel Powered</div>
                <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Daily Backups</div>
                <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Softaculous</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl font-extrabold mb-8 text-primary">cPanel Hosting Plans</h2>
            <div className="inline-flex items-center p-1 bg-slate-100 rounded-2xl shadow-inner mb-12">
              {(['1yr', '2yr', '3yr'] as const).map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={cn(
                    "px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
                    billingCycle === cycle 
                      ? "bg-primary text-white shadow-md" 
                      : "text-slate-500 hover:text-primary"
                  )}
                >
                  {cycle === '1yr' ? '1 Year' : cycle === '2yr' ? '2 Years' : '3 Years'}
                </button>
              ))}
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
                  <th className="p-8 font-bold text-center border-l border-white/20">Economy</th>
                  <th className="p-8 font-bold text-center border-l border-white/20">Deluxe</th>
                  <th className="p-8 font-bold text-center border-l border-white/20">Ultimate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { f: "Websites Hosted", a: "10 Websites", b: "30 Websites", c: "Unlimited" },
                  { f: "NVMe SSD Storage", a: "30 GB", b: "50 GB", c: "Unlimited" },
                  { f: "Monthly Bandwidth", a: "Unlimited", b: "Unlimited", c: "Unlimited" },
                  { f: "Free Domain Registration", a: "-", b: "Yes (.com.ng, 1st Year)", c: "Yes (.com.ng, 1st Year)" },
                  { f: "MySQL Databases", a: "Unlimited", b: "Unlimited", c: "Unlimited" },
                  { f: "Professional Email Accounts", a: "Unlimited", b: "Unlimited", c: "Unlimited" },
                  { f: "FTP Accounts", a: "Unlimited", b: "Unlimited", c: "Unlimited" },
                  { f: "Free SSL (AutoSSL)", a: "Yes", b: "Yes", c: "Yes" },
                  { f: "Node.js Deployment App", a: "Yes", b: "Yes", c: "Yes (Premium)" },
                  { f: "Python/Ruby Selectors", a: "Yes", b: "Yes", c: "Yes" },
                  { f: "Git Version Control", a: "Yes", b: "Yes", c: "Yes" },
                  { f: "Security/Malware Scanner", a: "Standard", b: "Imunify360", c: "Imunify360 Pro" },
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

      {/* Control Panel Preview */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold text-primary mb-8 leading-tight">Simplified Management with cPanel</h2>
              <div className="space-y-6">
                {[
                  { title: "Easy Email Setup", desc: "Create unlimited email accounts and manage global forwarders effortlessly." },
                  { title: "File Management", desc: "Built-in web-based file manager for lightning-fast file manipulation." },
                  { title: "Database Control", desc: "Comprehensive MySQL and PostgreSQL database wizards and phpMyAdmin access." },
                  { title: "Software Installers", desc: "Install 400+ scripts including WordPress, Joomla, and Drupal in seconds." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                      <Check size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
                <OptimizedImage 
                    src="/CyberPanel-409965283.webp" 
                    alt="cPanel Dashboard" 
                    className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -inset-10 bg-secondary/10 rounded-full blur-[100px] z-0" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CPanelHosting;
