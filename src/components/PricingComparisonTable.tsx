import React from 'react';
import { Check, Minus } from 'lucide-react';

const PricingComparisonTable = () => {
  const features = [
    { name: "Websites", starter: "1", professional: "10", business: "Unlimited" },
    { name: "NVMe SSD Storage", starter: "10GB", professional: "50GB", business: "Unlimited" },
    { name: "Bandwidth", starter: "100GB", professional: "Unlimited", business: "Unlimited" },
    { name: "Email Accounts", starter: "2", professional: "20", business: "Unlimited" },
    { name: "MySQL Databases", starter: "2", professional: "20", business: "Unlimited" },
    { name: "Free SSL Certificate", starter: true, professional: true, business: true },
    { name: "Free Domain", starter: false, professional: ".com.ng", business: ".com" },
    { name: "Control Panel", starter: "cPanel", professional: "cPanel", business: "cPanel" },
    { name: "LiteSpeed Web Server", starter: true, professional: true, business: true },
    { name: "LSCache Optimized", starter: false, professional: true, business: true },
    { name: "Daily Backups", starter: false, professional: true, business: "Offsite" },
    { name: "Uptime Guarantee", starter: "99.9%", professional: "99.9%", business: "99.9%" },
    { name: "Support", starter: "Standard", professional: "Priority", business: "24/7 VIP" },
    { name: "Free Migration", starter: false, professional: true, business: true },
    { name: "Softaculous Installer", starter: true, professional: true, business: true },
    { name: "Dedicated IP", starter: false, professional: false, business: "Optional" },
  ];

  const renderValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className="flex justify-center"><Check className="text-secondary" size={20} /></div>
      ) : (
        <div className="flex justify-center"><Minus className="text-slate-300" size={20} /></div>
      );
    }
    return <span className="text-slate-600 font-medium">{value}</span>;
  };

  return (
    <div className="mt-20 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-50">
            <th className="p-6 text-left text-primary font-bold border-b border-slate-200">Features</th>
            <th className="p-6 text-center text-primary font-bold border-b border-slate-200">Starter</th>
            <th className="p-6 text-center text-primary font-bold border-b-2 border-secondary bg-secondary/5">Professional</th>
            <th className="p-6 text-center text-primary font-bold border-b border-slate-200">Business</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, idx) => (
            <tr key={idx} className="hover:bg-slate-50 transition-colors">
              <td className="p-6 text-left text-slate-700 font-medium border-b border-slate-100">{feature.name}</td>
              <td className="p-6 text-center border-b border-slate-100">{renderValue(feature.starter)}</td>
              <td className="p-6 text-center border-b border-slate-100 bg-secondary/5">{renderValue(feature.professional)}</td>
              <td className="p-6 text-center border-b border-slate-100">{renderValue(feature.business)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingComparisonTable;
