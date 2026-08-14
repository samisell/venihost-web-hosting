import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, ArrowRight, Copy, Check, MessageSquare, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const TWENTY_MINUTES_MS = 20 * 60 * 1000; // 20 minutes (1,200,000 ms)
const SESSION_START_KEY = 'venihost_session_start_time';
const POPUP_DISMISSED_KEY = 'venihost_promo_20min_dismissed';

const PromoPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check if user already dismissed the 20-minute popup in this session
    if (sessionStorage.getItem(POPUP_DISMISSED_KEY) === 'true') {
      return;
    }

    // Retrieve or initialize session start timestamp
    let startTime = parseInt(sessionStorage.getItem(SESSION_START_KEY) || '0', 10);
    const now = Date.now();

    if (!startTime || isNaN(startTime) || startTime > now) {
      startTime = now;
      sessionStorage.setItem(SESSION_START_KEY, startTime.toString());
    }

    const elapsed = now - startTime;
    const remaining = Math.max(0, TWENTY_MINUTES_MS - elapsed);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, remaining);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem(POPUP_DISMISSED_KEY, 'true');
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('SAVE20NOW');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          {/* Animated Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg overflow-hidden bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800"
            role="dialog"
            aria-modal="true"
          >
            {/* Header Accent Glow */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-secondary via-amber-500 to-blue-600" />

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              aria-label="Close promotion popup"
              className="absolute top-5 right-5 z-10 p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-6 sm:p-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold mb-4">
                <Clock size={13} className="animate-spin text-secondary" style={{ animationDuration: '6s' }} />
                <span>Special 20-Minute Visitor Offer</span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary dark:text-white tracking-tight mb-3">
                Still Looking for the Right Plan?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Thank you for exploring Venihost! Take advantage of an exclusive <strong className="text-secondary font-bold">20% discount</strong> on your first year of Web Hosting, cPanel, or VPS infrastructure.
              </p>

              {/* Promo Code Box */}
              <div className="bg-slate-50 dark:bg-slate-800/80 border border-dashed border-secondary/40 rounded-2xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Your Coupon Code</div>
                  <div className="text-xl font-mono font-black text-primary dark:text-white tracking-widest">
                    SAVE20NOW
                  </div>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="w-full sm:w-auto px-4 py-2.5 bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-primary dark:text-white border border-slate-200 dark:border-slate-600 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/shared-hosting"
                  onClick={handleDismiss}
                  className="w-full sm:flex-1 py-3.5 px-6 bg-secondary hover:bg-secondary/90 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-secondary/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles size={16} />
                  <span>Claim 20% Discount</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="https://wa.me/2347069904262?text=Hello%20Venihost%20I%20have%20been%20browsing%20your%20plans%20and%20need%20help%20choosing%20the%20best%20hosting."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleDismiss}
                  className="w-full sm:w-auto py-3.5 px-5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare size={16} />
                  <span>Talk to Expert</span>
                </a>
              </div>

              {/* Footer dismiss note */}
              <div className="text-center mt-4">
                <button
                  onClick={handleDismiss}
                  className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors underline cursor-pointer"
                >
                  No thanks, I'll continue browsing
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PromoPopup;
