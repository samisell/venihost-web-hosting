import React from 'react';
import { motion } from 'motion/react';
import { Check, Cloud, Zap, Shield, Globe, Cpu, Server, BarChart, Activity } from 'lucide-react';
import PricingCard from '@/src/components/PricingCard';
import OptimizedImage from '@/src/components/OptimizedImage';
import SEO from '@/src/components/SEO';

const CloudVPSHosting = () => {
    const plans = [
    {
        name: "Cloud VPS Start",
        price: "₦25,000",
        period: "mo",
        description: "Fast cloud performance",
        features: ["4GB RAM", "2 vCPU Cores", "100GB NVMe Storage", "Unlimited Bandwidth", "Free SSL & Backups", "Instant Scaling"],
        ctaLink: "https://app.venihost.com.ng/cart.php?gid=1"
    },
    {
        name: "Cloud VPS Pro",
        price: "₦55,000",
        period: "mo",
        description: "Scale with confidence",
        features: ["8GB RAM", "4 vCPU Cores", "200GB NVMe Storage", "Unlimited Bandwidth", "Free SSL & Backups", "Priority VIP Support"],
        isPopular: true,
        ctaLink: "https://app.venihost.com.ng/cart.php?gid=1"
    },
    {
        name: "Cloud VPS Enterprise",
        price: "₦95,000",
        period: "mo",
        description: "Maximum cloud power",
        features: ["16GB RAM", "8 vCPU Cores", "400GB NVMe Storage", "Unlimited Bandwidth", "Free SSL & Backups", "Dedicated Account Manager"],
        ctaLink: "https://app.venihost.com.ng/cart.php?gid=1"
    }
    ];

    return (
    <div className="pt-20">
        <SEO 
        title="Managed Cloud VPS Hosting | High Availability"
        description="Experience the power of distributed cloud hosting in Nigeria. High availability, instant scaling, and lightning-fast NVMe storage. High-performance cloud server options."
        keywords="cloud vps hosting nigeria, managed cloud, high availability vps, nvme cloud hosting"
        />
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-slate-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
            <OptimizedImage 
            src="/computer-scientist-data-center-using-diagnostic-tools-laptop.jpg" 
            alt="Cloud VPS Hero" 
            className="object-cover" 
            priority={true}
            />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary font-bold text-sm mb-6 uppercase tracking-widest border border-secondary/20">
                    <Cloud size={18} /> High-Availability Distributed Infrastructure
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                    Enterprise <span className="text-secondary">Cloud</span> VPS
                </h1>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                    Experience the power of our distributed cloud infrastructure. Scale your resources instantly and enjoy high availability and 100% network uptime SLA.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a href="#plans" className="px-10 py-5 bg-secondary text-white rounded-full font-bold text-lg shadow-2xl shadow-secondary/20 hover:bg-secondary/90 transition-all hover:scale-105">
                        Configure Your Cloud VPS
                    </a>
                </div>
            </div>
        </div>
        </section>

        {/* Pricing Table */}
        <section id="plans" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Cloud VPS Pricing</h2>
            <p className="text-slate-600">Choose the perfect amount of power for your mission-critical applications.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
                <PricingCard key={index} {...plan} delay={index * 0.1} />
            ))}
            </div>
        </div>
        </section>

        {/* Distributed Cloud Infrastructure */}
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-extrabold text-primary mb-8 leading-tight">Why Our Cloud is Different</h2>
                        <div className="space-y-6">
                            {[
                            "Full Redundancy across across our storage nodes",
                            "Automatic failover within seconds during issues",
                            "Instantly scale resources without server reboots",
                            "99.99% Network Uptime Service Level Agreement",
                            "Complimentary global Content Delivery Network (CDN)",
                            "Optimized for high-traffic and enterprise applications"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                        <Check size={16} />
                                    </div>
                                    <p className="text-lg text-slate-700 font-medium">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Uptime", val: "99.99%", icon: Zap },
                            { label: "Storage", val: "Distributed NVMe", icon: Server },
                            { label: "Scaling", val: "Instant", icon: BarChart },
                            { label: "Real-time", val: "Monitoring", icon: Activity }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 text-center shadow-lg hover:shadow-2xl transition-all">
                                <stat.icon className="mx-auto text-secondary mb-3" size={24} />
                                <div className="text-2xl font-bold text-primary">{stat.val}</div>
                                <div className="text-xs text-slate-400 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                        </div>
                        <div className="absolute -inset-10 bg-secondary/10 rounded-full blur-[100px] z-0" />
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
};

export default CloudVPSHosting;
