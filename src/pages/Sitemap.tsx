import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Globe, Server, Cloud, Shield, Info, Mail, HelpCircle, FileText, Layout, Briefcase } from 'lucide-react';
import OptimizedImage from '@/src/components/OptimizedImage';

import SEO from '@/src/components/SEO';

const Sitemap = () => {
  const sitemapData = [
    {
      title: "Main Pages",
      icon: Layout,
      links: [
        { name: "Home", path: "/" },
        { name: "Our Businesses", path: "/our-businesses" },
        { name: "Pricing", path: "/pricing" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
        { name: "FAQ", path: "/faq" },
        { name: "Blog", path: "/blog" },
      ]
    },
    {
      title: "Web Hosting",
      icon: Server,
      links: [
        { name: "cPanel Hosting", path: "/cpanel-hosting" },
        { name: "Shared Hosting", path: "/shared-hosting" },
        { name: "WordPress Hosting", path: "/wordpress-hosting" },
        { name: "Django Hosting", path: "/django-hosting" },
        { name: "Cloud Hosting", path: "/cloud-hosting" },
        { name: "Dedicated Servers", path: "/dedicated-servers" },
      ]
    },
    {
      title: "VPS & Infrastructure",
      icon: Cloud,
      links: [
        { name: "Cloud VPS", path: "/cloud-vps" },
        { name: "cPanel VPS", path: "/cpanel-vps" },
        { name: "Windows VPS", path: "/windows-vps" },
        { name: "Storage VPS", path: "/storage-vps" },
        { name: "Standard VPS", path: "/vps-hosting" },
        { name: "Domain Registration", path: "/domains" },
      ]
    },
    {
      title: "Enterprise Solutions",
      icon: Briefcase,
      links: [
        { name: "Odoo ERP", path: "/odoo-erp" },
        { name: "POS Software", path: "/pos-software" },
        { name: "Hotel Management", path: "/hotel-management" },
        { name: "Study Abroad CRM", path: "/study-abroad-crm" },
        { name: "Vmail Business Email", path: "/vmail-email" },
      ]
    },
    {
      title: "Legal Information",
      icon: Shield,
      links: [
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Terms of Use", path: "/terms-of-use" },
        { name: "Privacy Policy", path: "/privacy-policy" },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Sitemap | Navigate Venihost"
        description="A complete map of the Venihost website. Easily find our hosting services, domain registration, and legal documents."
        keywords="sitemap, site map, venihost navigation"
      />
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage 
            src="/data-center-programmer-uses-node-tree-software-identify-equipment-issues.jpg" 
            alt="Sitemap Hero" 
            className="object-cover" 
            priority={true}
          />
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Sitemap</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Easily navigate through all the pages and services offered by Venihost.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sitemapData.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <section.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{section.title}</h3>
                </div>
                <ul className="space-y-4">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link 
                        to={link.path} 
                        className="flex items-center gap-2 text-slate-600 hover:text-secondary transition-colors group"
                      >
                        <ChevronRight size={16} className="text-slate-300 group-hover:text-secondary transition-colors" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Footer-like Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Can't find what you're looking for?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all">
              Contact Support
            </Link>
            <Link to="/faq" className="px-8 py-4 bg-slate-100 text-primary rounded-full font-bold hover:bg-slate-200 transition-all">
              Visit Help Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
