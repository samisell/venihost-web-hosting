import React from 'react';
import { motion } from 'motion/react';
import OptimizedImage from '@/src/components/OptimizedImage';

import SEO from '@/src/components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Privacy Policy | Venihost"
        description="Read our privacy policy to understand how we collect, use, and protect your personal information at Venihost."
        keywords="privacy policy, data protection, venihost privacy"
      />
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage 
            src="/data-center-engineer-leverages-artificial-intelligence-visualization-tools.jpg" 
            alt="Privacy Policy Hero" 
            className="object-cover" 
            priority={true}
          />
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Privacy Policy</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Last updated: March 18, 2026. Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-slate lg:prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">1. Information We Collect</h2>
            <p className="text-slate-600 mb-4">
              We may collect personal information from you in a variety of ways, including:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
              <li>Information you provide when you register for an account, such as your name, email address, and billing information.</li>
              <li>Information about your use of our services, including your IP address, browser type, and device information.</li>
              <li>Information collected through cookies and other tracking technologies.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mb-6">2. How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
              <li>Provide and maintain our services.</li>
              <li>Process payments and manage your account.</li>
              <li>Communicate with you about our services, updates, and promotions.</li>
              <li>Improve our services and develop new features.</li>
              <li>Comply with legal obligations and protect our rights.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mb-6">3. How We Share Your Information</h2>
            <p className="text-slate-600 mb-8">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or providing services to you.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-6">4. Data Security</h2>
            <p className="text-slate-600 mb-8">
              We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-6">5. Your Rights</h2>
            <p className="text-slate-600 mb-8">
              You have the right to access, correct, or delete your personal information. You may also have the right to object to or restrict certain types of processing. To exercise these rights, please contact us at privacy@venihost.com.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-6">6. Cookies</h2>
            <p className="text-slate-600 mb-8">
              Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our website.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-6">7. Changes to This Policy</h2>
            <p className="text-slate-600 mb-8">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
