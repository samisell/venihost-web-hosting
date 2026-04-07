import React from 'react';
import { motion } from 'motion/react';
import { Settings, BarChart, Users, ShoppingCart, Briefcase, Shield, CheckCircle2, ArrowRight, Package, Truck } from 'lucide-react';
import SEO from '@/src/components/SEO';
import OptimizedImage from '@/src/components/OptimizedImage';
import ProductRequestForm from '@/src/components/ProductRequestForm';

const OdooERP = () => {
  const modules = [
    {
      title: "CRM & Sales",
      description: "Manage your sales pipeline, automate follow-ups, and generate professional quotes.",
      icon: Users
    },
    {
      title: "Inventory & Warehouse",
      description: "Track stock levels, manage multiple warehouses, and optimize your supply chain.",
      icon: Package
    },
    {
      title: "Accounting & Finance",
      description: "Full-featured accounting with automated invoicing, bank sync, and financial reporting.",
      icon: BarChart
    },
    {
      title: "Manufacturing (MRP)",
      description: "Plan production, manage bills of materials, and track work orders in real-time.",
      icon: Settings
    },
    {
      title: "E-Commerce Integration",
      description: "Seamlessly connect your online store with your inventory and sales systems.",
      icon: ShoppingCart
    },
    {
      title: "Project Management",
      description: "Track project progress, manage tasks, and optimize resource allocation.",
      icon: Briefcase
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Odoo ERP Deployment - Venihost Solutions" 
        description="Scale your business with expert Odoo ERP deployment and customization. Streamline all your business processes in one unified platform."
      />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <OptimizedImage 
            src="/african-american-engineer-inspecting-interlinked-computers-creating-server-network-high-tech-facility-using-parallel-computing-perform-complex-calculations-process-large-amounts-data.jpg" 
            alt="Enterprise Solutions Background" 
            className="object-cover" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-bold mb-6 uppercase tracking-wider">
                Enterprise Solutions
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                Expert <span className="text-secondary">Odoo ERP</span> Deployment
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Transform your business with a unified platform that integrates all your operations. From CRM to Manufacturing, we help you deploy and customize Odoo for maximum efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#request-form" className="inline-block px-8 py-4 bg-secondary text-white rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-all text-center">
                  Consult an Expert
                </a>
                <a href="#request-form" className="inline-block px-8 py-4 bg-white/10 text-white rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all text-center">
                  View Modules
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold text-primary mb-6">A Unified Platform for Your Entire Business</h2>
            <p className="text-lg text-slate-600">
              Odoo offers thousands of integrated modules. We help you select, configure, and customize the ones that matter most to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                  <module.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{module.title}</h3>
                <p className="text-slate-600 leading-relaxed">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Process */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-[3rem] blur-2xl" />
                <OptimizedImage 
                  src="/smiling-engineer-using-laptop-data-center-oversee-hardware.jpg" 
                  alt="Odoo ERP Implementation" 
                  className="relative rounded-[2rem] shadow-2xl"
                />
              </div>
              <div className="mt-8 p-6 bg-white rounded-3xl border border-secondary/20 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <Shield size={40} className="text-secondary" />
                </div>
                <h4 className="text-primary font-bold mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  Note for Stakeholders
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Venihost specializes in the deployment and customization of the <strong>Odoo Community Version</strong>. This allows businesses to benefit from a powerful, open-source business suite with zero licensing fees, while focusing investment on high-value customizations and support.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-primary mb-8 leading-tight">
                Our Proven Deployment Methodology
              </h2>
              <div className="space-y-6">
                {[
                  "In-depth business process analysis and requirement gathering",
                  "Custom module development and workflow configuration",
                  "Seamless data migration from legacy systems",
                  "Comprehensive user training and documentation",
                  "Ongoing technical support and maintenance",
                  "Regular system audits and performance optimization"
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
                Learn more about our process <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-24 bg-slate-50" id="request-form">
        <div className="container mx-auto px-4 max-w-4xl">
          <ProductRequestForm productName="Odoo ERP Deployment by Venihost" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-secondary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-secondary/30">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Ready to Scale Your Business?</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Unlock the full potential of your enterprise with a customized Odoo ERP deployment.
            </p>
            <a href="#request-form" className="inline-block px-10 py-5 bg-white text-secondary rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-all">
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OdooERP;
