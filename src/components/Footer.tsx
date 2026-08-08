import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Cloud } from 'lucide-react';
import OptimizedImage from '@/src/components/OptimizedImage';
import { getPortalLoginUrl, getPortalRegisterUrl } from '@/src/lib/whmcs';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-14 h-14 flex items-center justify-center">
                <OptimizedImage 
                  src="/logo.png" 
                  alt="Venihost Logo" 
                  className="w-full h-full object-contain"
                  fallback={<Cloud className="text-secondary" size={32} />}
                />
              </div>
              <span className="text-3xl font-display font-extrabold tracking-tight">
                VENI<span className="text-secondary">HOST</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-lg max-w-sm">
                Empowering businesses with elite web hosting and enterprise software solutions since 2015. Superior speed, ironclad security, and 24/7 expert support.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/share/18PRvzvweS/?mibextid=wwXIfr" },
                { icon: Twitter, href: "https://x.com/venihost" },
                { icon: Instagram, href: "https://www.instagram.com/venihost" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all group">
                  <social.icon size={22} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Hosting</h4>
            <ul className="flex flex-col gap-4 text-slate-400 font-medium">
              <li><Link to="/cpanel-hosting" className="hover:text-secondary transition-colors">cPanel Hosting</Link></li>
              <li><Link to="/wordpress-hosting" className="hover:text-secondary transition-colors">WordPress Hosting</Link></li>
              <li><Link to="/django-hosting" className="hover:text-secondary transition-colors">Django Hosting</Link></li>
              <li><Link to="/cloud-hosting" className="hover:text-secondary transition-colors">Cloud Hosting</Link></li>
              <li><Link to="/domains" className="hover:text-secondary transition-colors">Domain Names</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Infrastructure</h4>
            <ul className="flex flex-col gap-4 text-slate-400 font-medium">
              <li><Link to="/cloud-vps" className="hover:text-secondary transition-colors">Cloud VPS</Link></li>
              <li><Link to="/cpanel-vps" className="hover:text-secondary transition-colors">cPanel Managed VPS</Link></li>
              <li><Link to="/windows-vps" className="hover:text-secondary transition-colors">Windows VPS</Link></li>
              <li><Link to="/storage-vps" className="hover:text-secondary transition-colors">Storage VPS</Link></li>
              <li><Link to="/dedicated-servers" className="hover:text-secondary transition-colors">Dedicated Servers</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Enterprise</h4>
            <ul className="flex flex-col gap-4 text-slate-400 font-medium">
              <li><Link to="/vmail-email" className="hover:text-secondary transition-colors">Vmail Email</Link></li>
              <li><Link to="/study-abroad-crm" className="hover:text-secondary transition-colors">Study Abroad CRM</Link></li>
              <li><Link to="/hotel-management" className="hover:text-secondary transition-colors">Hotel Management</Link></li>
              <li><Link to="/odoo-erp" className="hover:text-secondary transition-colors">Odoo ERP</Link></li>
              <li><Link to="/pos-software" className="hover:text-secondary transition-colors">POS Software</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Company</h4>
            <ul className="flex flex-col gap-4 text-slate-400 font-medium">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/our-businesses" className="hover:text-secondary transition-colors">Our Ecosystem</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-secondary transition-colors">Support FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-secondary transition-colors">Latest News</Link></li>
              <li><a href={getPortalLoginUrl()} className="hover:text-secondary transition-colors">Client Login</a></li>
              <li><a href={getPortalRegisterUrl()} className="hover:text-secondary transition-colors">Create Account</a></li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-[2rem] bg-white/5 border border-white/10 mb-16">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary">
                    <Phone size={20} />
                </div>
                <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Call Us</p>
                    <p className="font-bold text-white tracking-wide">+234 811 685 6186</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary">
                    <Mail size={20} />
                </div>
                <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email Us</p>
                    <p className="font-bold text-white tracking-wide">hello@venihost.com.ng</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-500">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">WhatsApp</p>
                    <p className="font-bold text-white tracking-wide">+234 811 685 6146</p>
                </div>
            </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 text-slate-500 text-sm font-medium">
          <p>© {currentYear} Venihost Web Hosting. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms-of-use" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
