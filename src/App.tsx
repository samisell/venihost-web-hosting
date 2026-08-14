import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import Home from '@/src/pages/Home';
import SharedHosting from '@/src/pages/SharedHosting';
import VPSHosting from '@/src/pages/VPSHosting';
import CloudHosting from '@/src/pages/CloudHosting';
import DedicatedServers from '@/src/pages/DedicatedServers';
import Domains from '@/src/pages/Domains';
import Pricing from '@/src/pages/Pricing';
import About from '@/src/pages/About';
import Contact from '@/src/pages/Contact';
import FAQ from '@/src/pages/FAQ';
import TermsOfService from '@/src/pages/TermsOfService';
import TermsOfUse from '@/src/pages/TermsOfUse';
import PrivacyPolicy from '@/src/pages/PrivacyPolicy';
import Sitemap from '@/src/pages/Sitemap';
import SitemapXml from '@/src/pages/SitemapXml';
import OurBusinesses from '@/src/pages/OurBusinesses';
import StudyAbroadCRM from '@/src/pages/StudyAbroadCRM';
import HotelManagement from '@/src/pages/HotelManagement';
import OdooERP from '@/src/pages/OdooERP';
import POSSoftware from '@/src/pages/POSSoftware';
import WordPressHosting from '@/src/pages/WordPressHosting';
import CPanelHosting from '@/src/pages/CPanelHosting';
import DjangoHosting from '@/src/pages/DjangoHosting';
import CloudVPSHosting from '@/src/pages/CloudVPSHosting';
import CPanelVPSHosting from '@/src/pages/CPanelVPSHosting';
import WindowsVPSHosting from '@/src/pages/WindowsVPSHosting';
import StorageVPSHosting from '@/src/pages/StorageVPSHosting';
import VmailEmailHosting from '@/src/pages/VmailEmailHosting';
import Blog from '@/src/pages/Blog';
import BlogPostDetail from '@/src/pages/BlogPostDetail';
import NotFound from '@/src/pages/NotFound';
import CookieConsent from '@/src/components/CookieConsent';
import FacebookPixel from '@/src/components/FacebookPixel';
import GoogleAnalytics from '@/src/components/GoogleAnalytics';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shared-hosting" element={<SharedHosting />} />
            <Route path="/vps-hosting" element={<VPSHosting />} />
            <Route path="/cloud-hosting" element={<CloudHosting />} />
            <Route path="/dedicated-servers" element={<DedicatedServers />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/sitemap.xml" element={<SitemapXml />} />
            <Route path="/our-businesses" element={<OurBusinesses />} />
            <Route path="/study-abroad-crm" element={<StudyAbroadCRM />} />
            <Route path="/hotel-management" element={<HotelManagement />} />
            <Route path="/odoo-erp" element={<OdooERP />} />
            <Route path="/pos-software" element={<POSSoftware />} />
            <Route path="/wordpress-hosting" element={<WordPressHosting />} />
            <Route path="/cpanel-hosting" element={<CPanelHosting />} />
            <Route path="/django-hosting" element={<DjangoHosting />} />
            <Route path="/cloud-vps" element={<CloudVPSHosting />} />
            <Route path="/cpanel-vps" element={<CPanelVPSHosting />} />
            <Route path="/windows-vps" element={<WindowsVPSHosting />} />
            <Route path="/storage-vps" element={<StorageVPSHosting />} />
            <Route path="/vmail-email" element={<VmailEmailHosting />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
        <FacebookPixel />
        <GoogleAnalytics />
      </div>
    </Router>
  );
}
