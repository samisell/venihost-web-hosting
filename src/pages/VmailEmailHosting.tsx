import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Zap, Globe, Cpu, Server, Mail, Lock, UserCheck, ShieldCheck } from 'lucide-react';
import PricingCard from '@/src/components/PricingCard';
import OptimizedImage from '@/src/components/OptimizedImage';
import SEO from '@/src/components/SEO';

const VmailEmailHosting = () => {
    const plans = [
        {
            name: "Professional Start",
            price: "₦3,500",
            period: "mo/user",
            description: "Entry-level professional email",
            features: ["8GB Storage per mailbox", "Standard Anti-Spam", "Mobile/Desktop Sync", "Free SSL Integration", "Advanced Webmail Access", "Single Domain Support"],
            ctaLink: "https://app.venihost.com.ng/cart.php?a=add&pid=74"
        },
        {
            name: "Professional Plus",
            price: "₦7,000",
            period: "mo/user",
            description: "Scale your business email",
            features: ["25GB Storage per mailbox", "Premium Anti-Spam", "Shared Calendars & Tasks", "Full Team Management", "Mobile/Desktop ActiveSync", "Multi-Domain Support"],
            isPopular: true,
            ctaLink: "https://app.venihost.com.ng/cart.php?a=add&pid=75"
        },
        {
            name: "Professional Enterprise",
            price: "₦10,000",
            period: "mo/user",
            description: "Ultimate business power",
            features: ["100GB Storage per mailbox", "VIP Anti-Spam Protection", "Archiving & Compliance", "Video Conferencing Built-In", "Dedicated Support Manager", "End-to-End Encryption"],
            ctaLink: "https://app.venihost.com.ng/cart.php?a=add&pid=76"
        }
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Vmail Professional Email Hosting",
        "description": "Professional business email solution with ad-free, high security, and massive storage up to 100GB.",
        "brand": { "@type": "Brand", "name": "Venihost" },
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "NGN",
            "lowPrice": "3500",
            "highPrice": "10000",
            "offerCount": "3"
        }
    };

    return (
        <div className="pt-20">
            <SEO 
                title="Vmail Professional Email Hosting | Business Email Nigeria"
                description="Get your professional business email addresses with Vmail. Ad-free, high security, more storage (up to 100GB) and collaboration tools for your business success."
                keywords="business email nigeria, vmail email hosting, professional email addresses, gsuite alternative nigeria, enterprise email"
                structuredData={structuredData}
            />
            {/* Hero */}
            <section className="bg-primary text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <OptimizedImage 
                        src="/servers-delivering-web-content.jpg" 
                        alt="Vmail Email Hero" 
                        className="object-cover" 
                        priority={true}
                    />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent opacity-100 z-0 hidden lg:block" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-white font-bold text-xs uppercase tracking-widest mb-6">
                                Vmail Professional Email
                            </div>
                            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                                Built for <span className="text-secondary">Business</span> Emails
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                                Upgrade your professional identity with Vmail. Ad-free, high-security email addresses using your own domain. Massive storage and integrated productivity tools.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest mt-12 mb-8">
                                <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> 100GB Storage Options</div>
                                <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Ad-Free & Private</div>
                                <div className="flex items-center gap-2"><Check className="text-secondary" size={18} /> Team Collaboration</div>
                            </div>
                            <div className="flex justify-center gap-4">
                                <a href="#plans" className="px-10 py-5 bg-secondary text-white rounded-full font-bold text-lg shadow-xl shadow-secondary/20 hover:bg-secondary/90 transition-all hover:scale-105">
                                    Choose Your Vmail Plan
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
                        <h2 className="text-4xl font-extrabold text-primary mb-4">Vmail Hosting Plans</h2>
                        <p className="text-slate-600">Choose the perfect level of storage and security for your team.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <PricingCard key={index} {...plan} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Comparison Table */}
            <section className="py-24 bg-slate-50 overflow-x-auto">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-extrabold text-primary mb-16 text-center">Detailed Technical Comparison</h2>
                    <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="p-8 font-bold">Feature</th>
                                    <th className="p-8 font-bold text-center border-l border-white/20">Vmail Start</th>
                                    <th className="p-8 font-bold text-center border-l border-white/20">Vmail Plus</th>
                                    <th className="p-8 font-bold text-center border-l border-white/20">Vmail Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { f: "Mailbox Storage", a: "8 GB", b: "25 GB", c: "100 GB" },
                                    { f: "Anti-Spam / Anti-Virus", a: "Standard", b: "Premium", c: "VIP (AI-Powered)" },
                                    { f: "IMAP/POP3 Access", a: "Yes", b: "Yes", c: "Yes" },
                                    { f: "ActiveSync Support", a: "-", b: "Yes", c: "Yes" },
                                    { f: "Shared Calendars", a: "Read-only", b: "Full Access", c: "Full Access" },
                                    { f: "Team Tasks/Notes", a: "Yes", b: "Yes", c: "Yes" },
                                    { f: "Global Address Book", a: "Yes", b: "Yes", c: "Yes" },
                                    { f: "Admin Web Console", a: "Basic", b: "Advanced", c: "Full Control" },
                                    { f: "Backup & Archiving", a: "-", b: "30 Days", c: "Unlimited" },
                                    { f: "Video Conferencing", a: "-", b: "Standard", c: "Ultra HD + Recording" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="p-8 font-bold text-primary">{row.f}</td>
                                        <td className="p-8 text-center text-slate-600 border-l border-slate-100">{row.a}</td>
                                        <td className="p-8 text-center text-slate-600 border-l border-slate-100">{row.b}</td>
                                        <td className="p-8 text-center font-bold text-secondary border-l border-slate-100">{row.c}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Features Comparison Icons */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Personalized Email", desc: "Get email addresses using your own domain like name@company.com.", icon: Mail },
                            { title: "Ad-Free & Private", desc: "Your data is yours alone. No advertising, ever. Privacy is our top priority.", icon: Lock },
                            { title: "Premium Security", desc: "Advanced spam filters and virus protection built into every mailbox.", icon: ShieldCheck },
                            { title: "Sync Everywhere", desc: "Use IMAP, POP3, or ActiveSync to stay updated on all your devices.", icon: Globe },
                            { title: "Calendar & Tasks", desc: "Shared calendars and tasks built-in to keep your team organized.", icon: UserCheck },
                            { title: "Business Tools", desc: "Integrated tools for team meetings and real-time collaboration.", icon: Zap },
                            { title: "Massive Storage", desc: "Generous mailbox storage options up to 100GB per user.", icon: Server },
                            { title: "Expert Support", desc: "Dedicated email experts are available 24/7 to assist with migrations and setup.", icon: UserCheck }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all group">
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

export default VmailEmailHosting;
