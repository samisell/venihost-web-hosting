import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Zap, Cpu, Server, Layout, Search, Clock, CheckCircle2 } from 'lucide-react';
import PricingCard from '@/src/components/PricingCard';
import OptimizedImage from '@/src/components/OptimizedImage';
import SEO from '@/src/components/SEO';

const plans = [
  {
    name: "Windows Start",
    price: "₦35,000",
    period: "mo",
    description: "Entry Windows power",
    vCPU: "2",
    ram: "4 GB",
    disk: "60 GB",
    bandwidth: "4800 GB",
    delivery: "30 Min",
    features: ["2 vCPU cores", "4GB Physical RAM", "60GB SSD Storage", "4800GB Bandwidth", "Full RDP Access", "30 Min Delivery"],
    ctaLink: "https://app.venihost.com.ng/cart.php?a=add&pid=14"
  },
  {
    name: "Windows Pro",
    price: "₦45,000",
    period: "mo",
    description: "High performance Windows",
    vCPU: "3",
    ram: "8 GB",
    disk: "80 GB",
    bandwidth: "12900 GB",
    delivery: "30 Min",
    isPopular: true,
    features: ["3 vCPU cores", "8GB Physical RAM", "80GB SSD Storage", "12900GB Bandwidth", "Full RDP Access", "30 Min Delivery"],
    ctaLink: "https://app.venihost.com.ng/cart.php?a=add&pid=15"
  },
  {
    name: "Windows Enterprise",
    price: "₦55,000",
    period: "mo",
    description: "Maximum server power",
    vCPU: "4",
    ram: "16 GB",
    disk: "160 GB",
    bandwidth: "29900 GB",
    delivery: "30 Min",
    features: ["4 vCPU cores", "16GB Physical RAM", "160GB SSD Storage", "29900GB Bandwidth", "Full RDP Access", "30 Min Delivery"],
    ctaLink: "https://app.venihost.com.ng/cart.php?a=add&pid=16"
  }
];

const tableRows = [
  { label: 'vCPU Cores', values: ['2', '3', '4'] },
  { label: 'Physical RAM', values: ['4 GB', '8 GB', '16 GB'] },
  { label: 'SSD Disk Storage', values: ['60 GB', '80 GB', '160 GB'] },
  { label: 'Monthly Bandwidth', values: ['4800 GB', '12900 GB', '29900 GB'] },
  { label: 'Delivery Time', values: ['30 Min', '30 Min', '30 Min'] },
  { label: 'Remote Desktop (RDP)', values: [true, true, true] },
  { label: 'Administrator Access', values: [true, true, true] },
  { label: 'Dedicated IP Address', values: [true, true, true] },
  { label: 'Windows Server 2019/2022', values: [true, true, true] },
  { label: 'ASP.NET / .NET Core', values: [true, true, true] },
  { label: 'MSSQL Supported', values: [true, true, true] },
  { label: 'Root/Admin Control', values: [true, true, true] },
  { label: 'Daily Backups', values: ['Optional', 'Available', 'Included'] },
  { label: 'Priority Support', values: ['Standard', 'Priority', 'VIP 24/7'] },
];

