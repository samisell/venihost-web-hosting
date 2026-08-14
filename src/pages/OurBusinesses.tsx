import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Wifi, Users, Code, ArrowRight, ExternalLink, Globe, MapPin, GraduationCap, Sparkles, Laptop, Building2 } from 'lucide-react';
import OptimizedImage from '@/src/components/OptimizedImage';
import { cn } from '@/src/lib/utils';

import SEO from '@/src/components/SEO';

const businesses = [
  {
    id: 'spellnet',
    name: 'Spellnet',
    tagline: 'High-Speed WISP Internet',
    description: 'Reliable wireless internet solutions for homes and businesses. We bridge the digital divide with cutting-edge WISP technology, ensuring you stay connected no matter where you are.',
    icon: <Wifi className="w-8 h-8" />,
    image: '/servers-delivering-web-content.jpg',
    features: ['Unlimited Data', 'Low Latency', '24/7 Monitoring', 'Quick Installation'],
    color: 'bg-blue-600',
    link: 'https://spellnet.venihost.com.ng',
    ctaText: 'Visit Spellnet'
  },
  {
    id: 'venihub',
    name: 'Venihub',
    tagline: 'Premium Co-working Space',
    description: 'A modern, collaborative workspace designed for productivity. Whether you are a freelancer, startup, or established team, Venihub provides the perfect environment to grow your business.',
    icon: <Users className="w-8 h-8" />,
    image: '/photo_5951573248094964867_y.jpg',
    features: ['High-Speed WiFi', 'Meeting Rooms', 'Coffee Bar', 'Networking Events'],
    color: 'bg-emerald-600',
    link: 'https://venihub.venihost.com.ng',
    ctaText: 'Visit Venihub'
  },
  {
    id: 'codelab',
    name: 'Codelab',
    tagline: 'Code Training School',
    statusBadge: 'Physical Classes Coming Soon',
    subStatus: 'Online Classes Running Now',
    description: 'Empowering the next generation of tech talent. Intensive hands-on coding bootcamps covering Full-Stack Development, UI/UX Design, and Data Science. Currently running live online classes with full instructor mentorship, while our physical tech campus is coming soon!',
    icon: <Code className="w-8 h-8" />,
    image: '/smiling-engineer-using-laptop-data-center-oversee-hardware.jpg',
    features: ['Live Online Interactive Classes', 'Physical Classes (Coming Soon)', 'Hands-on Real World Projects', 'Mentorship & Certification'],
    color: 'bg-indigo-600',
    link: '/contact',
    ctaText: 'Enroll in Online Classes'
  }
];

const OurBusinesses = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": businesses.map((biz, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Organization",
        "name": biz.name,
        "description": biz.description,
        "image": biz.image
      }
    }))
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Our Ecosystem | Spellnet, Venihub, Codelab | Venihost"
        description="Explore the Venihost ecosystem. From high-speed WISP internet with Spellnet, to co-working spaces at Venihub, and tech training at Codelab (Online classes active, physical classes coming soon)."
        keywords="spellnet internet, venihub coworking, codelab training, venihost ecosystem, tech nigeria, codelab online classes"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <OptimizedImage 
            src="/african-american-engineer-inspecting-interlinked-computers-creating-server-network-high-tech-facility-using-parallel-computing-perform-complex-calculations-process-large-amounts-data.jpg" 
            alt="Venihost Ecosystem" 
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              The Venihost <span className="text-secondary">Ecosystem</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Beyond hosting, we are building a diverse portfolio of tech-driven businesses to empower individuals and organizations across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Businesses Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {businesses.map((biz, index) => (
              <motion.div
                key={biz.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "flex flex-col gap-12 items-center",
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                )}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="relative group">
                    <div className={cn(
                      "absolute -inset-4 rounded-[2.5rem] opacity-20 blur-2xl transition duration-500 group-hover:opacity-30",
                      biz.color
                    )} />
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
                      <OptimizedImage 
                        src={biz.image} 
                        alt={biz.name} 
                        className="w-full aspect-[4/3] object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-6 left-6">
                        <div className={cn("p-4 rounded-2xl text-white shadow-lg", biz.color)}>
                          {biz.icon}
                        </div>
                      </div>

                      {biz.statusBadge && (
                        <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex items-center justify-between gap-2 text-white">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                            <span className="text-xs font-bold">{biz.subStatus}</span>
                          </div>
                          <span className="text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full whitespace-nowrap">
                            {biz.statusBadge}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <div className="max-w-xl">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h2 className="text-4xl md:text-5xl font-extrabold text-primary">{biz.name}</h2>
                      {biz.statusBadge && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold">
                          <Building2 size={13} />
                          <span>Physical Classes: Coming Soon</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <p className="text-xl font-bold text-secondary">{biz.tagline}</p>
                      {biz.subStatus && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                          <Laptop size={12} />
                          <span>{biz.subStatus}</span>
                        </span>
                      )}
                    </div>

                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {biz.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
                      {biz.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={cn("w-2 h-2 rounded-full shrink-0", biz.color)} />
                          <span className="text-sm font-semibold text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {biz.link.startsWith('/') ? (
                      <Link
                        to={biz.link}
                        className={cn(
                          "inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold transition-all shadow-xl hover:scale-105 active:scale-95",
                          biz.color
                        )}
                      >
                        {biz.ctaText || `Visit ${biz.name}`} <ArrowRight size={18} />
                      </Link>
                    ) : (
                      <a
                        href={biz.link}
                        target={biz.link !== '#' ? '_blank' : undefined}
                        rel={biz.link !== '#' ? 'noopener noreferrer' : undefined}
                        className={cn(
                          "inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold transition-all shadow-xl hover:scale-105 active:scale-95",
                          biz.color
                        )}
                      >
                        {biz.ctaText || `Visit ${biz.name}`} <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Ready to explore our ecosystem?</h2>
              <p className="text-xl text-slate-300 mb-12">
                Whether you need high-speed internet, a place to work, or a new career in tech, we have got you covered.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="px-10 py-5 bg-secondary text-white rounded-2xl font-bold text-lg shadow-xl shadow-secondary/20 hover:bg-secondary/90 transition-all">
                  Contact Sales & Admissions
                </Link>
                <Link to="/about" className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                  Learn More About Venihost
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBusinesses;
