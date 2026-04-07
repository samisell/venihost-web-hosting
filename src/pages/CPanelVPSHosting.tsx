import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Zap, Cpu, Server, Terminal, Settings, Clock, CheckCircle2 } from 'lucide-react';
import OptimizedImage from '@/src/components/OptimizedImage';
import SEO from '@/src/components/SEO';

const plans = [
  {
    name: 'cPanel VPS 1',
    subtitle: 'CPS 2',
    price: '₦35,000',
    period: 'mo',
    description: 'Ideal for small businesses & agencies',
    vCPU: '1 vCPU',
    ram: '2 GB Physical RAM',
    disk: '20 GB SSD',
    bandwidth: '1,800 GB',
    delivery: '4 Hr Delivery',
    license: 'cPanel/WHM License',
    ctaLink: 'https://app.venihost.com.ng/cart.php?a=add&pid=17',
    isPopular: false,
  },
  {
    name: 'cPanel VPS 2',
    subtitle: '',
    price: '₦45,000',
    period: 'mo',
    description: 'Perfect for growing hosting businesses',
    vCPU: '2 vCPU',
    ram: '4 GB Physical RAM',
    disk: '40 GB SSD',
    bandwidth: '3,800 GB',
    delivery: '4 Hr Delivery',
    license: 'cPanel/WHM License',
    ctaLink: 'https://app.venihost.com.ng/cart.php?a=add&pid=18',
    isPopular: true,
  },
  {
    name: 'cPanel VPS 3',
    subtitle: '',
    price: '₦55,000',
    period: 'mo',
    description: 'Maximum power for large-scale servers',
    vCPU: '3 vCPU',
    ram: '8 GB Physical RAM',
    disk: '80 GB SSD',
    bandwidth: '7,800 GB',
    delivery: '4 Hr Delivery',
    license: 'cPanel/WHM License',
    ctaLink: 'https://app.venihost.com.ng/cart.php?a=add&pid=19',
    isPopular: false,
  },
];

const tableRows = [
  { label: 'vCPU Cores', values: ['1 vCPU', '2 vCPU', '3 vCPU'] },
  { label: 'Physical RAM', values: ['2 GB', '4 GB', '8 GB'] },
  { label: 'SSD Disk Storage', values: ['20 GB', '40 GB', '80 GB'] },
  { label: 'Monthly Bandwidth', values: ['1,800 GB', '3,800 GB', '7,800 GB'] },
  { label: 'Delivery Time', values: ['4 Hours', '4 Hours', '4 Hours'] },
  { label: 'Control Panel', values: ['cPanel/WHM', 'cPanel/WHM', 'cPanel/WHM'] },
  { label: 'cPanel License Included', values: [true, true, true] },
  { label: 'Full Root Access', values: [true, true, true] },
  { label: 'Dedicated IP Address', values: [true, true, true] },
  { label: 'Free SSL (AutoSSL)', values: [true, true, true] },
  { label: 'WHM (Web Host Manager)', values: [true, true, true] },
  { label: 'DNS Management', values: [true, true, true] },
  { label: 'Softaculous Installer', values: [true, true, true] },
  { label: 'Automated Backups', values: ['Weekly', 'Daily', 'Daily Premium'] },
  { label: 'Priority Support', values: ['Standard', 'Priority', 'VIP 24/7'] },
];

