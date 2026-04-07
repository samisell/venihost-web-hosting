import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = import.meta.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Google Analytics 4 (GA4) Tracker Component
 * Automatically tracks page views on route changes.
 * Uses NEXT_PUBLIC_GOOGLE_ANALYTICS_ID from environment variables.
 */
const GoogleAnalytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    // Load gtag script if not already present
    if (!window.gtag) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };

      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: location.pathname + location.search
      });
    } else {
        // Just track page view on subsequent route changes
        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: location.pathname + location.search
        });
    }
  }, [location]);

  return null;
};

/**
 * Utility to track custom GA events (conversions, clicks, etc.)
 */
export const trackGAEvent = (eventName: string, params?: object) => {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  } else {
    console.log(`[GA] Event queued: ${eventName}`, params);
  }
};

export default GoogleAnalytics;
