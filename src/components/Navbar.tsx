import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Cloud, Server, Cpu, Globe, Phone, Briefcase, Hotel, ShoppingCart, GraduationCap, Mail, Zap, Code, Layout, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import OptimizedImage from '@/src/components/OptimizedImage';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '#',
      megaMenu: [
        {
          category: 'Web & Cloud Hosting',
          items: [
            { name: 'cPanel Hosting', path: '/cpanel-hosting', icon: Server, desc: 'Industry standard control panel' },
            { name: 'WordPress Hosting', path: '/wordpress-hosting', icon: Zap, desc: 'Ultra-fast managed WordPress' },
            { name: 'Django Hosting', path: '/django-hosting', icon: Code, desc: 'Optimized for Python apps' },
            { name: 'Cloud Hosting', path: '/cloud-hosting', icon: Cloud, desc: 'Distributed high-availability' },
          ]
        },
        {
          category: 'Server Infrastructure',
          items: [
            { name: 'Cloud VPS', path: '/cloud-vps', icon: Cpu, desc: 'Scalable virtual private servers' },
            { name: 'cPanel VPS', path: '/cpanel-vps', icon: Server, desc: 'Managed VPS with cPanel' },
            { name: 'Windows VPS', path: '/windows-vps', icon: Layout, desc: 'Full RDP & Windows Server' },
            { name: 'Storage VPS', path: '/storage-vps', icon: Database, desc: 'High capacity storage nodes' },
            { name: 'Dedicated Servers', path: '/dedicated-servers', icon: Server, desc: 'Ultimate bare metal power' },
          ]
        },
        {
          category: 'Enterprise Solutions',
          items: [
            { name: 'Qbox Email', path: '/qbox-email', icon: Mail, desc: 'Professional business email' },
            { name: 'Study Abroad CRM', path: '/study-abroad-crm', icon: GraduationCap, desc: 'Student management platform' },
            { name: 'Hotel Management', path: '/hotel-management', icon: Hotel, desc: 'Complete hospitality system' },
            { name: 'Odoo ERP', path: '/odoo-erp', icon: Briefcase, desc: 'Integrated business suite' },
            { name: 'POS Software', path: '/pos-software', icon: ShoppingCart, desc: 'Retail & restaurant POS' },
          ]
        }
      ]
    },
    { name: 'Domains', path: '/domains' },
    { name: 'Our Ecosystem', path: '/our-businesses' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <OptimizedImage 
                src="/logo.png" 
                alt="Venihost Logo" 
                className="w-full h-full object-contain"
                fallback={<Cloud className="text-secondary" size={32} />}
              />
            </div>
            <span className={cn(
              "text-2xl font-display font-bold tracking-tight",
              scrolled ? "text-primary" : "text-primary"
            )}>
              VENI<span className="text-secondary">HOST</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.megaMenu ? (
                  <button className="flex items-center gap-1 font-medium text-primary/80 hover:text-secondary transition-colors py-2">
                    {link.name} <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link 
                    to={link.path} 
                    className={cn(
                      "font-medium transition-colors py-2 block",
                      location.pathname === link.path ? "text-secondary" : "text-primary/80 hover:text-secondary"
                    )}
                  >
                    {link.name}
                  </Link>
                )}

                {link.megaMenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                    <div className="grid grid-cols-3 gap-8 p-10">
                      {link.megaMenu.map((cat) => (
                        <div key={cat.category}>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-3">{cat.category}</h4>
                          <div className="flex flex-col gap-2">
                            {cat.items.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all group/item"
                              >
                                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-white transition-colors shrink-0">
                                  <item.icon size={20} />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-sm font-bold text-primary">{item.name}</span>
                                  <span className="text-xs text-slate-500 mt-0.5">{item.desc}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-slate-50 p-6 flex items-center justify-between border-t border-slate-100">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-primary font-medium text-sm">
                                <Phone size={16} className="text-secondary" />
                                <span>Support: +234 811 685 6186</span>
                            </div>
                            <div className="flex items-center gap-2 text-primary font-medium text-sm">
                                <Mail size={16} className="text-secondary" />
                                <span>hello@venihost.com.ng</span>
                            </div>
                        </div>
                        <Link to="/pricing" className="text-secondary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                            View all pricing <X size={14} className="rotate-45" />
                        </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://app.venihost.com.ng/clientarea.php" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:text-secondary transition-colors"
            >
              Login
            </a>
            <a 
              href="/cpanel-hosting" 
              className="bg-secondary text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all hover:scale-105 active:scale-95"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.megaMenu ? (
                    <div className="flex flex-col gap-4">
                      {link.megaMenu.map((cat) => (
                        <div key={cat.category} className="flex flex-col gap-2">
                          <span className="font-semibold text-primary/50 text-xs uppercase tracking-wider px-2">{cat.category}</span>
                          {cat.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 text-primary font-medium"
                            >
                              <item.icon size={18} className="text-secondary" />
                              <div className="flex flex-col">
                                <span className="text-sm font-bold">{item.name}</span>
                                <span className="text-[10px] text-slate-500">{item.desc}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-primary font-medium text-lg"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a 
                  href="https://app.venihost.com.ng/clientarea.php" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 rounded-xl border border-slate-200 font-semibold text-primary"
                >
                  Login
                </a>
                <a 
                  href="/cpanel-hosting" 
                  className="w-full text-center py-3 rounded-xl bg-secondary text-white font-semibold shadow-lg shadow-secondary/20"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