const WindowsVPSHosting = () => {
    return (
    <div className="pt-20">
        <SEO 
        title="Managed Windows VPS Hosting | RDP Access"
        description="High-performance Windows VPS hosting in Nigeria. Full RDP access, choosing your server OS version, SSD storage, and enterprise-grade hardware."
        keywords="windows vps hosting nigeria, rdp vps nigeria, win server 2022 vps, remote desktop server"
        />
        {/* Hero */}
        <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <OptimizedImage 
            src="/smiling-engineer-using-laptop-data-center-oversee-hardware.jpg" 
            alt="Windows Hosting Hero" 
            className="object-cover" 
            priority={true}
            />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-bold mb-6 uppercase tracking-wider">
                        Enterprise Windows Solutions
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                        Power <span className="text-secondary">Windows</span> VPS
                    </h1>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                        Experience the stability and features of Windows Server with full Remote Desktop (RDP) access. Optimized for Windows workflows and enterprise applications.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> RDP Access</div>
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> 30 Min Delivery</div>
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> ASP.NET/MSSQL</div>
                    </div>
                </motion.div>
            </div>
        </div>
        </section>

        {/* Pricing Cards */}
        <section id="plans" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-primary mb-4">Windows VPS Pricing</h2>
                <p className="text-slate-600">Pure power and control with dedicated Windows resources.</p>
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
                                    Best Value
                                </span>
                            </div>
                        )}

                        <div>
                            <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.isPopular ? 'text-white/70' : 'text-secondary'}`}>
                                {plan.name}
                            </div>
                            <div className={`text-4xl font-black mb-1 ${plan.isPopular ? 'text-white' : 'text-primary'}`}>
                                {plan.price}
                            </div>
                            <div className={`text-sm ${plan.isPopular ? 'text-white/70' : 'text-slate-400'}`}>
                                / month · no setup fee
                            </div>
                        </div>

                        {/* Visual Progress/Specs */}
                        <div className="space-y-4">
                            {[
                                { label: 'vCPU', value: plan.vCPU, total: 4 },
                                { label: 'Physical RAM', value: plan.ram, total: 16 },
                                { label: 'SSD DISK', value: plan.disk, total: 160 },
                                { label: 'BANDWIDTH', value: plan.bandwidth, total: 29900 },
                            ].map((spec, j) => {
                                const current = parseFloat(spec.value);
                                const pct = (current / spec.total) * 100;
                                return (
                                    <div key={j} className="space-y-1.5">
                                        <div className="flex justify-between items-end">
                                            <span className={`text-[10px] font-bold uppercase tracking-widest ${plan.isPopular ? 'text-white/70' : 'text-slate-400'}`}>
                                                {spec.label}
                                            </span>
                                            <span className={`text-xs font-bold ${plan.isPopular ? 'text-white' : 'text-primary'}`}>
                                                {spec.value}
                                            </span>
                                        </div>
                                        <div className={`h-1.5 w-full rounded-full overflow-hidden ${plan.isPopular ? 'bg-white/20' : 'bg-slate-100'}`}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${pct}%` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className={`h-full ${plan.isPopular ? 'bg-white' : 'bg-secondary'}`}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <ul className="flex flex-col gap-3 mt-2">
                            {["30 Min Delivery", "Full Administrator Access", "Windows Server 2022", "Dedicated IP Address"].map((feat, j) => (
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

        {/* Comparison Table */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-primary mb-4">Detailed Plan Comparison</h2>
                    <p className="text-slate-600">Choose the hardware configuration that fits your project requirements.</p>
                </div>

                <div className="max-w-6xl mx-auto overflow-x-auto rounded-3xl shadow-2xl border border-slate-100">
                    <table className="w-full bg-white text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-100">
                                <th className="py-6 px-6 w-1/3 text-slate-400 font-semibold text-xs uppercase tracking-widest bg-slate-50 rounded-tl-3xl">
                                    Feature Details
                                </th>
                                {plans.map((plan, i) => (
                                    <th
                                        key={i}
                                        className={`py-6 px-6 text-center relative ${plan.isPopular ? 'bg-secondary/5' : 'bg-white'} ${i === plans.length - 1 ? 'rounded-tr-3xl' : ''}`}
                                    >
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
                                            Order Now
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
                            <tr className="bg-slate-50">
                                <td className="py-6 px-6 text-sm font-semibold text-slate-400 rounded-bl-3xl">Get Started</td>
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
            </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-slate-50 overflow-hidden text-center lg:text-left">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-4xl font-extrabold text-primary mb-8 leading-tight">Windows Server Performance</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: "RDP Access", desc: "Gain full GUI control of your server from any device via RDP.", icon: Layout },
                                { title: "30 Min Delivery", desc: "Automated provisioning gets you online faster than anyone else.", icon: Clock },
                                { title: "ASP.NET Optimized", desc: "Tuned for maximum .NET performance and MSSQL compatibility.", icon: Search },
                                { title: "Win Server 2022", desc: "Choose your OS version like Windows 2019 or the latest 2022.", icon: Server },
                                { title: "NVMe SSD", desc: "Enterprise-grade storage for lightning-fast disk I/O.", icon: Zap },
                                { title: "Security First", desc: "Built-in firewall and enterprise-grade hardware isolation.", icon: Shield }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col lg:flex-row gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary mb-4 lg:mb-0 shrink-0">
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
                </div>
            </div>
        </section>
    </div>
    );
};

export default WindowsVPSHosting;
