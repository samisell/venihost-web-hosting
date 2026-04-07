import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300000); // 5 minutes

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-[60] w-full max-w-sm"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-secondary/10 transition-colors" />
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-primary transition-colors p-1"
            >
              <X size={20} />
            </button>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <Zap size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">Special Offer!</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Get started with our high-performance Shared Hosting today and save big on your first year!
                </p>
                <Link 
                  to="/shared-hosting"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-xl font-bold text-sm shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all hover:scale-105 active:scale-95"
                >
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromoPopup;
