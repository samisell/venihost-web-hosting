import React from 'react';
import { motion } from 'motion/react';
import OptimizedImage from '@/src/components/OptimizedImage';

const partners = [
  { name: 'cPanel', logo: '/cPanel-logo.png' },
  { name: 'Cloudflare', logo: '/Cloudflare-Logo.png' },
  { name: 'Paystack', logo: '/Paystack-Logo.png' },
  { name: 'Flutterwave', logo: '/Flutterwave-Logo.png' },
  { name: 'Google', logo: '/Google-Logo.png' },
];

const PartnerCarousel = () => {
  // Duplicate the partners array to create a seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Our Technology Partners</p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1920] }} // Adjust based on content width
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={index} 
              className="mx-12 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="h-12 w-32 relative">
                <OptimizedImage 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerCarousel;
