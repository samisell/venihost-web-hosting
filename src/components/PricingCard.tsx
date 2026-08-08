import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { fetchProducts } from '@/src/lib/whmcs';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaLink: string;
  delay?: number;
  whmcsPid?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  period,
  description,
  features,
  isPopular,
  ctaLink,
  delay = 0,
  whmcsPid
}) => {
  const [livePrice, setLivePrice] = useState<string | null>(null);
  const [liveName, setLiveName] = useState<string | null>(null);
  const [liveLink, setLiveLink] = useState<string>(ctaLink);

  useEffect(() => {
    if (whmcsPid) {
      // Direct link to the WHMCS cart
      setLiveLink(`https://app.venihost.com.ng/cart.php?a=add&pid=${whmcsPid}`);
      
      // Fetch dynamic pricing
      fetchProducts().then((products) => {
        const product = products.find((p: any) => p.pid == whmcsPid);
        if (product) {
          setLiveName(product.name);
          // Prefer NGN, fallback to USD if available
          const priceObj = product.pricing?.NGN || product.pricing?.USD;
          if (priceObj && priceObj.monthly) {
            setLivePrice(priceObj.monthly);
          }
        }
      });
    }
  }, [whmcsPid]);

  const displayPrice = livePrice || price;
  const displayName = liveName || name;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        "relative flex flex-col p-8 rounded-3xl transition-all duration-300 hover:scale-105",
        isPopular 
          ? "bg-primary text-white shadow-2xl scale-105 z-10 border-4 border-secondary" 
          : "bg-white text-primary border border-slate-100 shadow-xl"
      )}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className={cn("text-xl font-bold mb-2", isPopular ? "text-white" : "text-primary")}>{displayName}</h3>
        <p className={cn("text-sm", isPopular ? "text-slate-400" : "text-slate-500")}>{description}</p>
      </div>

      <div className="mb-8 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold">{displayPrice}</span>
        <span className={cn("text-sm font-medium", isPopular ? "text-slate-400" : "text-slate-500")}>/{period}</span>
      </div>

      <ul className="flex flex-col gap-4 mb-10 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <div className={cn(
              "shrink-0 w-5 h-5 rounded-full flex items-center justify-center",
              isPopular ? "bg-secondary text-white" : "bg-secondary/10 text-secondary"
            )}>
              <Check size={12} strokeWidth={3} />
            </div>
            <span className={isPopular ? "text-slate-200" : "text-slate-600"}>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "w-full py-4 rounded-xl font-bold text-center transition-all shadow-lg",
          isPopular 
            ? "bg-secondary text-white hover:bg-secondary/90 shadow-secondary/20" 
            : "bg-primary text-white hover:bg-primary/90 shadow-primary/10"
        )}
      >
        Order Now
      </a>
    </motion.div>
  );
};

export default PricingCard;
