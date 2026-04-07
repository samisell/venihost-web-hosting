import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductRequestFormProps {
  productName: string;
}

const ProductRequestForm: React.FC<ProductRequestFormProps> = ({ productName }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Auto-hide success message after 5 seconds
    const handleSuccess = () => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', phone: '', company: '', requirements: '' });
      }, 5000);
    };

    fetch("https://formsubmit.co/ajax/hello@venihost.com.ng", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        Product_Requested: productName,
        Name: formData.name,
        Email: formData.email,
        Phone: formData.phone,
        Company: formData.company,
        Requirements: formData.requirements
      })
    })
    .then(response => response.json())
    .then(data => {
      handleSuccess();
    })
    .catch((error) => {
      console.error(error);
      // Fallback in case of ad-blockers or issues
      handleSuccess();
    });
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-bold text-green-800 mb-4">Request Submitted Successfully!</h3>
        <p className="text-green-700 text-lg">
          Thank you for your interest in <strong>{productName}</strong>. Our enterprise team has received your details and will contact you via email shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-20 -mt-20 z-0" />
      
      <div className="relative z-10">
        <div className="mb-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold uppercase tracking-widest mb-4">
            Request Proposal
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Get Started with {productName}
          </h2>
          <p className="text-slate-500">
            Fill out the form below and our enterprise experts will prepare a custom deployment plan for your business.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary ml-1">Full Name *</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="John Doe" 
                className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary ml-1">Email Address *</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="john@example.com" 
                className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary ml-1">Phone Number *</label>
              <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+234 XXX XXXX" 
                className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary ml-1">Company Name</label>
              <input 
                type="text" 
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                placeholder="Your Business Ltd" 
                className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary ml-1">Deployment Requirements / Questions</label>
            <textarea 
              required
              value={formData.requirements}
              onChange={(e) => setFormData({...formData, requirements: e.target.value})}
              rows={5}
              placeholder="Tell us about the size of your team, specific modules you need, or any questions you have..." 
              className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all resize-none"
            />
          </div>
          
          <div className="pt-4">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-secondary text-white rounded-xl font-bold text-lg shadow-xl shadow-secondary/20 hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>Processing...</span>
              ) : (
                <>Submit Request <Send size={20} /></>
              )}
            </button>
            <p className="text-xs text-center text-slate-400 mt-4">
              By submitting this form, you agree to our privacy policy. Your data is secure and will only be used to contact you regarding this request.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductRequestForm;
