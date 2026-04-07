import React from 'react';
import { motion } from 'motion/react';
import OptimizedImage from '@/src/components/OptimizedImage';

import SEO from '@/src/components/SEO';

const TermsOfService = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Terms of Service | Venihost"
        description="Read our terms of service to understand the rules, guidelines, and legal agreements for using Venihost hosting and domain services."
        keywords="terms of service, legal agreement, hosting terms, venihost tos"
      />
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage 
            src="/data-center-engineer-leverages-artificial-intelligence-visualization-tools.jpg" 
            alt="Legal Hero" 
            className="object-cover" 
            priority={true}
          />
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Terms of Service</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Last updated: March 18, 2026. Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-slate lg:prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">1. Acceptance of Terms</h2>
            <p className="text-slate-600 mb-8">
              By accessing and using the services provided by Venihost ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-6">2. Description of Service</h2>
            <p className="text-slate-600 mb-8">
              Venihost provides web hosting, domain registration, and related services. We reserve the right to modify, suspend, or discontinue any aspect of the service at any time.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-6">3. User Responsibilities</h2>
            <p className="text-slate-600 mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
              <li>Maintaining the confidentiality of your account credentials.</li>
              <li>All activities that occur under your account.</li>
              <li>Ensuring your content does not violate any laws or third-party rights.</li>
              <li>Maintaining backups of your data.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mb-6">4. Prohibited Content</h2>
            <p className="text-slate-600 mb-4">
              Our services may not be used for:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
              <li>Illegal activities or content.</li>
              <li>Spamming or unsolicited communications.</li>
              <li>Distribution of malware or viruses.</li>
              <li>Infringement of intellectual property rights.</li>
              <li>Adult content or gambling sites (depending on specific plan terms).</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mb-6">5. Payment and Billing</h2>
            <p className="text-slate-600 mb-8">
              Fees for our services are billed in advance. All payments are non-refundable unless otherwise specified in our 30-day money-back guarantee policy. Failure to pay may result in service suspension or termination.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-6">6. Limitation of Liability</h2>
            <p className="text-slate-600 mb-8">
              Venihost shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, whether in an action in contract or tort.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-6">7. Termination</h2>
            <p className="text-slate-600 mb-8">
              We reserve the right to terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-6">8. Changes to Terms</h2>
            <p className="text-slate-600 mb-8">
              We may update our Terms of Service from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
