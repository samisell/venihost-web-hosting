import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Zap, Globe, Cpu, Server, Layout, Search } from 'lucide-react';
import PricingCard from '@/src/components/PricingCard';
import OptimizedImage from '@/src/components/OptimizedImage';
import SEO from '@/src/components/SEO';

const WindowsVPSHosting = () => {
    const plans = [
    {
        name: "Windows Start",
        price: "₦20,000",
        period: "mo",
        description: "Entry Windows power",
        features: ["2 vCPU cores @ 3.4GHz", "4GB DDR4 RAM", "80GB SSD Storage", "Full RDP Access", "Win Server 2019/2022", "Dedicated IP Address"],
        ctaLink: "https://app.venihost.com.ng/cart.php?gid=1"
    },
    {
        name: "Windows Pro",
        price: "₦45,000",
        period: "mo",
        description: "High performance Windows",
        features: ["4 vCPU cores @ 3.4GHz", "12GB DDR4 RAM", "200GB SSD Storage", "Full RDP Access", "Win Server 2019/2022", "Dedicated IP Address"],
        isPopular: true,
        ctaLink: "https://app.venihost.com.ng/cart.php?gid=1"
    },
    {
        name: "Windows Enterprise",
        price: "₦95,000",
        period: "mo",
        description: "Maximum server power",
        features: ["8 vCPU cores @ 3.4GHz", "24GB DDR4 RAM", "400GB SSD Storage", "Full RDP Access", "Win Server 2019/2022", "Dedicated IP Address"],
        ctaLink: "https://app.venihost.com.ng/cart.php?gid=1"
    }
    ];

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
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                        Power <span className="text-secondary">Windows</span> VPS
                    </h1>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                        Experience the stability and features of Windows Server with full Remote Desktop (RDP) access. Optimized for Windows workflows and applications.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> RDP Access</div>
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Win Server 2022</div>
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> ASP.NET/MSSQL</div>
                    </div>
                </motion.div>
            </div>
        </div>
        </section>

        {/* Pricing Table */}
        <section id="plans" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Windows VPS Pricing</h2>
            <p className="text-slate-600">Pure power and control with dedicated Windows resources.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
                <PricingCard key={index} {...plan} delay={index * 0.1} />
            ))}
            </div>
        </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Remote Desktop Protocol", desc: "Gain full GUI control of your server from any device, anywhere in the world.", icon: Layout },
                    { title: "Windows Server Options", desc: "Choose your preferred OS version like Windows 2019 or the latest 2022 versions.", icon: Server },
                    { title: "ASP.NET Optimized", desc: "Our Windows environment is tuned for maximum .NET performance.", icon: Code },
                    { title: "MSSQL Supported", desc: "Easy installation of SQL server for your database-driven applications.", icon: Search },
                    { title: "NVMe SSD Storage", desc: "High-speed memory for faster data processing for your applications.", icon: Zap },
                    { title: "Enterprise Reliability", desc: "Managed resources on world-class industrial server hardware.", icon: Shield }
                ].map((item, i) => (
                    <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-white hover:bg-white hover:shadow-2xl transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                        <item.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    </div>
    );
};

// Mock Code icon replacement
const Code = (props: any) => <Cpu {...props} />;

export default WindowsVPSHosting;
