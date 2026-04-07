import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, BarChart, Users, Package, Shield, CheckCircle2, ArrowRight, Monitor, Smartphone, LayoutGrid } from 'lucide-react';
import SEO from '@/src/components/SEO';
import OptimizedImage from '@/src/components/OptimizedImage';
import ProductRequestForm from '@/src/components/ProductRequestForm';

const POSSoftware = () => {
  const features = [
    {
      title: "Fast Checkout",
      description: "Intuitive interface designed for speed, reducing customer wait times at the counter.",
      icon: ShoppingCart
    },
    {
      title: "Inventory Sync",
      description: "Real-time stock tracking across all your store locations and online channels.",
      icon: Package
    },
    {
      title: "Sales Analytics",
      description: "Comprehensive reports on top-selling products, peak hours, and staff performance.",
      icon: BarChart
    },
    {
      title: "Customer Loyalty",
      description: "Integrated rewards programs and customer profiles to drive repeat business.",
      icon: Users
    },
    {
      title: "Multi-Device Support",
      description: "Works seamlessly on desktops, tablets, and mobile devices for flexible selling.",
      icon: LayoutGrid
    },
    {
      title: "Offline Mode",
      description: "Continue making sales even when your internet connection is down.",
      icon: Shield
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="POS Software - Venihost Solutions" 
        description="Modernize your retail or restaurant business with our advanced POS software. Fast checkouts, inventory tracking, and sales insights."
      />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <OptimizedImage src="/servers-delivering-web-content.jpg" alt="Background" className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-bold mb-6 uppercase tracking-wider">
                Retail Solutions
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                Modern <span className="text-secondary">POS Software</span> for Your Store
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                The all-in-one retail management system that helps you sell more, manage better, and grow faster. From inventory to customer loyalty, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#request-form" className="inline-block px-8 py-4 bg-secondary text-white rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-all text-center">
                  Get Started Now
                </a>
                <a href="#request-form" className="inline-block px-8 py-4 bg-white/10 text-white rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all text-center">
                  Request a Demo
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold text-primary mb-6">Built for Every Type of Retail</h2>
            <p className="text-lg text-slate-600">
              Whether you run a single boutique or a chain of restaurants, our POS software adapts to your unique business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-[3rem] blur-2xl" />
                <OptimizedImage 
                  src="/photo_5951573248094964868_y.jpg" 
                  alt="Retail Store" 
                  className="relative rounded-[2rem] shadow-2xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-primary mb-8 leading-tight">
                Powerful Features for Growth
              </h2>
              <div className="space-y-6">
                {[
                  "Seamless integration with popular payment gateways",
                  "Automated inventory reordering and supplier management",
                  "Employee shift tracking and performance monitoring",
                  "Customizable receipts and digital billing options",
                  "Integrated e-commerce for omnichannel selling",
                  "Advanced data security and automated cloud backups"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-lg text-slate-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
              <button className="mt-12 inline-flex items-center gap-2 text-secondary font-bold text-lg hover:gap-4 transition-all">
                See all features <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-24 bg-slate-50" id="request-form">
        <div className="container mx-auto px-4 max-w-4xl">
          <ProductRequestForm productName="POS Software by Venihost" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-secondary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-secondary/30">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Ready to Modernize Your Store?</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Join thousands of retailers who have transformed their business with Venihost POS.
            </p>
            <a href="#request-form" className="inline-block px-10 py-5 bg-white text-secondary rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-all">
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default POSSoftware;
