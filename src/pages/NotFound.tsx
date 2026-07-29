import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Home,
  ArrowRight,
  Server,
  Cloud,
  Globe,
  Mail,
  Phone,
  RefreshCw,
} from 'lucide-react';
import SEO from '@/src/components/SEO';

const quickLinks = [
  { label: 'cPanel Hosting', path: '/cpanel-hosting', icon: Server },
  { label: 'Cloud VPS', path: '/cloud-vps', icon: Cloud },
  { label: 'Domains', path: '/domains', icon: Globe },
  { label: 'Contact Us', path: '/contact', icon: Mail },
];

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(15);

  // Auto-redirect countdown
  useEffect(() => {
    if (countdown <= 0) {
      navigate('/');
      return;
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown, navigate]);

  return (
    <div className="pt-20 min-h-screen flex flex-col">
      <SEO
        title="Page Not Found (404) | Venihost"
        description="Oops! The page you're looking for doesn't exist. Head back to Venihost and explore our web hosting, VPS, and domain services."
        keywords="404, page not found, venihost"
      />

      {/* Hero */}
      <section className="flex-1 bg-primary text-white relative overflow-hidden flex items-center">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

        {/* Glowing orbs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Error badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/30 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-8"
              >
                <RefreshCw size={14} className="animate-spin" style={{ animationDuration: '3s' }} />
                Error 404 — Page Not Found
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-extrabold font-display mb-4 leading-none tracking-tighter">
                Oops!
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-slate-300 mb-4">
                We lost this page in the cloud.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
                The page you're looking for may have been moved, deleted, or never existed. Don't worry — our servers are still running at{' '}
                <span className="text-secondary font-semibold">99.9% uptime</span>.
              </p>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/"
                  className="flex items-center gap-2 bg-secondary text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-secondary/30 hover:bg-secondary/90 transition-all hover:scale-105 active:scale-95"
                >
                  <Home size={18} />
                  Back to Home
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-full font-bold backdrop-blur-sm hover:bg-white/20 transition-all"
                >
                  Report Issue
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Auto-redirect notice */}
              <p className="text-slate-500 text-sm">
                Redirecting to home in{' '}
                <span className="text-secondary font-bold text-base">{countdown}s</span>
                …{' '}
                <button
                  onClick={() => setCountdown(999)}
                  className="underline text-slate-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
              </p>
            </motion.div>

            {/* Right: Animated 404 illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden lg:flex flex-col items-center justify-center"
            >
              {/* Giant 404 */}
              <div className="relative select-none">
                <div className="text-[200px] font-extrabold font-display leading-none text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none">
                  404
                </div>

                {/* Floating server card */}
                <motion.div
                  animate={{ y: [0, -18, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl"
                >
                  {/* Server rack illustration */}
                  <div className="flex flex-col gap-3 mb-8">
                    {[
                      { label: 'venihost-node-01', color: 'bg-green-400', active: true },
                      { label: 'venihost-node-02', color: 'bg-green-400', active: true },
                      { label: 'venihost-node-03', color: 'bg-yellow-400', active: false },
                      { label: 'requested-page', color: 'bg-red-400', active: false },
                    ].map((rack, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 bg-white/5 rounded-xl px-5 py-3 border border-white/10"
                      >
                        <motion.div
                          animate={rack.active ? { opacity: [1, 0.3, 1] } : {}}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                          className={`w-2.5 h-2.5 rounded-full ${rack.color} shrink-0`}
                        />
                        <span className="font-mono text-sm text-slate-300 flex-1">{rack.label}</span>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${rack.active ? 'bg-green-400/15 text-green-400' : i === 2 ? 'bg-yellow-400/15 text-yellow-400' : 'bg-red-400/15 text-red-400'}`}>
                          {rack.active ? 'ONLINE' : i === 2 ? 'BUSY' : 'NOT FOUND'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Status bar */}
                  <div className="text-center">
                    <div className="text-4xl font-extrabold text-white mb-1">HTTP 404</div>
                    <div className="text-slate-400 text-sm">Resource not found on server</div>
                  </div>
                </motion.div>

                {/* Orbiting dot */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-6 -right-6 w-32 h-32"
                  style={{ transformOrigin: 'center center' }}
                >
                  <div className="w-4 h-4 rounded-full bg-secondary shadow-lg shadow-secondary/50 absolute top-0 left-1/2 -translate-x-1/2" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-extrabold text-primary mb-2">Maybe you were looking for…</h2>
            <p className="text-slate-500">Jump straight to our most popular services.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {quickLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
              >
                <Link
                  to={link.path}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-secondary/5 hover:border-secondary/30 transition-all group text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                    <link.icon size={22} />
                  </div>
                  <span className="text-sm font-bold text-primary group-hover:text-secondary transition-colors">
                    {link.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support strip */}
      <div className="bg-primary py-5">
        <div className="container mx-auto px-4 md:px-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Phone size={15} className="text-secondary" />
            <span>+234 811 685 6186</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={15} className="text-secondary" />
            <span>hello@venihost.com.ng</span>
          </div>
          <Link to="/faq" className="text-secondary font-semibold hover:underline flex items-center gap-1">
            Browse FAQ <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
