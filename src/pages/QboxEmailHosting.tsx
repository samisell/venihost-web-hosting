import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Zap, Globe, Cpu, Server, Mail, Lock, UserCheck, ShieldCheck } from 'lucide-react';
import PricingCard from '@/src/components/PricingCard';
import OptimizedImage from '@/src/components/OptimizedImage';
import SEO from '@/src/components/SEO';

const QboxEmailHosting = () => {
    const plans = [
    {
        name: "Professional Start",
        price: "₦1,000",
        period: "mo/user",
        description: "Entry-level professional email",
        features: ["10GB Storage per mailbox", "Standard Anti-Spam", "Mobile/Desktop Sync", "Free SSL Integration", "Advanced Webmail Access", "Single Domain Support"],
        ctaLink: "https://app.venihost.com.ng/cart.php?gid=1"
    },
    {
        name: "Professional Plus",
        price: "₦2,500",
        period: "mo/user",
        description: "Scale your business email",
        features: ["50GB Storage per mailbox", "Premium Anti-Spam", "Shared Calendars & Tasks", "Full Team Management", "Mobile/Desktop ActiveSync", "Multi-Domain Support"],
        isPopular: true,
        ctaLink: "https://app.venihost.com.ng/cart.php?gid=1"
    },
    {
        name: "Professional Enterprise",
        price: "₦5,000",
        period: "mo/user",
        description: "Ultimate business power",
        features: ["Unlimited Storage mailbox", "VIP Anti-Spam Protection", "Archiving & Compliance", "Video Conferencing Built-In", "Dedicated Support Manager", "End-to-End Encryption"],
        ctaLink: "https://app.venihost.com.ng/cart.php?gid=1"
    }
    ];

    return (
    <div className="pt-20">
        <SEO 
        title="Qbox Professional Email Hosting | Business Email Nigeria"
        description="Get your professional business email addresses with Qbox. Ad-free, high security, more storage and more tools for your business success."
        keywords="business email nigeria, qbox email hosting, professional email addresses, gsuite alternative nigeria"
        />
        {/* Hero */}
        <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <OptimizedImage 
            src="/samisell1.png" 
            alt="Qbox Email Hero" 
            className="object-cover" 
            priority={true}
            />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-white font-bold text-xs uppercase tracking-widest mb-6">
                        Qbox Professional Email
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                        Built for <span className="text-secondary">Business</span> Emails
                    </h1>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Upgrade your professional identity with ad-free, high-security email addresses using your own domain. Integrated productivity tools for your entire team.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest mt-12 mb-8">
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Ad-Free Experience</div>
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> High Security</div>
                        <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Collaboration Tools</div>
                    </div>
                    <div className="flex justify-center gap-4">
                        <a href="#plans" className="px-10 py-5 bg-secondary text-white rounded-full font-bold text-lg shadow-xl shadow-secondary/20 hover:bg-secondary/90 transition-all hover:scale-105">
                            Get Started Now
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
        </section>

        {/* Pricing Table */}
        <section id="plans" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Email Hosting Plans</h2>
            <p className="text-slate-600">Choose the perfect plan to professionally represent your business.</p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: "Personalized Email", desc: "Get email addresses using your own domain like name@company.com.", icon: Mail },
                    { title: "Ad-Free & Private", desc: "Your data is yours alone. No advertising, ever. Privacy is our top priority.", icon: Lock },
                    { title: "Premium Security", desc: "Advanced spam filters and virus protection built into every mailbox.", icon: ShieldCheck },
                    { title: "Sync Everywhere", desc: "Use IMAP, POP3, or ActiveSync to stay updated on all your devices.", icon: Globe },
                    { title: "Calendar & Tasks", desc: "Shared calendars and tasks built-in to keep your team organized.", icon: UserCheck },
                    { title: "Business Tools", desc: "Integrated tools for team meetings and real-time collaboration.", icon: Zap },
                    { title: "Large Storage", desc: "Generous mailbox storage so you never have to delete an important email.", icon: Server },
                    { title: "Expert Support", desc: "Dedicated email experts are available 24/7 to assist with migrations and setup.", icon: UserCheck }
                ].map((item, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                        <item.icon size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    </div>
    );
};

export default QboxEmailHosting;
