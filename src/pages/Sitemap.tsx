import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ChevronRight,
  Globe,
  Server,
  Cloud,
  Shield,
  FileCode,
  Layout,
  Briefcase,
  BookOpen,
  Copy,
  Check,
  ExternalLink,
  Search,
} from 'lucide-react';
import OptimizedImage from '@/src/components/OptimizedImage';
import SEO from '@/src/components/SEO';
import { blogPosts } from '@/src/data/blogPosts';

const Sitemap: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const xmlSitemapUrl = 'https://venihost.com.ng/sitemap.xml';

  const copySitemapUrl = () => {
    navigator.clipboard.writeText(xmlSitemapUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const sitemapData = [
    {
      title: 'Main Pages',
      icon: Layout,
      links: [
        { name: 'Home', path: '/', desc: 'High-speed cloud & web hosting platform' },
        { name: 'Our Businesses', path: '/our-businesses', desc: 'Overview of Venihost products & solutions' },
        { name: 'Pricing', path: '/pricing', desc: 'Transparent hosting & domain pricing' },
        { name: 'About Us', path: '/about', desc: 'Our mission, data centers & infrastructure' },
        { name: 'Contact Us', path: '/contact', desc: 'Get in touch with 24/7 technical support' },
        { name: 'FAQ', path: '/faq', desc: 'Frequently asked hosting questions' },
        { name: 'Blog', path: '/blog', desc: 'Hosting guides, NVMe tutorials & news' },
      ],
    },
    {
      title: 'Web Hosting',
      icon: Server,
      links: [
        { name: 'cPanel Hosting', path: '/cpanel-hosting', desc: 'Industry-standard control panel hosting' },
        { name: 'Shared Hosting', path: '/shared-hosting', desc: 'Affordable high-performance starter hosting' },
        { name: 'WordPress Hosting', path: '/wordpress-hosting', desc: 'Optimized WordPress with LiteSpeed caching' },
        { name: 'Django Hosting', path: '/django-hosting', desc: 'Python & Django dedicated hosting' },
        { name: 'Cloud Hosting', path: '/cloud-hosting', desc: 'Scalable auto-healing cloud servers' },
        { name: 'Dedicated Servers', path: '/dedicated-servers', desc: 'Bare-metal enterprise performance' },
      ],
    },
    {
      title: 'VPS & Infrastructure',
      icon: Cloud,
      links: [
        { name: 'Cloud VPS', path: '/cloud-vps', desc: 'High-IOPS KVM cloud virtual servers' },
        { name: 'cPanel VPS', path: '/cpanel-vps', desc: 'Fully managed cPanel/WHM VPS servers' },
        { name: 'Windows VPS', path: '/windows-vps', desc: 'Windows Server with Remote Desktop (RDP)' },
        { name: 'Storage VPS', path: '/storage-vps', desc: 'Massive capacity backup & media storage' },
        { name: 'Standard VPS', path: '/vps-hosting', desc: 'Flexible developer-grade Linux VPS' },
        { name: 'Domain Registration', path: '/domains', desc: '.ng, .com.ng, .com domain search & registration' },
      ],
    },
    {
      title: 'Enterprise Solutions',
      icon: Briefcase,
      links: [
        { name: 'Odoo ERP', path: '/odoo-erp', desc: 'Fully hosted Odoo ERP management' },
        { name: 'POS Software', path: '/pos-software', desc: 'Cloud point of sale for retail & restaurants' },
        { name: 'Hotel Management', path: '/hotel-management', desc: 'Complete property & room booking system' },
        { name: 'Study Abroad CRM', path: '/study-abroad-crm', desc: 'Student visa & educational agency CRM' },
        { name: 'Vmail Business Email', path: '/vmail-email', desc: 'Custom domain professional mailboxes' },
      ],
    },
    {
      title: 'Blog & Articles',
      icon: BookOpen,
      links: blogPosts.map((post) => ({
        name: post.title,
        path: `/blog/${post.id}`,
        desc: `${post.category} • ${post.readTime}`,
      })),
    },
    {
      title: 'Legal & Policies',
      icon: Shield,
      links: [
        { name: 'Terms of Service', path: '/terms-of-service', desc: 'Service level agreements & billing terms' },
        { name: 'Terms of Use', path: '/terms-of-use', desc: 'Acceptable website and network usage policy' },
        { name: 'Privacy Policy', path: '/privacy-policy', desc: 'Data protection and NDPR / GDPR compliance' },
      ],
    },
  ];

  // Schema.org Structured Data for Google SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Venihost Web Hosting',
    url: 'https://venihost.com.ng',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://venihost.com.ng/domains?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    hasPart: sitemapData.flatMap((section) =>
      section.links.map((link) => ({
        '@type': 'WebPage',
        name: link.name,
        description: link.desc,
        url: `https://venihost.com.ng${link.path}`,
      }))
    ),
  };

  return (
    <div className="pt-20">
      <SEO
        title="XML & HTML Sitemap - Google Search Engine Optimized"
        description="Comprehensive XML and HTML sitemap for Venihost. Browse all web hosting plans, VPS, domains, enterprise apps, blog articles, and access Google Search Engine XML sitemap."
        keywords="venihost sitemap, sitemap.xml, google search console sitemap, web hosting nigeria sitemap, xml sitemap venihost"
        canonical="https://venihost.com.ng/sitemap"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage
            src="/data-center-programmer-uses-node-tree-software-identify-equipment-issues.jpg"
            alt="Sitemap Hero"
            className="object-cover"
            priority={true}
          />
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-xs font-bold uppercase tracking-wider mb-6">
            <Search size={14} />
            Search Engine & Visitor Index
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Venihost Sitemap
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Full directory of Venihost services, infrastructure, enterprise platforms, guides, and XML index for Google Search Engine crawlers.
          </p>
        </div>
      </section>

      {/* Google XML Sitemap Banner for SEO */}
      <section className="bg-gradient-to-b from-primary to-slate-900 text-white py-8 border-t border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/5 border border-white/15 rounded-3xl p-6 md:p-8 backdrop-blur-sm flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary shrink-0">
                <FileCode size={26} />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold text-white">Google Search Engine XML Sitemap</h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                    Active & Valid XML
                  </span>
                </div>
                <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                  For Google Search Console, Bing Webmaster Tools, and search indexing bots. Formatted in accordance with sitemaps.org 0.9 protocol.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-mono bg-black/40 px-3.5 py-2 rounded-xl border border-white/10 text-slate-300 break-all">
                  <Globe size={14} className="text-secondary shrink-0" />
                  <span>{xmlSitemapUrl}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-end">
              <button
                onClick={copySitemapUrl}
                className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold flex items-center gap-2 transition-all border border-white/20 cursor-pointer"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                <span>{copied ? 'Copied URL!' : 'Copy XML Link'}</span>
              </button>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl bg-secondary hover:bg-secondary/90 text-white text-sm font-bold flex items-center gap-2 shadow-lg shadow-secondary/25 transition-all"
              >
                <span>View sitemap.xml</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapData.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white p-7 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                    <div className="w-11 h-11 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                      <section.icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">{section.title}</h3>
                      <p className="text-xs text-slate-400">{section.links.length} URLs indexed</p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {section.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          to={link.path}
                          className="group block p-2 -mx-2 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:text-secondary transition-colors">
                            <ChevronRight
                              size={15}
                              className="text-slate-400 group-hover:text-secondary group-hover:translate-x-0.5 transition-all shrink-0"
                            />
                            <span>{link.name}</span>
                          </div>
                          {link.desc && (
                            <p className="text-xs text-slate-500 pl-6 mt-0.5 line-clamp-1">
                              {link.desc}
                            </p>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400 flex items-center justify-between">
                  <span>Priority: {idx < 2 ? '0.9' : '0.8'}</span>
                  <span>Change: Weekly</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Quick Contact */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            Looking for something specific?
          </h2>
          <p className="text-slate-600 mb-8 text-sm">
            Our technical support team is available 24/7/365 to help you choose the right hosting plan, register domains, or migrate your websites for free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-md"
            >
              Contact Support
            </Link>
            <Link
              to="/faq"
              className="px-8 py-3.5 bg-slate-100 text-primary rounded-2xl font-bold hover:bg-slate-200 transition-all"
            >
              Visit Help Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
