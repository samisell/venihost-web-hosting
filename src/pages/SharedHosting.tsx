import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Zap, Globe, Cpu, Server, Cloud } from 'lucide-react';
import PricingCard from '@/src/components/PricingCard';
import OptimizedImage from '@/src/components/OptimizedImage';
import { cn } from '@/src/lib/utils';

import SEO from '@/src/components/SEO';

const SharedHosting = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Shared Web Hosting",
    "description": "Fast, secure, and affordable shared hosting for your website. Includes cPanel, free SSL, and 24/7 support.",
    "brand": {
      "@type": "Brand",
      "name": "Venihost"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "NGN",
      "lowPrice": "1200",
      "highPrice": "7500",
      "offerCount": "3"
    }
  };

  const [billingCycle, setBillingCycle] = useState<'1yr' | '2yr' | '3yr'>('3yr');

  const pricingData = {
    Starter: { '1yr': '₦1,500', '2yr': '₦1,350', '3yr': '₦1,200' },
    Professional: { '1yr': '₦3,500', '2yr': '₦3,150', '3yr': '₦2,800' },
    Business: { '1yr': '₦7,500', '2yr': '₦6,750', '3yr': '₦6,000' }
  };

  const plans = [
    {
      name: "Starter",
      price: pricingData.Starter[billingCycle],
      period: "mo",
      description: "Perfect for beginners",
      features: ["1 Website", "10GB SSD Storage", "Unlimited Bandwidth", "Free SSL Certificate", "1 Email Account", "cPanel Access"],
      ctaLink: "https://app.venihost.com.ng/cart.php?pid=1"
    },
    {
      name: "Professional",
      price: pricingData.Professional[billingCycle],
      period: "mo",
      description: "Best for growing sites",
      features: ["5 Websites", "50GB SSD Storage", "Unlimited Bandwidth", "Free SSL Certificate", "10 Email Accounts", "Free Domain (Yearly)"],
      isPopular: true,
      ctaLink: "https://app.venihost.com.ng/cart.php?pid=2"
    },
    {
      name: "Business",
      price: pricingData.Business[billingCycle],
      period: "mo",
      description: "For high performance",
      features: ["Unlimited Websites", "Unlimited SSD Storage", "Unlimited Bandwidth", "Free SSL Certificate", "Unlimited Emails", "Priority Support"],
      ctaLink: "https://app.venihost.com.ng/cart.php?pid=3"
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Shared Web Hosting | Fast & Secure"
        description="Affordable shared hosting plans in Nigeria. Get started with cPanel, free SSL, 1-click installers, and 24/7 support. Plans starting from ₦1,200/mo."
        keywords="shared hosting nigeria, cpanel hosting, affordable web hosting, wordpress hosting nigeria"
        structuredData={structuredData}
      />
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage 
            src="/CyberPanel-409965283.webp" 
            alt="Shared Hosting Hero" 
            className="object-cover" 
            priority={true}
          />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 translate-x-1/4" />
        
        {/* Added Hero PNG Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 hidden lg:block pointer-events-none"
        >
          <OptimizedImage 
            src="/2041337552329248768.png" 
            alt="Shared Illustration" 
            className="object-contain"
          />
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Shared Web Hosting</h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Fast, secure, and affordable hosting for your website. Get started with our feature-rich shared hosting plans designed for speed and reliability.
            </p>
            <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Free SSL</div>
              <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> 24/7 Support</div>
              <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> 99.9% Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Choose Your Plan</h2>
            <p className="text-slate-600 mb-8">Scale your hosting as your business grows.</p>
            
            {/* Billing Cycle Toggle */}
            <div className="inline-flex items-center p-1 bg-slate-200 rounded-2xl shadow-inner">
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
                  {cycle !== '1yr' && (
                    <span className="ml-2 text-[10px] bg-green-100 text-green-600 px-1.5 py-0.5 rounded-md">
                      SAVE {cycle === '2yr' ? '10%' : '20%'}
                    </span>
                  )}
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

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-primary mb-8">Everything You Need to Succeed</h2>
              <div className="space-y-6">
                {[
                  { title: "cPanel Control Panel", desc: "Manage your website, emails, and databases with the world's leading control panel." },
                  { title: "One-Click Installer", desc: "Install WordPress, Joomla, Drupal, and 400+ other apps with just one click." },
                  { title: "Daily Backups", desc: "Your data is safe with us. We perform daily backups to ensure you never lose your work." },
                  { title: "Free Website Migration", desc: "Moving from another host? Our experts will migrate your site for free." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <Check size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <OptimizedImage 
                  src="/smiling-engineer-using-laptop-data-center-oversee-hardware.jpg" 
                  alt="Shared Hosting Features" 
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="text-secondary" />
                  <span className="font-bold text-primary">Turbo Boost</span>
                </div>
                <p className="text-xs text-slate-500">Our servers are optimized for 20x faster page loads compared to standard hosting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-4xl font-extrabold text-primary mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is shared hosting?", a: "Shared hosting is a type of web hosting where multiple websites reside on one web server connected to the Internet. This is generally the most economical option for hosting." },
              { q: "Can I upgrade my plan later?", a: "Yes, you can upgrade your hosting plan at any time as your website grows. The process is seamless and there is no downtime." },
              { q: "Do you offer a money-back guarantee?", a: "Yes, we offer a 30-day money-back guarantee on all our shared hosting plans if you are not satisfied with our service." }
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

export default SharedHosting;
