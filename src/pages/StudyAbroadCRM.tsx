import React from 'react';
import { motion } from 'motion/react';
import { Users, GraduationCap, Calendar, FileText, BarChart, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '@/src/components/SEO';
import OptimizedImage from '@/src/components/OptimizedImage';
import ProductRequestForm from '@/src/components/ProductRequestForm';

const StudyAbroadCRM = () => {
  const features = [
    {
      title: "Lead Management",
      description: "Track and manage prospective students from initial inquiry to final enrollment with ease.",
      icon: Users
    },
    {
      title: "Application Tracking",
      description: "Monitor the status of university applications in real-time across multiple destinations.",
      icon: GraduationCap
    },
    {
      title: "Document Vault",
      description: "Securely store and manage student transcripts, passports, and visa documents.",
      icon: FileText
    },
    {
      title: "Appointment Scheduling",
      description: "Integrated calendar for counseling sessions and university representative meetings.",
      icon: Calendar
    },
    {
      title: "Performance Analytics",
      description: "Detailed reports on counselor productivity, conversion rates, and revenue growth.",
      icon: BarChart
    },
    {
      title: "Data Security",
      description: "Enterprise-grade encryption to protect sensitive student and financial information.",
      icon: Shield
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Study Abroad CRM - Venihost Solutions" 
        description="Empower your education consultancy with our specialized Study Abroad CRM. Manage applications, leads, and documents in one place."
      />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <OptimizedImage src="/african-american-engineer-inspecting-interlinked-computers-creating-server-network-high-tech-facility-using-parallel-computing-perform-complex-calculations-process-large-amounts-data.jpg" alt="Background" className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-bold mb-6 uppercase tracking-wider">
                Education Technology
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                The Ultimate CRM for <span className="text-secondary">Study Abroad</span> Agencies
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Streamline your student recruitment process, automate follow-ups, and increase your conversion rates with our all-in-one consultancy management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#request-form" className="inline-block px-8 py-4 bg-secondary text-white rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-all text-center">
                  Request a Demo
                </a>
                <a href="#request-form" className="inline-block px-8 py-4 bg-white/10 text-white rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all text-center">
                  View Pricing
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
            <h2 className="text-4xl font-extrabold text-primary mb-6">Built for Modern Consultancies</h2>
            <p className="text-lg text-slate-600">
              Our CRM is designed specifically for the unique workflows of education consultants and study abroad agencies.
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
                  src="/samisell1.png" 
                  alt="Consultancy" 
                  className="relative rounded-[2rem] shadow-2xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-primary mb-8 leading-tight">
                Why Choose Venihost Study Abroad CRM?
              </h2>
              <div className="space-y-6">
                {[
                  "Centralized student database with 360-degree view",
                  "Automated email and SMS follow-ups",
                  "Multi-branch management for larger agencies",
                  "Partner university portal for direct communication",
                  "Integrated visa processing workflow",
                  "Mobile-friendly dashboard for counselors on the go"
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
                Learn more about our features <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-24 bg-slate-50" id="request-form">
        <div className="container mx-auto px-4 max-w-4xl">
          <ProductRequestForm productName="Study Abroad CRM by Venihost" />
        </div>
      </section>
    </div>
  );
};

export default StudyAbroadCRM;
