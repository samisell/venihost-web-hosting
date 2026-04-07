import React from 'react';
import { motion } from 'motion/react';
import OptimizedImage from '@/src/components/OptimizedImage';

import SEO from '@/src/components/SEO';

const TermsOfUse = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Terms of Use | Venihost"
        description="Read our terms of use to understand the conditions for using the Venihost website and its content."
        keywords="terms of use, website rules, venihost terms"
      />
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage 
            src="/data-center-engineer-leverages-artificial-intelligence-visualization-tools.jpg" 
            alt="Terms of Use Hero" 
            className="object-cover" 
            priority={true}
          />
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Terms of Use</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Last updated: March 18, 2026. These terms govern your use of our website and its content.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-slate lg:prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">1. Website Use</h2>
            <p className="text-slate-600 mb-8">
              The content of this website is for your general information and use only. It is subject to change without notice. Your use of any information or materials on this website is entirely at your own risk.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-6">2. Intellectual Property</h2>
            <p className="text-slate-600 mb-8">
              This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-6">3. User Conduct</h2>
            <p className="text-slate-600 mb-4">
              When using our website, you agree not to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
              <li>Use the website in any way that causes or may cause damage to the website or impairment of the availability or accessibility of the website.</li>
              <li>Use the website for any unlawful, illegal, fraudulent, or harmful purpose.</li>
              <li>Use the website to copy, store, host, transmit, send, use, publish, or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit, or other malicious computer software.</li>
              <li>Conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction, and data harvesting) on or in relation to our website without our express written consent.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mb-6">4. Disclaimer of Warranties</h2>
            <p className="text-slate-600 mb-8">
              Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-6">5. Links to Other Websites</h2>
            <p className="text-slate-600 mb-8">
              From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
            </p>

            <h2 className="text-3xl font-bold text-primary mb-6">6. Governing Law</h2>
            <p className="text-slate-600 mb-8">
              Your use of this website and any dispute arising out of such use of the website is subject to the laws of the jurisdiction in which Venihost is registered.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
