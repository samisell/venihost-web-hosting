import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Zap, Globe, Cpu, Server, Terminal, Settings } from 'lucide-react';
import PricingCard from '@/src/components/PricingCard';
import OptimizedImage from '@/src/components/OptimizedImage';
import SEO from '@/src/components/SEO';

const CPanelVPSHosting = () => {
    const plans = [
    {
        name: "cPanel VPS 1",
        price: "₦35,000",
        period: "mo",
        description: "cPanel powered VPS",
        features: ["2 vCPU cores @ 3.4GHz", "6GB DDR4 RAM", "100GB SSD", "Full Root Access", "Free cPanel Solo License", "Dedicated IP Address"],
        ctaLink: "https://app.venihost.com.ng/cart.php?gid=1"
    },
    {
        name: "cPanel VPS 2",
        price: "₦75,000",
        period: "mo",
        description: "Enterprise cPanel power",
        features: ["4 vCPU cores @ 3.4GHz", "12GB DDR4 RAM", "200GB SSD", "Full Root Access", "Free cPanel Admin License", "Dedicated IP Address"],
        isPopular: true,
        ctaLink: "https://app.venihost.com.ng/cart.php?gid=1"
    },
    {
        name: "cPanel VPS 3",
        price: "₦145,000",
        period: "mo",
        description: "Maximum server power",
        features: ["8 vCPU cores @ 3.4GHz", "240GB DDR4 RAM", "400GB SSD", "Full Root Access", "cPanel Premier License", "Dedicated IP Address"],
        ctaLink: "https://app.venihost.com.ng/cart.php?gid=1"
    }
    ];

    return (
    <div className="pt-20">
        <SEO 
        title="Managed cPanel VPS Hosting | Power & Ease"
        description="High-performance VPS hosting with the power of cPanel. Full root access, SSD storage, and pre-configured cPanel management for your server."
        keywords="cpanel vps hosting nigeria, managed vps nigeria, root access cpanel, high performance vps cpanel"
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
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                        cPanel <span className="text-secondary">VPS</span> Hosting
                    </h1>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                        Combine the power of a VPS with the simplicity of cPanel. Fully managed, lightning-fast SSD storage, and pre-configured for your success.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Managed cPanel</div>
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Root Access</div>
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Intel Xeon Power</div>
                    </div>
                </motion.div>
            </div>
        </div>
        </section>

        {/* Pricing Table */}
        <section id="plans" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">cPanel VPS Pricing</h2>
            <p className="text-slate-600">Choose the perfect amount of power for your server management needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
                <PricingCard key={index} {...plan} delay={index * 0.1} />
            ))}
            </div>
        </div>
        </section>

        {/* Technical Features */}
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 order-2 lg:order-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: "Full Root Access", desc: "Complete control over your server environment via terminal.", icon: Terminal },
                                { title: "Instant License Activation", desc: "Your cPanel license is activated within minutes of deployment.", icon: Zap },
                                { title: "SSD Storage", desc: "High-speed memory for faster data processing for your applications.", icon: Server },
                                { title: "DDR4 RAM", desc: "High-speed memory to handle your most demanding processes.", icon: Cpu },
                                { title: "Pre-Configured cPanel", desc: "Server comes with cPanel & WHM pre-installed and ready to use.", icon: Settings },
                                { title: "Priority Support", desc: "24/7 dedicated support for all your managed VPS needs.", icon: Shield }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 shadow-md flex items-center justify-center text-secondary shrink-0">
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
                        <h2 className="text-4xl font-extrabold text-primary mb-8 leading-tight">Master Your Server with WHM/cPanel</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Web Host Manager (WHM) combined with cPanel gives you complete graphical control over your VPS. Easily manage accounts, DNS, security settings, and services from a single intuitive interface.
                        </p>
                        <ul className="space-y-4">
                            {["Automated backups & restores", "Advanced server configuration via WHM", "Complete account isolation for security", "White-label options for resellers"].map((text, i) => (
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

export default CPanelVPSHosting;
