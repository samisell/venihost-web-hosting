import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Zap, Globe, Cpu, Server, Cloud, Users, Award, Target } from 'lucide-react';
import OptimizedImage from '@/src/components/OptimizedImage';

import SEO from '@/src/components/SEO';

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Venihost",
      "description": "Founded in 2015, Venihost is a leading provider of web hosting solutions in Nigeria, serving thousands of customers globally.",
      "foundingDate": "2015",
      "logo": "https://ais-dev-ezycmo3ejzvw32hzuwnebg-203073481385.europe-west1.run.app/logo.png"
    }
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Our Story & Mission | About Venihost"
        description="Learn about Venihost, our mission, vision, and the values that drive us to provide the best web hosting services in Nigeria since 2015."
        keywords="about venihost, web hosting company nigeria, hosting mission, venihost story"
        structuredData={structuredData}
      />
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage 
            src="/computer-scientist-data-center-using-diagnostic-tools-laptop.jpg" 
            alt="About Hero" 
            className="object-cover" 
            priority={true}
          />
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        {/* Added Hero PNG Illustration */}
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 0.1, rotate: 0 }}
          transition={{ duration: 2 }}
          className="absolute left-0 top-0 w-full h-full pointer-events-none hidden lg:block"
        >
          <OptimizedImage 
            src="/CyberPanel-409965283.webp" 
            alt="About Illustration" 
            className="object-contain"
          />
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Our Story</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Empowering businesses and individuals to succeed online with world-class hosting solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="/smiling-engineer-using-laptop-data-center-oversee-hardware.jpg" 
                alt="Our Team" 
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-secondary p-10 rounded-[2.5rem] shadow-2xl text-white max-w-xs">
                <div className="text-5xl font-extrabold mb-2">10+</div>
                <div className="text-lg font-bold">Years of Excellence in Hosting</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-extrabold text-primary mb-8">Who We Are</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Founded in 2015, Venihost started with a simple mission: to make high-quality web hosting accessible to everyone. Today, we are proud to serve thousands of customers globally, from personal bloggers to large-scale enterprises.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <Target size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-primary">Our Mission</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    To provide fast, secure, and reliable hosting solutions that empower our customers to achieve their online goals.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <Award size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-primary">Our Vision</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    To be the leading provider of innovative web hosting services, recognized for our excellence and customer support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Active Customers", val: "50,000+", icon: Users },
              { label: "Servers Hosted", val: "5,000+", icon: Server },
              { label: "Countries Served", val: "120+", icon: Globe },
              { label: "Uptime Guarantee", val: "99.9%", icon: Zap }
            ].map((stat, i) => (
              <div key={i} className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-secondary mx-auto border border-white/10">
                  <stat.icon size={32} />
                </div>
                <div className="text-4xl font-extrabold">{stat.val}</div>
                <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-6">Our Core Values</h2>
            <p className="text-lg text-slate-600">These principles guide everything we do at Venihost.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Customer First", desc: "Our customers are at the heart of everything we do. We strive to exceed their expectations every day." },
              { title: "Innovation", desc: "We are constantly exploring new technologies to provide the best possible service to our customers." },
              { title: "Integrity", desc: "We believe in transparency, honesty, and building long-term relationships based on trust." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
