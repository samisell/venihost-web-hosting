import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Zap, Globe, Cpu, Server, Database, HardDrive } from 'lucide-react';
import PricingCard from '@/src/components/PricingCard';
import OptimizedImage from '@/src/components/OptimizedImage';
import SEO from '@/src/components/SEO';

const StorageVPSHosting = () => {
    const plans = [
    {
        name: "Storage 500",
        price: "₦15,000",
        period: "mo",
        description: "Entry-level storage",
        features: ["500GB HDD Storage", "2GB DDR4 RAM", "1 vCPU core", "10TB Monthly Bandwidth", "Full SSH Root Access", "Auto-Backups Included"],
        ctaLink: "https://app.venihost.com.ng/cart.php?gid=1"
    },
    {
        name: "Storage 1000",
        price: "₦25,000",
        period: "mo",
        description: "Pro-level storage",
        features: ["1TB HDD Storage", "4GB DDR4 RAM", "2 vCPU cores", "20TB Monthly Bandwidth", "Full SSH Root Access", "Auto-Backups Included"],
        isPopular: true,
        ctaLink: "https://app.venihost.com.ng/cart.php?gid=1"
    },
    {
        name: "Storage 2000",
        price: "₦45,000",
        period: "mo",
        description: "Enterprise-level storage",
        features: ["2TB HDD Storage", "8GB DDR4 RAM", "4 vCPU cores", "Unlimited Bandwidth", "Full SSH Root Access", "Auto-Backups Included"],
        ctaLink: "https://app.venihost.com.ng/cart.php?gid=1"
    }
    ];

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
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                        Massive <span className="text-secondary">Storage</span> VPS
                    </h1>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                        Need space? Get high-capacity HDD storage for your backups, file servers, or private clouds. Secure, reliable, and incredibly affordable.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Up to 2TB HDD</div>
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> High Bandwidth</div>
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Root Access</div>
                    </div>
                </motion.div>
            </div>
        </div>
        </section>

        {/* Pricing Table */}
        <section id="plans" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Storage VPS Plans</h2>
            <p className="text-slate-600">Pure space for your most data-intensive projects.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
                <PricingCard key={index} {...plan} delay={index * 0.1} />
            ))}
            </div>
        </div>
        </section>

        {/* Features Comparison */}
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-extrabold text-primary mb-8 leading-tight">Designed for Data Storage</h2>
                        <div className="space-y-6">
                            {[
                            "RAID protected storage for data redundancy",
                            "Optimized for high-volume file transfers",
                            "Install Nextcloud or ownCloud in one click",
                            "Ideal for remote backups and data archiving",
                            "Scale your storage easily as your data grows",
                            "Complete Root access via SSH for Command Control"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 hover:bg-white rounded-2xl transition-all border border-transparent hover:border-slate-200">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                        <Check size={16} />
                                    </div>
                                    <p className="text-lg text-slate-700 font-medium">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-8">
                        {[
                            { title: "High HDD Capacity", icon: HardDrive },
                            { title: "Scale Seamlessly", icon: Zap },
                            { title: "SSH Root Access", icon: Globe },
                            { title: "Reliable Backups", icon: Shield }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-lg text-center hover:-translate-y-2 transition-all">
                                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 mx-auto">
                                    <item.icon size={28} />
                                </div>
                                <h4 className="text-lg font-bold text-primary">{item.title}</h4>
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
