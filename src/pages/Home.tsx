import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Clock, Headphones, Globe, Server, Cloud, Cpu, CheckCircle2 } from 'lucide-react';
import FeatureCard from '@/src/components/FeatureCard';
import PricingCard from '@/src/components/PricingCard';
import PricingComparisonTable from '@/src/components/PricingComparisonTable';
import PartnerCarousel from '@/src/components/PartnerCarousel';
import GoogleReviews from '@/src/components/GoogleReviews';
import OptimizedImage from '@/src/components/OptimizedImage';

import TestimonialCarousel from '@/src/components/TestimonialCarousel';

import SEO from '@/src/components/SEO';
import PromoPopup from '@/src/components/PromoPopup';

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Venihost Web Hosting",
    "url": "https://venihost.com",
    "description": "Fast, Secure & Reliable Web Hosting in Nigeria. Shared, VPS, Cloud, and Dedicated Servers.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://venihost.com/domains?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const features = [
    {
      title: "Ultra-Fast Speed",
      description: "Our servers are optimized for maximum performance, ensuring your website loads in the blink of an eye.",
      icon: Zap
    },
    {
      title: "Advanced Security",
      description: "Free SSL certificates, daily backups, and real-time malware scanning to keep your data safe.",
      icon: Shield
    },
    {
      title: "99.9% Uptime",
      description: "We guarantee that your website will be online and accessible to your visitors around the clock.",
      icon: Clock
    },
    {
      title: "24/7 Expert Support",
      description: "Our technical experts are available 24/7 to help you with any issues or questions you may have.",
      icon: Headphones
    }
  ];

  const products = [
    {
      title: "Shared Hosting",
      description: "Perfect for personal blogs and small business websites.",
      icon: Globe,
      price: "₦1,500",
      link: "/shared-hosting",
      image: "/CyberPanel-409965283.webp"
    },
    {
      title: "VPS Hosting",
      description: "Scalable resources for growing websites and applications.",
      icon: Cpu,
      price: "₦15,000",
      link: "/vps-hosting",
      image: "/smiling-engineer-using-laptop-data-center-oversee-hardware.jpg"
    },
    {
      title: "Cloud Hosting",
      description: "High availability and performance for mission-critical sites.",
      icon: Cloud,
      price: "₦25,000",
      link: "/cloud-hosting",
      image: "/computer-scientist-data-center-using-diagnostic-tools-laptop.jpg"
    },
    {
      title: "Dedicated Servers",
      description: "Maximum power and control for large-scale enterprises.",
      icon: Server,
      price: "₦85,000",
      link: "/dedicated-servers",
      image: "/servers-delivering-web-content.jpg"
    }
  ];

  const plans = [
    {
      name: "Starter Plan",
      price: "₦1,500",
      period: "mo",
      description: "Great for personal projects & blogs",
      features: [
        "1 Website",
        "10GB NVMe SSD Storage",
        "100GB Bandwidth",
        "2 Email Accounts",
        "2 MySQL Databases",
        "Free SSL Certificate",
        "LiteSpeed Web Server",
        "cPanel Control Panel",
        "99.9% Uptime Guarantee",
        "Softaculous Installer"
      ],
      ctaLink: "https://app.venihost.com.ng/cart.php?pid=1"
    },
    {
      name: "Professional Plan",
      price: "₦3,500",
      period: "mo",
      description: "Best for small businesses & startups",
      features: [
        "10 Websites",
        "50GB NVMe SSD Storage",
        "Unlimited Bandwidth",
        "20 Email Accounts",
        "20 MySQL Databases",
        "Free SSL Certificate",
        "Free Domain (.com.ng)",
        "LiteSpeed + LSCache",
        "Daily Backups",
        "Priority Support",
        "Free Website Migration"
      ],
      isPopular: true,
      ctaLink: "https://app.venihost.com.ng/cart.php?pid=2"
    },
    {
      name: "Business Plan",
      price: "₦7,500",
      period: "mo",
      description: "For high-traffic & enterprise sites",
      features: [
        "Unlimited Websites",
        "Unlimited NVMe SSD Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Unlimited MySQL Databases",
        "Free SSL Certificate",
        "Free Domain (.com)",
        "LiteSpeed + LSCache",
        "Daily Backups (Offsite)",
        "24/7 VIP Priority Support",
        "Free Website Migration",
        "Dedicated IP (Optional)"
      ],
      ctaLink: "https://app.venihost.com.ng/cart.php?pid=3"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <SEO 
        title="Fast, Secure & Reliable Web Hosting in Nigeria"
        description="Launch your website with Venihost. Lightning-fast speeds, 24/7 support, and unbeatable security. Shared, VPS, Cloud, and Dedicated Servers starting from ₦1,500/mo."
        keywords="web hosting nigeria, shared hosting, vps hosting, cloud hosting, dedicated servers, domain registration, venihost"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Background Pattern Image */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <OptimizedImage 
            src="/data-center-engineer-leverages-artificial-intelligence-visualization-tools.jpg" 
            alt="Background Network" 
            className="object-cover" 
            priority={true}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                New: NVMe SSD Storage Now Available
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-primary leading-tight mb-6">
                Fast, Secure & <span className="text-secondary">Reliable</span> Web Hosting
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0">
                Launch your website today with Venihost. Experience lightning-fast speeds, 24/7 support, and unbeatable security for your online presence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a 
                  href="https://app.venihost.com.ng/cart.php?gid=shared-hosting" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-secondary text-white rounded-full font-bold text-lg shadow-xl shadow-secondary/20 hover:bg-secondary/90 transition-all hover:scale-105"
                >
                  Get Started Now
                </a>
                <a 
                  href="/pricing" 
                  className="w-full sm:w-auto px-8 py-4 bg-white text-primary border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all"
                >
                  View All Plans
                </a>
              </div>
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale">
                <OptimizedImage src="/partners/c-panel-logo-2165753515.png" alt="cPanel" className="w-auto h-10" />
                <OptimizedImage src="/partners/Cloudflare-Logo.wine-3661517406.png" alt="Cloudflare" className="w-auto h-10" />
                <OptimizedImage src="/partners/paystack-logo-vector-1389109400.png" alt="Paystack" className="w-auto h-10" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 relative"
            >
              <div className="relative z-10 glass-card rounded-[2rem] p-4 shadow-2xl">
                <OptimizedImage 
                  src="/2041337552329248768.png" 
                  alt="Hosting Dashboard" 
                  className="rounded-2xl shadow-lg"
                  priority={true}
                />
              </div>
              
              {/* Added Hero PNG Illustration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -top-12 -left-12 w-48 h-48 z-0 opacity-40 pointer-events-none"
              >
                <OptimizedImage 
                  src="/2041339475967086592.png" 
                  alt="Server Illustration" 
                  className="object-contain"
                />
              </motion.div>

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-center leading-tight shadow-xl z-20 rotate-12">
                FROM<br/>₦1,500/mo
              </div>
              
              {/* Floating Elements for "Pop" */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Uptime</div>
                  <div className="text-lg font-bold text-primary">99.9% Guaranteed</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domain Search Section */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <OptimizedImage src="/data-center-programmer-uses-node-tree-software-identify-equipment-issues.jpg" alt="World Map" className="object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <form 
            action="https://app.venihost.com.ng/cart.php?a=add&domain=register" 
            method="post" 
            target="_blank"
            className="max-w-4xl mx-auto bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2"
          >
            <input 
              type="text" 
              name="query"
              placeholder="Search for your perfect domain name..." 
              className="flex-grow px-6 py-4 rounded-xl text-lg focus:outline-none"
              required
            />
            <button 
              type="submit"
              className="bg-secondary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all"
            >
              Search
            </button>
          </form>
          <div className="flex flex-wrap justify-center gap-8 mt-8 text-white/60 font-medium">
            <span>.com - ₦12,000</span>
            <span>.net - ₦14,500</span>
            <span>.org - ₦13,000</span>
            <span>.ng - ₦5,000</span>
            <span>.com.ng - ₦1,500</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-6">Why Choose Venihost?</h2>
            <p className="text-lg text-slate-600">
              We provide everything you need to build, manage, and grow your online presence with ease and confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </div>

          {/* Trust Badges Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-slate-100"
          >
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Certified Security & Reliability</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <div className="h-12 flex items-center">
                <OptimizedImage src="/partners/c-panel-logo-2165753515.png" alt="cPanel" className="h-full w-auto object-contain" />
              </div>
              <div className="h-12 flex items-center">
                <OptimizedImage src="/partners/Cloudflare-Logo.wine-3661517406.png" alt="Cloudflare" className="h-full w-auto object-contain" />
              </div>
              <div className="h-12 flex items-center">
                <OptimizedImage src="/partners/Flutterwave-Logo-443786680.jpg" alt="Flutterwave" className="h-full w-auto object-contain" />
              </div>
              <div className="h-12 flex items-center">
                <OptimizedImage src="/partners/paystack-logo-vector-1389109400.png" alt="Paystack" className="h-full w-auto object-contain" />
              </div>
              <div className="h-12 flex items-center">
                <OptimizedImage src="/partners/Google-logo-2015-1472812582.png" alt="Google" className="h-full w-auto object-contain" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <PartnerCarousel />

      {/* Products Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-primary mb-6">Our Hosting Solutions</h2>
              <p className="text-lg text-slate-600">
                From simple blogs to complex enterprise applications, we have the perfect hosting plan for your needs.
              </p>
            </div>
            <a href="/pricing" className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Products <ArrowRight size={20} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 group overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <OptimizedImage src={product.image} alt={product.title} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <product.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{product.title}</h3>
                  <p className="text-slate-500 mb-6 text-sm">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase">Starting at</span>
                      <div className="text-xl font-extrabold text-primary">{product.price}<span className="text-sm font-normal text-slate-400">/mo</span></div>
                    </div>
                    <a href={product.link} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all">
                      <ArrowRight size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-6">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-600">
              No hidden fees. No surprises. Choose the plan that works best for you and your budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} delay={index * 0.1} />
            ))}
          </div>
          
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-primary mb-4">Detailed Plan Comparison</h3>
              <p className="text-slate-600">Compare every technical detail to find your perfect fit.</p>
            </div>
            <PricingComparisonTable />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-6">Trusted by Thousands</h2>
            <p className="text-lg text-slate-600">
              See what our customers have to say about their experience with Venihost.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-secondary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-secondary/30">
            <div className="absolute inset-0 opacity-20">
              <OptimizedImage src="/african-american-engineer-inspecting-interlinked-computers-creating-server-network-high-tech-facility-using-parallel-computing-perform-complex-calculations-process-large-amounts-data.jpg" alt="CTA Background" className="object-cover" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Ready to Launch Your Website?</h2>
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join thousands of happy customers and experience the best hosting service in the industry.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="https://app.venihost.com.ng/cart.php?gid=shared-hosting" 
                  className="w-full sm:w-auto px-10 py-5 bg-white text-secondary rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-all"
                >
                  Get Started Today
                </a>
                <a 
                  href="/contact" 
                  className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-all"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />
      <PromoPopup />
    </div>
  );
};

export default Home;
