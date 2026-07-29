import React from 'react';
import { motion } from 'motion/react';
import { Wifi, Users, Code, ArrowRight, ExternalLink, Globe, MapPin, GraduationCap } from 'lucide-react';
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
    link: 'https://www.spellnet.ng'
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
    link: '#'
  },
  {
    id: 'codelab',
    name: 'Codelab',
    tagline: 'Code Training School',
    description: 'Empowering the next generation of tech talent. Our intensive bootcamps and courses cover full-stack development, UI/UX design, and data science, led by industry experts.',
    icon: <Code className="w-8 h-8" />,
    image: '/smiling-engineer-using-laptop-data-center-oversee-hardware.jpg',
    features: ['Hands-on Projects', 'Mentorship', 'Job Placement', 'Certification'],
    color: 'bg-indigo-600',
    link: '#'
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
        description="Explore the Venihost ecosystem. From high-speed WISP internet with Spellnet, to co-working spaces at Venihub, and tech training at Codelab."
        keywords="spellnet internet, venihub coworking, codelab training, venihost ecosystem, tech nigeria"
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
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <div className="max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">{biz.name}</h2>
                    <p className="text-xl font-bold text-secondary mb-6">{biz.tagline}</p>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {biz.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-10">
                      {biz.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={cn("w-2 h-2 rounded-full", biz.color)} />
                          <span className="text-sm font-bold text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={biz.link}
                      target={biz.link !== '#' ? '_blank' : undefined}
                      rel={biz.link !== '#' ? 'noopener noreferrer' : undefined}
                      className={cn(
                        "inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold transition-all shadow-xl hover:scale-105 active:scale-95",
                        biz.color
                      )}
                    >
                      Visit {biz.name} <ExternalLink size={18} />
                    </a>
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
                <button className="px-10 py-5 bg-secondary text-white rounded-2xl font-bold text-lg shadow-xl shadow-secondary/20 hover:bg-secondary/90 transition-all">
                  Contact Sales
                </button>
                <button className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBusinesses;
