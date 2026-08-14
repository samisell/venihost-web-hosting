import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FB_PIXEL_ID = import.meta.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

/**
 * Facebook Pixel Tracker Component
 * Automatically tracks page views on route changes.
 * Supports environment variables for the Pixel ID.
 */
const FacebookPixel: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (!FB_PIXEL_ID) return;

    // Initialize Pixel if not already done
    if (!window.fbq) {
      (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js'
      );

      window.fbq('init', FB_PIXEL_ID);
    }

    // Track PageView on route change
    window.fbq('track', 'PageView');
  }, [location]);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
      />
    </noscript>
  );
};

/**
 * Utility to track custom events from anywhere in the app
 */
export const trackPixelEvent = (event: string, data?: object) => {
  if (window.fbq) {
    window.fbq('track', event, data);
  } else {
    // If pixel not loaded yet, queue it or log for debug
    console.log(`[FB Pixel] Queue event: ${event}`, data);
  }
};

export default FacebookPixel;
