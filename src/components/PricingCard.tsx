import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  isPopular?: boolean;
  ctaLink?: string;
  ctaText?: string;
  delay?: number;
  vCPU?: string;
  ram?: string;
  disk?: string;
  bandwidth?: string;
  originalPrice?: string;
  savePercent?: string | number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  period = 'mo',
  description,
  features,
  isPopular = false,
  ctaLink = '#',
  ctaText = 'Get Started',
  delay = 0,
  vCPU,
  ram,
  disk,
  bandwidth,
  originalPrice,
  savePercent,
}) => {
  const isExternal = ctaLink.startsWith('http');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        'relative flex flex-col rounded-3xl p-8 transition-all duration-300',
        isPopular
          ? 'bg-primary text-white shadow-2xl shadow-primary/20 ring-2 ring-secondary scale-105 z-10'
          : 'bg-white text-primary border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1'
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-secondary/30">
          <Sparkles size={14} />
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3
          className={cn(
            'text-2xl font-bold mb-2',
            isPopular ? 'text-white' : 'text-primary'
          )}
        >
          {name}
        </h3>
        {description && (
          <p
            className={cn(
              'text-sm min-h-[40px]',
              isPopular ? 'text-slate-300' : 'text-slate-500'
            )}
          >
            {description}
          </p>
        )}
      </div>

      <div className="mb-8 pb-6 border-b border-slate-100/20">
        {originalPrice && (
          <div className="text-sm line-through text-slate-400 mb-1">
            {originalPrice}
            {savePercent && (
              <span className="ml-2 text-xs bg-emerald-500/20 text-emerald-500 font-bold px-2 py-0.5 rounded-full">
                Save {savePercent}%
              </span>
            )}
          </div>
        )}
        <div className="flex items-baseline gap-1">
          <span
            className={cn(
              'text-4xl font-extrabold tracking-tight',
              isPopular ? 'text-white' : 'text-primary'
            )}
          >
            {price}
          </span>
          {period && (
            <span
              className={cn(
                'text-sm font-medium',
                isPopular ? 'text-slate-400' : 'text-slate-500'
              )}
            >
              /{period}
            </span>
          )}
        </div>
      </div>

      {/* Hardware Specs Grid (if VPS or Server) */}
      {(vCPU || ram || disk || bandwidth) && (
        <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-2xl bg-slate-500/10 text-xs font-medium">
          {vCPU && (
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">
                vCPU
              </span>
              <span className={isPopular ? 'text-white' : 'text-slate-800'}>
                {vCPU}
              </span>
            </div>
          )}
          {ram && (
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">
                RAM
              </span>
              <span className={isPopular ? 'text-white' : 'text-slate-800'}>
                {ram}
              </span>
            </div>
          )}
          {disk && (
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">
                Disk
              </span>
              <span className={isPopular ? 'text-white' : 'text-slate-800'}>
                {disk}
              </span>
            </div>
          )}
          {bandwidth && (
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">
                Bandwidth
              </span>
              <span className={isPopular ? 'text-white' : 'text-slate-800'}>
                {bandwidth}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Feature list */}
      <div className="flex-1 mb-8">
        <p
          className={cn(
            'text-xs font-bold uppercase tracking-wider mb-4',
            isPopular ? 'text-slate-400' : 'text-slate-400'
          )}
        >
          Included Features
        </p>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <div
                className={cn(
                  'w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5',
                  isPopular
                    ? 'bg-secondary text-white'
                    : 'bg-secondary/10 text-secondary'
                )}
              >
                <Check size={12} strokeWidth={3} />
              </div>
              <span
                className={isPopular ? 'text-slate-200' : 'text-slate-600'}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={ctaLink}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={cn(
          'w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 mt-auto',
          isPopular
            ? 'bg-secondary text-white hover:bg-secondary/90 shadow-xl shadow-secondary/25 hover:gap-3'
            : 'bg-primary text-white hover:bg-secondary shadow-lg hover:shadow-xl hover:gap-3'
        )}
      >
        <span>{ctaText}</span>
        <ArrowRight size={18} />
      </a>
    </motion.div>
  );
};

export default PricingCard;
