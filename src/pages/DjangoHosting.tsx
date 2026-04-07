import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Zap, Globe, Cpu, Server, Terminal, Code } from 'lucide-react';
import PricingCard from '@/src/components/PricingCard';
import OptimizedImage from '@/src/components/OptimizedImage';
import SEO from '@/src/components/SEO';

const DjangoHosting = () => {
  const plans = [
    {
      name: "Django Basic",
      price: "₦3,500",
      period: "mo",
      description: "Fast Python hosting",
      features: ["1 Python Website", "15GB NVMe SSD Storage", "Unlimited Bandwidth", "Free SSL (Let's Encrypt)", "Single-Click Deployment", "PostgreSQL/MySQL Supported"],
      ctaLink: "https://app.venihost.com.ng/cart.php?gid=1"
    },
    {
      name: "Django Pro",
      price: "₦7,500",
      period: "mo",
      description: "Scale with power",
      features: ["5 Python Websites", "60GB NVMe SSD Storage", "Unlimited Bandwidth", "Integrated GIT Hosting", "Redis & Celery Supported", "Private Gunicorn/Uvicorn"],
      isPopular: true,
      ctaLink: "https://app.venihost.com.ng/cart.php?gid=1"
    },
    {
  const [billing, setBilling] = useState<BillingPeriod>('1year');

  const formatPrice = (amount: number) =>
    '₦' + amount.toLocaleString('en-NG');

  return (
    <div className="pt-20">
      <SEO
        title="Django Python Hosting | Optimized for Developers"
        description="Lightning fast Django and Python hosting in Nigeria. Experience easy deployment, SSD storage, and expert support for your Python web applications."
        keywords="django hosting nigeria, python hosting africa, fast django deployment, python web hosting"
      />

      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage
            src="/data-center-engineer-leverages-artificial-intelligence-visualization-tools.jpg"
            alt="Django Hosting Hero"
            className="object-cover"
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
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6 border border-secondary/20">
                Virtualmin Control Panel · Django Optimized
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                High-Performance <span className="text-secondary">Django</span> Hosting
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Deploy your Python applications with ease. Optimized for Django, Flask, and FastAPI with SSD storage, Virtualmin control panel, and dedicated support.
              </p>
              <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Python 3.x+</div>
                <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Pip & Setuptools</div>
                <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Virtualmin Panel</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Table */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Django Hosting Plans</h2>
            <p className="text-slate-600 mb-10">Choose the perfect plan to fuel your Python application growth.</p>

            {/* Billing Toggle */}
            <div className="inline-flex bg-white border border-slate-200 rounded-2xl p-1.5 shadow-sm gap-1">
              {(['1year', '2years', '3years'] as BillingPeriod[]).map((period) => (
                <button
                  key={period}
                  onClick={() => setBilling(period)}
                  className={`relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    billing === period
                      ? 'bg-secondary text-white shadow-md'
                      : 'text-slate-500 hover:text-primary'
                  }`}
                >
                  {periodLabel[period]}
                  {savingsLabel[period] && billing !== period && (
                    <span className="absolute -top-2.5 -right-1 bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      {savingsLabel[period]}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="max-w-6xl mx-auto overflow-x-auto rounded-3xl shadow-2xl border border-slate-100">
            <table className="w-full bg-white text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="py-6 px-6 w-1/4 text-slate-500 font-semibold text-sm uppercase tracking-widest bg-slate-50 rounded-tl-3xl">
                    Feature
                  </th>
                  {plans.map((plan, i) => (
                    <th key={i} className={`py-6 px-6 text-center relative ${plan.isPopular ? 'bg-secondary/5' : 'bg-white'} ${i === plans.length - 1 ? 'rounded-tr-3xl' : ''}`}>
                      {plan.isPopular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow">Most Popular</span>
                        </div>
                      )}
                      <div className={`text-lg font-extrabold mb-1 ${plan.isPopular ? 'text-secondary' : 'text-primary'}`}>
                        {plan.name}
                      </div>
                      <div className="text-slate-400 text-xs mb-3">{plan.description}</div>
                      <div className={`text-3xl font-black mb-0.5 ${plan.isPopular ? 'text-secondary' : 'text-primary'}`}>
                        {formatPrice(plan.prices[billing])}
                      </div>
                      <div className="text-slate-400 text-xs mb-4">/ {periodLabel[billing]}</div>
                      <a
                        href={plan.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block w-full py-3 rounded-xl font-bold text-sm transition-all hover:scale-105 shadow-md ${
                          plan.isPopular
                            ? 'bg-secondary text-white shadow-secondary/30'
                            : 'bg-primary text-white hover:bg-primary/90'
                        }`}
                      >
                        Get Started
                      </a>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureRows.map((feature, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className={`border-b border-slate-50 transition-colors hover:bg-slate-50/50 ${rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}
                  >
                    <td className="py-4 px-6 text-sm font-semibold text-slate-700">{feature}</td>
                    {plans.map((plan, colIdx) => {
                      const val = plan.features[feature as keyof typeof plan.features];
                      return (
                        <td key={colIdx} className={`py-4 px-6 text-center ${plan.isPopular ? 'bg-secondary/5' : ''}`}>
                          {typeof val === 'boolean' ? (
                            val ? (
                              <CheckCircle2 className="text-emerald-500 mx-auto" size={20} />
                            ) : (
                              <XCircle className="text-slate-300 mx-auto" size={20} />
                            )
                          ) : (
                            <span className={`text-sm font-bold ${plan.isPopular ? 'text-secondary' : 'text-primary'}`}>{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                {/* Bottom CTA row */}
                <tr className="bg-white">
                  <td className="py-6 px-6 text-sm font-bold text-slate-500 rounded-bl-3xl">Ready to deploy?</td>
                  {plans.map((plan, i) => (
                    <td key={i} className={`py-6 px-6 text-center ${plan.isPopular ? 'bg-secondary/5' : ''} ${i === plans.length - 1 ? 'rounded-br-3xl' : ''}`}>
                      <a
                        href={plan.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block w-full py-3 rounded-xl font-bold text-sm transition-all hover:scale-105 shadow-md ${
                          plan.isPopular
                            ? 'bg-secondary text-white shadow-secondary/30'
                            : 'bg-primary text-white hover:bg-primary/90'
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

          {/* Control Panel Note */}
          <p className="text-center text-slate-500 text-sm mt-8">
            🖥️ All Django hosting plans are powered by the <strong>Virtualmin</strong> control panel. Prices shown are in Nigerian Naira (₦) and billed per selected term.
          </p>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "One-Click Installers", desc: "Easily set up Django, Flask, and other popular Python frameworks.", icon: Code },
                  { title: "Gunicorn & Uvicorn", desc: "Run your worker processes with the most efficient ASGI/WSGI servers.", icon: Zap },
                  { title: "Integrated GIT", desc: "Push to deploy from your GitHub, GitLab, or Bitbucket accounts.", icon: Terminal },
                  { title: "Custom Python Versions", desc: "Switch between multiple Python versions directly via dashboard.", icon: Settings },
                  { title: "PostgreSQL & MySQL", desc: "Easily manage your databases with integrated wizards and access.", icon: Database },
                  { title: "Free SSL", desc: "Secure your apps with automated Let's Encrypt certificates.", icon: Shield }
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
            <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-extrabold text-primary mb-8 leading-tight">Optimized for Python Developers</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                   We know developers want power, control, and simplicity. Our hosting environment is built to make Python development and deployment as fast and easy as possible.
                </p>
                <ul className="space-y-4">
                    {["Private venv environments for every project", "Automated deployment from GIT repositories", "SSH & Terminal access for command control", "Expert Python-specific technical support"].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-primary">
                        <div className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center">
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

export default DjangoHosting;