const CPanelVPSHosting = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Managed cPanel VPS Hosting | Power & Ease"
        description="High-performance VPS hosting with the power of cPanel/WHM. Full root access, SSD storage, and pre-configured cPanel management for your server in Nigeria."
        keywords="cpanel vps hosting nigeria, managed vps nigeria, root access cpanel, whm vps hosting"
      />

      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage
            src="/cPanel-logo.png"
            alt="cPanel Logo"
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-bold mb-6 uppercase tracking-wider">
                cPanel / WHM Powered
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                cPanel <span className="text-secondary">VPS</span> Hosting
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Combine the power of a Virtual Private Server with the simplicity of cPanel/WHM. Full root access, SSD storage, and your licence included — ready in 4 hours.
              </p>
              <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> cPanel/WHM Included</div>
                <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Full Root Access</div>
                <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> 4-Hour Delivery</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plan Cards */}
      <section id="plans" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">cPanel VPS Plans</h2>
            <p className="text-slate-600">Choose the right amount of power for your managed cPanel server.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-3xl p-8 flex flex-col gap-6 shadow-xl border ${
                  plan.isPopular
                    ? 'bg-secondary text-white border-secondary shadow-secondary/30'
                    : 'bg-white text-primary border-slate-100'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-secondary text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.isPopular ? 'text-white/70' : 'text-secondary'}`}>
                    {plan.name}{plan.subtitle ? ` · ${plan.subtitle}` : ''}
                  </div>
                  <div className={`text-4xl font-black mb-1 ${plan.isPopular ? 'text-white' : 'text-primary'}`}>
                    {plan.price}
                  </div>
                  <div className={`text-sm ${plan.isPopular ? 'text-white/70' : 'text-slate-400'}`}>
                    / month · billed monthly
                  </div>
                  <p className={`mt-3 text-sm ${plan.isPopular ? 'text-white/80' : 'text-slate-500'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Spec Pills */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'vCPU', value: plan.vCPU },
                    { label: 'RAM', value: plan.ram },
                    { label: 'SSD', value: plan.disk },
                    { label: 'Bandwidth', value: plan.bandwidth },
                  ].map((spec, j) => (
                    <div
                      key={j}
                      className={`rounded-xl p-3 text-center ${
                        plan.isPopular ? 'bg-white/10' : 'bg-slate-50'
                      }`}
                    >
                      <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${plan.isPopular ? 'text-white/60' : 'text-slate-400'}`}>
                        {spec.label}
                      </div>
                      <div className={`text-sm font-extrabold ${plan.isPopular ? 'text-white' : 'text-primary'}`}>
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key features */}
                <ul className="flex flex-col gap-3">
                  {[
                    plan.delivery,
                    plan.license,
                    'Full Root Access',
                    'Dedicated IP Address',
                    'Free SSL (AutoSSL)',
                    'WHM Reseller Panel',
                  ].map((feat, j) => (
                    <li key={j} className={`flex items-center gap-3 text-sm font-medium ${plan.isPopular ? 'text-white/90' : 'text-slate-700'}`}>
                      <CheckCircle2 size={16} className={plan.isPopular ? 'text-white' : 'text-secondary'} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto w-full text-center py-4 rounded-2xl font-bold text-base transition-all hover:scale-105 shadow-md ${
                    plan.isPopular
                      ? 'bg-white text-secondary hover:bg-slate-100'
                      : 'bg-secondary text-white hover:bg-secondary/90 shadow-secondary/20'
                  }`}
                >
                  Get Started Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Comparison Table */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Full Plan Comparison</h2>
            <p className="text-slate-600">Every technical detail so you can choose with confidence.</p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto rounded-3xl shadow-2xl border border-slate-100">
            <table className="w-full bg-white text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="py-6 px-6 w-1/3 text-slate-400 font-semibold text-xs uppercase tracking-widest bg-slate-50 rounded-tl-3xl">
                    Specification
                  </th>
                  {plans.map((plan, i) => (
                    <th
                      key={i}
                      className={`py-6 px-6 text-center relative ${plan.isPopular ? 'bg-secondary/5' : 'bg-white'} ${i === plans.length - 1 ? 'rounded-tr-3xl' : ''}`}
                    >
                      {plan.isPopular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <span className="bg-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
                            Popular
                          </span>
                        </div>
                      )}
                      <div className={`text-base font-extrabold mb-1 ${plan.isPopular ? 'text-secondary' : 'text-primary'}`}>
                        {plan.name}
                      </div>
                      <div className={`text-2xl font-black mb-1 ${plan.isPopular ? 'text-secondary' : 'text-primary'}`}>
                        {plan.price}
                      </div>
                      <div className="text-slate-400 text-xs mb-4">/ month</div>
                      <a
                        href={plan.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block w-full py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105 ${
                          plan.isPopular
                            ? 'bg-secondary text-white shadow-lg shadow-secondary/30'
                            : 'bg-primary text-white hover:bg-primary/90 shadow-md'
                        }`}
                      >
                        Get Started
                      </a>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className={`border-b border-slate-50 hover:bg-slate-50/60 transition-colors ${rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}
                  >
                    <td className="py-4 px-6 text-sm font-semibold text-slate-700">{row.label}</td>
                    {row.values.map((val, colIdx) => (
                      <td
                        key={colIdx}
                        className={`py-4 px-6 text-center ${plans[colIdx].isPopular ? 'bg-secondary/5' : ''}`}
                      >
                        {typeof val === 'boolean' ? (
                          val ? (
                            <CheckCircle2 className="text-emerald-500 mx-auto" size={20} />
                          ) : (
                            <span className="text-slate-300 text-lg">—</span>
                          )
                        ) : (
                          <span className={`text-sm font-bold ${plans[colIdx].isPopular ? 'text-secondary' : 'text-primary'}`}>
                            {val}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Bottom CTA */}
                <tr className="bg-slate-50">
                  <td className="py-6 px-6 text-sm font-semibold text-slate-400 rounded-bl-3xl">Ready to deploy?</td>
                  {plans.map((plan, i) => (
                    <td
                      key={i}
                      className={`py-6 px-6 text-center ${plan.isPopular ? 'bg-secondary/5' : ''} ${i === plans.length - 1 ? 'rounded-br-3xl' : ''}`}
                    >
                      <a
                        href={plan.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block w-full py-3 rounded-xl font-bold text-sm transition-all hover:scale-105 ${
                          plan.isPopular
                            ? 'bg-secondary text-white shadow-lg shadow-secondary/30'
                            : 'bg-primary text-white hover:bg-primary/90 shadow-md'
                        }`}
                      >
                        Get Started
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-slate-400 text-sm mt-8">
            ⚡ All cPanel VPS plans include a <strong className="text-primary">cPanel/WHM licence</strong> — deployed and ready within <strong className="text-primary">4 hours</strong>. Prices in Nigerian Naira (₦), billed monthly.
          </p>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: 'Full Root Access', desc: 'Complete control over your server environment via SSH terminal.', icon: Terminal },
                  { title: '4-Hour Delivery', desc: 'Your cPanel VPS is provisioned and ready to use within 4 hours.', icon: Clock },
                  { title: 'SSD Disk Storage', desc: 'High-speed SSD for faster read/write operations and app performance.', icon: Server },
                  { title: 'Physical RAM', desc: 'Dedicated physical RAM — no sharing, no contention.', icon: Cpu },
                  { title: 'Pre-Configured cPanel', desc: 'Server arrives with cPanel & WHM installed, licensed, and ready to go.', icon: Settings },
                  { title: 'Priority Support', desc: '24/7 dedicated support for all your managed VPS needs.', icon: Shield },
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
            <div className="flex-1 order-1 lg:order-2">
              <h2 className="text-4xl font-extrabold text-primary mb-8 leading-tight">
                Master Your Server with WHM/cPanel
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Web Host Manager (WHM) combined with cPanel gives you complete graphical control over your VPS. Manage accounts, DNS, security, and services from one intuitive interface — no command line required.
              </p>
              <ul className="space-y-4">
                {[
                  'Automated backups & one-click restores',
                  'Advanced server configuration via WHM',
                  'Complete account isolation for security',
                  'White-label reseller options included',
                  'Softaculous for 400+ one-click installs',
                  'AutoSSL — free certificates for all accounts',
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-primary">
                    <div className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center shrink-0">
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

export default CPanelVPSHosting;
