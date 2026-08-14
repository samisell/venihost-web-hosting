import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Zap, Cpu, Server, Database, HardDrive, CheckCircle2, Globe } from 'lucide-react';
import PricingCard from '@/src/components/PricingCard';
import OptimizedImage from '@/src/components/OptimizedImage';
import SEO from '@/src/components/SEO';

const plans = [
  {
    name: "Storage 500",
    price: "₦8,000",
    period: "mo",
    description: "Entry-level storage node",
    vCPU: "1 Core",
    ram: "0.5 GB",
    disk: "500 GB",
    bandwidth: "2000 GB",
    features: ["500 GB Storage", "0.5 GB RAM", "1 vCPU Core", "2000 GB Bandwidth", "Full Root Access", "RAID Protected"],
    ctaLink: "https://app.venihost.com.ng/cart.php?a=add&pid=20"
  },
  {
    name: "Storage 1000",
    price: "₦10,000",
    period: "mo",
    description: "High capacity storage",
    vCPU: "1 Core",
    ram: "1 GB",
    disk: "1 TB",
    bandwidth: "2000 GB",
    isPopular: true,
    features: ["1 TB Storage", "1 GB RAM", "1 vCPU Core", "2000 GB Bandwidth", "Full Root Access", "RAID Protected"],
    ctaLink: "https://app.venihost.com.ng/cart.php?a=add&pid=20"
  },
  {
    name: "Storage 2000",
    price: "₦20,000",
    period: "mo",
    description: "Maximum storage capacity",
    vCPU: "1 Core",
    ram: "2 GB",
    disk: "2 TB",
    bandwidth: "4000 GB",
    features: ["2 TB Storage", "2 GB RAM", "1 vCPU Core", "4000 GB Bandwidth", "Full Root Access", "RAID Protected"],
    ctaLink: "https://app.venihost.com.ng/cart.php?a=add&pid=21"
  }
];

const tableRows = [
  { label: 'vCPU Cores', values: ['1 Core', '1 Core', '1 Core'] },
  { label: 'Physical RAM', values: ['0.5 GB', '1 GB', '2 GB'] },
  { label: 'HDD Disk Space', values: ['500 GB', '1 TB', '2 TB'] },
  { label: 'Monthly Bandwidth', values: ['2000 GB', '2000 GB', '4000 GB'] },
  { label: 'Storage Type', values: ['RAID HDD', 'RAID HDD', 'RAID HDD'] },
  { label: 'Full Root Access', values: [true, true, true] },
  { label: 'Dedicated IP Address', values: [true, true, true] },
  { label: 'OS Options (Linux)', values: [true, true, true] },
  { label: 'SSH Control', values: [true, true, true] },
  { label: 'Uptime Guarantee', values: ['99.9%', '99.9%', '99.9%'] },
  { label: 'Automated Backups', values: ['Optional', 'Available', 'Included'] },
  { label: 'Priority Support', values: ['Standard', 'Priority', 'VIP 24/7'] },
];

const StorageVPSHosting = () => {
    return (
    <div className="pt-20">
        <SEO 
        title="High-Storage VPS Hosting | Backup & File Server"
        description="High-capacity storage VPS in Nigeria. Perfect for backups, file servers, ownCloud/NextCloud and large database storage at affordable monthly rates."
        keywords="storage vps nigeria, backup server hosting, large storage vps, affordable storage"
        />
        {/* Hero */}
        <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <OptimizedImage 
            src="/servers-delivering-web-content.jpg" 
            alt="Storage VPS Hero" 
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
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-bold mb-6 uppercase tracking-wider">
                        Massive Data Capacity
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                        Massive <span className="text-secondary">Storage</span> VPS
                    </h1>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                        Need space? Get high-capacity storage for your backups, file servers, or private clouds. Secure, reliable, and incredibly affordable.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> RAID Protected</div>
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Up to 2TB Disk</div>
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Root Access</div>
                    </div>
                </motion.div>
            </div>
        </div>
        </section>

        {/* Plan Cards */}
        <section id="plans" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-primary mb-4">Storage VPS Plans</h2>
                <p className="text-slate-600">Choose the perfect capacity for your data-intensive projects.</p>
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

                        {/* Visual Specs / Progress Bars */}
                        <div className="space-y-4">
                            {[
                                { label: 'vCPU', value: plan.vCPU, total: 1 },
                                { label: 'RAM', value: plan.ram, total: 2 },
                                { label: 'DISK SPACE', value: plan.disk, total: 2 },
                                { label: 'BANDWIDTH', value: plan.bandwidth, total: 4000 },
                            ].map((spec, j) => {
                                // Simple logic to get percentage
                                const current = parseFloat(spec.value);
                                let pct = (current / spec.total) * 100;
                                if (spec.label === 'DISK SPACE' && spec.value.includes('GB')) pct = (current / 2000) * 100;
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
                            {["Full SSH Root Access", "RAID Protected Storage", "Dedicated IP Address", "Backup & File Server Ready"].map((feat, j) => (
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

        {/* Detailed Comparison Table */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-primary mb-4">Detailed Technical Comparison</h2>
                    <p className="text-slate-600">Compare specifications to choose your ideal storage node.</p>
                </div>

                <div className="max-w-6xl mx-auto overflow-x-auto rounded-3xl shadow-2xl border border-slate-100">
                    <table className="w-full bg-white text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-100">
                                <th className="py-6 px-6 w-1/3 text-slate-400 font-semibold text-xs uppercase tracking-widest bg-slate-50 rounded-tl-3xl">
                                    Specifications
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
                                            {plan.name === 'Storage 500' ? '₦8,000' : plan.price}
                                        </div>
                                        <div className="text-slate-400 text-xs mb-4">/ mo</div>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        {/* Features Content */}
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-extrabold text-primary mb-8 leading-tight">Optimized for Backup & Warehousing</h2>
                        <div className="space-y-6">
                            {[
                            "RAID protected storage for total data redundancy",
                            "High-volume file transfer optimization",
                            "One-click Nextcloud / ownCloud installers",
                            "Perfect for remote backups and long-term archiving",
                            "Seamlessly scale as your data grow from 500GB to 2TB",
                            "Complete Root access via SSH for absolute control"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 hover:bg-white rounded-2xl transition-all border border-transparent hover:border-slate-200 group">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                                        <Check size={16} />
                                    </div>
                                    <p className="text-lg text-slate-700 font-medium">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-8">
                        {[
                            { title: "High HDD Capacity", icon: HardDrive, desc: "SATA Enterprise drives" },
                            { title: "Scale Seamlessly", icon: Zap, desc: "Upgrade in 1-click" },
                            { title: "SSH Root Access", icon: Globe, desc: "Full terminal control" },
                            { title: "Reliable Backups", icon: Shield, desc: "99.9% Data Safety" }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-lg text-center hover:-translate-y-2 transition-all">
                                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 mx-auto">
                                    <item.icon size={28} />
                                </div>
                                <h4 className="text-lg font-bold text-primary mb-1">{item.title}</h4>
                                <p className="text-xs text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
};

export default StorageVPSHosting;
