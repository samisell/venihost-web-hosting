import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Mail, Phone, MapPin, Send, MessageSquare, Globe } from 'lucide-react';
import OptimizedImage from '@/src/components/OptimizedImage';

import SEO from '@/src/components/SEO';

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Venihost",
      "url": "https://ais-dev-ezycmo3ejzvw32hzuwnebg-203073481385.europe-west1.run.app",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+234-811-685-6186",
        "contactType": "customer service",
        "email": "hello@venihost.com.ng",
        "availableLanguage": ["English"]
      }
    }
  };

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! Our team will get back to you shortly.');
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Contact Us | 24/7 Support | Venihost"
        description="Get in touch with Venihost. Our support team is available 24/7 to help you with your web hosting, domains, and server needs. Contact us today!"
        keywords="contact venihost, hosting support nigeria, web hosting contact, customer service hosting"
        structuredData={structuredData}
      />
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage 
            src="/smiling-engineer-using-laptop-data-center-oversee-hardware.jpg" 
            alt="Contact Hero" 
            className="object-cover" 
            priority={true}
          />
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        {/* Added Hero PNG Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute left-0 top-0 w-full h-full pointer-events-none hidden lg:block"
        >
          <OptimizedImage 
            src="/2041339475967086592.png" 
            alt="Contact Illustration" 
            className="object-contain"
          />
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions? Our team is here to help you 24/7. Reach out to us via any of the channels below.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-primary mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    { title: "Our Office", val: "Tech Hub, Lagos, Nigeria", icon: MapPin },
                    { title: "Phone Number", val: "+234 811 685 6186", icon: Phone },
                    { title: "WhatsApp", val: "+234 811 685 6146", icon: MessageSquare },
                    { title: "Email Address", val: "hello@venihost.com.ng", icon: Mail }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                        <p className="text-slate-600">{item.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-primary mb-4">Support Hours</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex justify-between"><span>Technical Support:</span> <span className="font-bold text-primary">24/7</span></li>
                  <li className="flex justify-between"><span>Sales Inquiries:</span> <span className="font-bold text-primary">9am - 6pm</span></li>
                  <li className="flex justify-between"><span>Billing Dept:</span> <span className="font-bold text-primary">9am - 5pm</span></li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100">
                <h2 className="text-3xl font-extrabold text-primary mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        placeholder="John Doe" 
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary ml-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        placeholder="john@example.com" 
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">Subject</label>
                    <input 
                      type="text" 
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      placeholder="How can we help you?" 
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">Message</label>
                    <textarea 
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      rows={6}
                      placeholder="Write your message here..." 
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full md:w-auto px-12 py-5 bg-secondary text-white rounded-full font-bold text-lg shadow-xl shadow-secondary/20 hover:bg-secondary/90 transition-all flex items-center justify-center gap-3"
                  >
                    Send Message <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-slate-200 relative overflow-hidden">
        <img 
          src="/data-center-engineer-leverages-artificial-intelligence-visualization-tools.jpg" 
          alt="Map" 
          className="w-full h-full object-cover grayscale opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 text-center">
            <MapPin className="text-secondary mx-auto mb-2" size={32} />
            <h4 className="font-bold text-primary">Venihost Headquarters</h4>
            <p className="text-sm text-slate-500">Visit us anytime!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
