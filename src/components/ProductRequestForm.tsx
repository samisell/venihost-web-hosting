import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductRequestFormProps {
  productName: string;
}

const ProductRequestForm: React.FC<ProductRequestFormProps> = ({ productName }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    requirements: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedRequirements = formData.requirements.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPhone || !trimmedRequirements) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          formType: 'demo_request',
          productName,
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          company: formData.company.trim(),
          message: trimmedRequirements,
          sourceUrl: typeof window !== 'undefined' ? window.location.href : ''
        })
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok || !payload.ok) {
        setErrorMessage(
          payload.error || 'Unable to submit your demo request right now. Please try again.'
        );
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', company: '', requirements: '' });
    } catch {
      setIsSubmitting(false);
      setErrorMessage('Network error while submitting your request. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-3xl p-10 md:p-12 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-bold text-green-800 mb-4">Demo Request Submitted!</h3>
        <p className="text-green-700 text-lg max-w-xl mx-auto mb-6">
          Thank you for requesting a demo of <strong>{productName}</strong>. Our admin and enterprise team have been notified via email and will reach out shortly.
        </p>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="px-6 py-3 rounded-xl bg-green-700 text-white font-semibold text-sm hover:bg-green-800 transition-colors cursor-pointer"
        >
          Submit Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-20 -mt-20 z-0" />

      <div className="relative z-10">
        <div className="mb-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold uppercase tracking-widest mb-4">
            Request a Demo
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Schedule Your {productName} Demo
          </h2>
          <p className="text-slate-500">
            Fill out the form below to request a live demo and our enterprise team will follow up with a custom deployment plan.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="demo-name" className="text-sm font-bold text-primary ml-1">
                Full Name *
              </label>
              <input
                id="demo-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="demo-email" className="text-sm font-bold text-primary ml-1">
                Email Address *
              </label>
              <input
                id="demo-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="demo-phone" className="text-sm font-bold text-primary ml-1">
                Phone Number *
              </label>
              <input
                id="demo-phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+234 XXX XXXX"
                className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="demo-company" className="text-sm font-bold text-primary ml-1">
                Company Name
              </label>
              <input
                id="demo-company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Your Business Ltd"
                className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="demo-requirements" className="text-sm font-bold text-primary ml-1">
              Demo Requirements / Questions *
            </label>
            <textarea
              id="demo-requirements"
              required
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              rows={5}
              placeholder="Tell us about your team size, preferred demo topics, or specific modules you would like to see..."
              className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all resize-none"
            />
          </div>

          {errorMessage && (
            <div
              role="alert"
              className="flex items-start gap-3 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm"
            >
              <AlertCircle size={18} className="shrink-0 mt-0.5 text-rose-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-secondary text-white rounded-xl font-bold text-lg shadow-xl shadow-secondary/20 hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? (
                <span>Sending Demo Request...</span>
              ) : (
                <>
                  Request a Demo <Send size={20} />
                </>
              )}
            </button>
            <p className="text-xs text-center text-slate-400 mt-4">
              By submitting this form, you agree to our privacy policy. Your details are sent directly to our team via secure email notification.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductRequestForm;
