import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, Settings, Check, ChevronRight } from 'lucide-react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true };
    saveConsent(allAccepted);
  };

  const handleRejectAll = () => {
    const allRejected = { essential: true, analytics: false, marketing: false };
    saveConsent(allRejected);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    setIsVisible(false);
    // Here you would typically initialize your tracking scripts based on prefs
    console.log('Saved cookie preferences:', prefs);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
              {!showSettings ? (
                <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shrink-0">
                    <Shield size={32} />
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-xl font-bold text-primary mb-2">We value your privacy</h3>
                    <p className="text-slate-600 text-sm md:text-base">
                      We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                      <a href="/privacy-policy" className="text-secondary hover:underline ml-1">Read our Privacy Policy</a>.
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-end gap-3 shrink-0">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-6 py-3 text-slate-600 font-semibold hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <Settings size={18} />
                      <span>Settings</span>
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-all"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-8 py-3 bg-secondary text-white rounded-xl font-bold hover:bg-secondary/90 shadow-lg shadow-secondary/20 transition-all"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-primary">Cookie Preferences</h3>
                    <button 
                      onClick={() => setShowSettings(false)}
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                      <X size={24} className="text-slate-400" />
                    </button>
                  </div>

                  <div className="space-y-6 mb-8">
                    {/* Essential */}
                    <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div>
                        <h4 className="font-bold text-primary flex items-center gap-2">
                          Essential Cookies
                          <span className="text-[10px] uppercase tracking-wider bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">Required</span>
                        </h4>
                        <p className="text-sm text-slate-500 mt-1">
                          These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
                        </p>
                      </div>
                      <div className="w-12 h-6 bg-secondary rounded-full relative opacity-50 cursor-not-allowed">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>

                    {/* Analytics */}
                    <div className="flex items-start justify-between gap-4 p-4 rounded-2xl border border-slate-100 hover:border-secondary/30 transition-colors">
                      <div>
                        <h4 className="font-bold text-primary">Analytics Cookies</h4>
                        <p className="text-sm text-slate-500 mt-1">
                          These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                        </p>
                      </div>
                      <button
                        onClick={() => togglePreference('analytics')}
                        className={`w-12 h-6 rounded-full relative transition-colors ${preferences.analytics ? 'bg-secondary' : 'bg-slate-300'}`}
                      >
                        <motion.div
                          animate={{ x: preferences.analytics ? 24 : 4 }}
                          className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
                        />
                      </button>
                    </div>

                    {/* Marketing */}
                    <div className="flex items-start justify-between gap-4 p-4 rounded-2xl border border-slate-100 hover:border-secondary/30 transition-colors">
                      <div>
                        <h4 className="font-bold text-primary">Marketing Cookies</h4>
                        <p className="text-sm text-slate-500 mt-1">
                          These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
                        </p>
                      </div>
                      <button
                        onClick={() => togglePreference('marketing')}
                        className={`w-12 h-6 rounded-full relative transition-colors ${preferences.marketing ? 'bg-secondary' : 'bg-slate-300'}`}
                      >
                        <motion.div
                          animate={{ x: preferences.marketing ? 24 : 4 }}
                          className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-slate-100">
                    <button
                      onClick={() => setShowSettings(false)}
                      className="text-slate-500 font-semibold hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <ChevronRight size={18} className="rotate-180" />
                      Back
                    </button>
                    <div className="flex gap-3 w-full md:w-auto">
                      <button
                        onClick={handleRejectAll}
                        className="flex-1 md:flex-none px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-all"
                      >
                        Reject All
                      </button>
                      <button
                        onClick={handleSavePreferences}
                        className="flex-1 md:flex-none px-8 py-3 bg-secondary text-white rounded-xl font-bold hover:bg-secondary/90 shadow-lg shadow-secondary/20 transition-all"
                      >
                        Save Preferences
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
