import React, { useEffect, useState } from 'react';
import { Copy, Check, Download, ExternalLink, Code2 } from 'lucide-react';
import SEO from '@/src/components/SEO';

const SitemapXml: React.FC = () => {
  const [xmlContent, setXmlContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/sitemap.xml')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load XML');
        return res.text();
      })
      .then((text) => {
        setXmlContent(text);
        setLoading(false);
      })
      .catch(() => {
        // Fallback default XML if fetch failed in certain preview modes
        const fallback = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://venihost.com.ng/</loc>
    <lastmod>2026-04-10</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://venihost.com.ng/cpanel-hosting</loc>
    <lastmod>2026-04-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://venihost.com.ng/shared-hosting</loc>
    <lastmod>2026-04-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://venihost.com.ng/domains</loc>
    <lastmod>2026-04-10</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://venihost.com.ng/pricing</loc>
    <lastmod>2026-04-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;
        setXmlContent(fallback);
        setLoading(false);
      });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(xmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([xmlContent], { type: 'application/xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-24 pb-16 bg-slate-900 min-h-screen text-slate-100 font-sans">
      <SEO
        title="sitemap.xml - XML Sitemap for Google Search Console"
        description="Raw XML Sitemap format compliant with sitemaps.org 0.9 schema for Google Search Console and web crawlers."
        canonical="https://venihost.com.ng/sitemap.xml"
      />

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-secondary text-sm font-semibold mb-1">
              <Code2 size={18} />
              <span>XML Sitemap Protocol (sitemaps.org 0.9)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">sitemap.xml</h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-medium flex items-center gap-2 transition-colors border border-slate-700 cursor-pointer"
            >
              {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              <span>{copied ? 'Copied' : 'Copy XML'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-secondary hover:bg-secondary/90 text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-md shadow-secondary/20 cursor-pointer"
            >
              <Download size={16} />
              <span>Download .xml</span>
            </button>
            <a
              href="/sitemap"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-slate-200 rounded-xl text-sm font-medium flex items-center gap-1.5 transition-colors"
            >
              <span>Visual HTML Sitemap</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {loading ? (
          <div className="p-12 text-center text-slate-400">Loading sitemap.xml...</div>
        ) : (
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/80 shadow-2xl">
            <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>application/xml</span>
              <span>UTF-8</span>
            </div>
            <pre className="p-6 font-mono text-xs sm:text-sm text-emerald-400 overflow-x-auto leading-relaxed max-h-[70vh]">
              <code>{xmlContent}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default SitemapXml;
