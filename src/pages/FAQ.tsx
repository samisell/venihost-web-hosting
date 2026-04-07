import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import OptimizedImage from '@/src/components/OptimizedImage';

import SEO from '@/src/components/SEO';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is web hosting?",
      a: "Web hosting is a service that allows organizations and individuals to post a website or web page onto the Internet. A web host, or web hosting service provider, is a business that provides the technologies and services needed for the website or webpage to be viewed in the Internet."
    },
    {
      q: "How do I choose the right hosting plan?",
      a: "The right plan depends on your website's needs. For a small blog or personal site, Shared Hosting is usually sufficient. For growing businesses, VPS or Cloud Hosting offers more resources and scalability. Large enterprises often require Dedicated Servers for maximum power and control."
    },
    {
      q: "Do you offer free domain registration?",
      a: "Yes, we offer free domain registration for the first year on our Professional and Business shared hosting plans when you choose an annual billing cycle."
    },
    {
      q: "Can I migrate my existing website to Venihost?",
      a: "Absolutely! We offer free website migration for all new customers. Our technical team will handle the entire process to ensure a smooth transition with zero downtime."
    },
    {
      q: "What kind of support do you provide?",
      a: "We provide 24/7 technical support via live chat, email, and support tickets. Our team of experts is always available to help you with any issues or questions you may have."
    },
    {
      q: "Is my data secure with Venihost?",
      a: "Yes, security is our top priority. We provide free SSL certificates, daily backups, real-time malware scanning, and advanced DDoS protection on all our hosting plans."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Frequently Asked Questions | Web Hosting Help"
        description="Find answers to common questions about web hosting, domain registration, and our services. Everything you need to know to get started with Venihost."
        keywords="hosting faq, web hosting help, domain registration questions, venihost support"
        structuredData={structuredData}
      />
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <OptimizedImage src="/servers-delivering-web-content.jpg" alt="FAQ Hero" className="object-cover" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Find answers to common questions about our hosting services and features.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-12">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
              <input 
                type="text" 
                placeholder="Search for questions..." 
                className="w-full pl-16 pr-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all text-lg"
              />
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                  <button 
                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-lg font-bold text-primary">{faq.q}</span>
                    {activeIndex === i ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-slate-400" />}
                  </button>
                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-slate-50 p-10 rounded-3xl text-center border border-slate-100">
              <h3 className="text-2xl font-bold text-primary mb-4">Still have questions?</h3>
              <p className="text-slate-600 mb-8">Our support team is available 24/7 to help you with anything you need.</p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-full font-bold shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
