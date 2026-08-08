import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, Server, Cpu, Cloud, Globe, Zap, Mail, Terminal, Database, HardDrive, Layout, Code, Shield } from 'lucide-react';
import PricingCard from '@/src/components/PricingCard';
import OptimizedImage from '@/src/components/OptimizedImage';
import { cn } from '@/src/lib/utils';
import SEO from '@/src/components/SEO';
import { useWhmcsProducts, PRODUCT_PIDS, getCartUrl } from '@/src/lib/whmcsProducts';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'yearly'>('monthly');
  const [activeCategory, setActiveCategory] = React.useState('shared');
  const { getPrice, getName, loading } = useWhmcsProducts();

  const lp = (pid: number, fallback: string) => getPrice(pid, 'monthly') || fallback;
  const ln = (pid: number, fallback: string) => getName(pid) || fallback;

  const categories = [
    { id: 'shared', name: 'Shared/cPanel', icon: Globe },
    { id: 'vps', name: 'VPS Hosting', icon: Cpu },
    { id: 'cloud', name: 'Cloud & Emails', icon: Cloud },
    { id: 'developer', name: 'Developer Specific', icon: Code },
  ];

  const pricingData: Record<string, any[]> = {
    shared: [
      {
        name: ln(PRODUCT_PIDS.CPANEL_ECONOMY, "cPanel Economy"),
        price: lp(PRODUCT_PIDS.CPANEL_ECONOMY, "₦1,500"),
        period: "mo",
        description: "Perfect for beginners",
        features: ["1 Website", "15GB Storage", "Unlimited Bandwidth", "Free SSL", "cPanel Panel"],
        ctaLink: getCartUrl(PRODUCT_PIDS.CPANEL_ECONOMY)
      },
      {
        name: ln(PRODUCT_PIDS.WP_STARTER, "WP Starter"),
        price: lp(PRODUCT_PIDS.WP_STARTER, "₦700"),
        period: "mo",
        description: "Litespeed performance",
        features: ["1 Website", "10GB NVMe Storage", "Unlimited Bandwidth", "LSCache Included", "Managed WordPress"],
        ctaLink: getCartUrl(PRODUCT_PIDS.WP_STARTER),
        isPopular: true
      },
      {
        name: ln(PRODUCT_PIDS.CPANEL_DELUXE, "Shared Pro"),
        price: lp(PRODUCT_PIDS.CPANEL_DELUXE, "₦3,500"),
        period: "mo",
        description: "For growing sites",
        features: ["10 Websites", "50GB Storage", "Unlimited Bandwidth", "Free .com.ng", "Daily Backups"],
        ctaLink: getCartUrl(PRODUCT_PIDS.CPANEL_DELUXE)
      }
    ],
    vps: [
      {
        name: ln(PRODUCT_PIDS.VPS_START, "VPS Start"),
        price: lp(PRODUCT_PIDS.VPS_START, "₦15,000"),
        period: "mo",
        description: "Standard Linux VPS",
        features: ["2 vCPU Cores", "4GB RAM", "80GB SSD", "Full Root Access", "Dedicated IP"],
        ctaLink: getCartUrl(PRODUCT_PIDS.VPS_START)
      },
      {
        name: ln(PRODUCT_PIDS.WINDOWS_VPS_START, "Windows Start"),
        price: lp(PRODUCT_PIDS.WINDOWS_VPS_START, "₦20,000"),
        period: "mo",
        description: "Standard Windows VPS",
        features: ["2 vCPU Cores", "4GB RAM", "80GB SSD", "Full RDP Access", "Win Server 2022"],
        ctaLink: getCartUrl(PRODUCT_PIDS.WINDOWS_VPS_START),
        isPopular: true
      },
      {
        name: ln(PRODUCT_PIDS.STORAGE_VPS, "Storage 500"),
        price: lp(PRODUCT_PIDS.STORAGE_VPS, "₦15,000"),
        period: "mo",
        description: "Massive storage VPS",
        features: ["1 vCPU Core", "2GB RAM", "500GB HDD", "Full Root Access", "Backup Expert"],
        ctaLink: getCartUrl(PRODUCT_PIDS.STORAGE_VPS)
      }
    ],
    cloud: [
      {
        name: ln(PRODUCT_PIDS.CLOUD_VPS_START, "Cloud VPS Start"),
        price: lp(PRODUCT_PIDS.CLOUD_VPS_START, "₦25,000"),
        period: "mo",
        description: "Distributed Cloud VPS",
        features: ["4GB RAM", "2 vCPU Cores", "100GB NVMe", "High Availability", "Instant Scaling"],
        ctaLink: getCartUrl(PRODUCT_PIDS.CLOUD_VPS_START)
      },
      {
        name: ln(PRODUCT_PIDS.EMAIL_PRO, "Professional Plus"),
        price: lp(PRODUCT_PIDS.EMAIL_PRO, "₦2,500"),
        period: "mo/user",
        description: "Business Email Hosting",
        features: ["50GB Mailbox", "Premium Anti-Spam", "Shared Calendars", "ActiveSync", "Mobile Support"],
        ctaLink: getCartUrl(PRODUCT_PIDS.EMAIL_PRO),
        isPopular: true
      },
      {
        name: ln(PRODUCT_PIDS.DEDICATED_START, "Cloud Dedicated"),
        price: lp(PRODUCT_PIDS.DEDICATED_START, "₦85,000"),
        period: "mo",
        description: "Maximum server power",
        features: ["Intel Xeon E-2224", "16GB DDR4 RAM", "2x 500GB SSD", "10TB Bandwidth", "Bare Metal"],
        ctaLink: getCartUrl(PRODUCT_PIDS.DEDICATED_START)
      }
    ],
    developer: [
      {
        name: "Django Basic",
        price: "₦3,500",
        period: "mo",
        description: "Optimized Python",
        features: ["1 Python Website", "15GB NVMe Storage", "GIT Push Deploy", "Private Gunicorn", "PostgreSQL"],
        ctaLink: "/django-hosting"
      },
      {
        name: ln(PRODUCT_PIDS.WP_PRO, "WP Pro"),
        price: lp(PRODUCT_PIDS.WP_PRO, "₦1,700"),
        period: "mo",
        description: "Litespeed & WordPress",
        features: ["5 Websites", "15GB NVMe Storage", "WP Staging", "GIT Integration", "Object Cache"],
        ctaLink: getCartUrl(PRODUCT_PIDS.WP_PRO),
        isPopular: true
      },
      {
        name: ln(PRODUCT_PIDS.CPANEL_ULTIMATE, "cPanel Pro"),
        price: lp(PRODUCT_PIDS.CPANEL_ULTIMATE, "₦7,500"),
        period: "mo",
        description: "Premium Shared",
        features: ["Unlimited Websites", "Unlimited Storage", "Premium Support", "Free Migration", "Imunify360"],
        ctaLink: getCartUrl(PRODUCT_PIDS.CPANEL_ULTIMATE)
      }
    ]
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Comprehensive Hosting Pricing | Venihost"
        description="Compare all our hosting plans in one place. From cPanel and WordPress Hosting to Django, Cloud VPS, Windows VPS and Professional Emails."
      />
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <OptimizedImage src="/smiling-engineer-using-laptop-data-center-oversee-hardware.jpg" alt="Pricing Hero" className="object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">Simple <span className="text-secondary">Comprehensive</span> Pricing</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
            Explore our wide range of professional hosting solutions tailored for your specific needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all",
                  activeCategory === cat.id 
                    ? "bg-secondary text-white shadow-2xl scale-105" 
                    : "bg-white/10 text-slate-400 hover:text-white"
                )}
              >
                <cat.icon size={20} />
                {cat.name}
              </button>
            ))}
          </div>

          <div className="inline-flex items-center bg-white/5 p-1.5 rounded-full border border-white/10">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-2.5 rounded-full font-bold transition-all ${billingCycle === 'monthly' ? 'bg-white text-primary shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`px-8 py-2.5 rounded-full font-bold transition-all ${billingCycle === 'yearly' ? 'bg-white text-primary shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Yearly <span className="text-[10px] bg-green-500 text-white px-2 py-0.5 rounded-full ml-1">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {pricingData[activeCategory].map((plan, index) => (
                <PricingCard key={index} {...plan} delay={index * 0.1} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
              <div className="text-center mb-20">
                  <h2 className="text-4xl font-extrabold text-primary mb-6">Standard Features on All Plans</h2>
                  <p className="text-slate-600">Enterprise reliability comes standard with every Venihost product.</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                  {[
                      { icon: Shield, name: "Free SSL certificates" },
                      { icon: Zap, name: "High-performance SSD" },
                      { icon: Globe, name: "99.9% Uptime SLA" },
                      { icon: Mail, name: "Expert 24/7 Support" },
                      { icon: Server, name: "Daily Backups" },
                      { icon: Cloud, name: "Managed Security" },
                      { icon: HardDrive, name: "Unlimited Bandwidth" },
                      { icon: Layout, name: "User-friendly panels" }
                  ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center gap-4 p-8 rounded-3xl border border-slate-50 bg-slate-50/50">
                          <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-secondary">
                              <item.icon size={24} />
                          </div>
                          <span className="font-bold text-primary text-center">{item.name}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-slate-50 overflow-x-auto">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-extrabold text-primary mb-16 text-center">Comprehensive Comparison</h2>
          <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-8 font-bold">Main Features</th>
                  <th className="p-8 font-bold text-center">Shared/cPanel</th>
                  <th className="p-8 font-bold text-center">WordPress Hosting</th>
                  <th className="p-8 font-bold text-center">Cloud VPS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { f: "Control Panel", a: "cPanel", b: "WP Control Panel", c: "Cloud Dashboard" },
                  { f: "Web Server", a: "Apache/Nginx", b: "OpenLiteSpeed", c: "Customizable" },
                  { f: "Scaling", a: "Plan-based", b: "Plan-based", c: "Instant/Elastic" },
                  { f: "Resources", a: "Shared Pool", b: "Shared/Dedicated", c: "Pure Dedicated" },
                  { f: "Performance", a: "Standard", b: "Ultra-Fast (LSCache)", c: "Maximum Power" },
                  { f: "Root Access", a: "-", b: "Optional", c: "Full SSH/Root" },
                  { f: "Migration", a: "Free", b: "Free", c: "Free Expert Assist" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-8 font-bold text-primary">{row.f}</td>
                    <td className="p-8 text-center text-slate-600">{row.a}</td>
                    <td className="p-8 text-center text-slate-600 font-bold text-secondary">{row.b}</td>
                    <td className="p-8 text-center text-slate-600">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

