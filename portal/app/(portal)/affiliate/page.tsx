"use client";

import { Users, Link as LinkIcon, DollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AffiliatePage() {
  const isAffiliate = true; // Hardcoded for demo

  if (!isAffiliate) {
    return (
      <div className="space-y-6 text-center max-w-2xl mx-auto py-12">
        <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
          <Users className="h-12 w-12 text-orange-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Join our Affiliate Program</h1>
        <p className="text-gray-500 text-lg">
          Earn up to 20% recurring commission on every referral. Turn your network into a steady stream of income with Venihost.
        </p>
        <button className="mt-8 rounded-lg bg-orange-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500">
          Activate Affiliate Account
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Affiliate Program</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track your referrals, commissions, and payouts.
          </p>
        </div>
      </div>

      {/* Referral Link */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-sm font-medium text-gray-700 mb-2">Your Unique Referral Link</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <LinkIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              readOnly
              value="https://venihost.com.ng/aff.php?aff=42"
              className="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 bg-gray-50 font-medium sm:text-sm sm:leading-6"
            />
          </div>
          <button className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
            Copy Link
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Clicks</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">142</p>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Signups</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">18</p>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Conversions</h3>
          <p className="mt-2 text-3xl font-bold text-green-600">5</p>
        </div>
        <div className="rounded-xl border border-gray-100 bg-orange-50 p-6 shadow-sm">
          <h3 className="text-sm font-medium text-orange-800 flex items-center gap-2">
            Available Balance
          </h3>
          <p className="mt-2 text-3xl font-bold text-orange-600">₦25,000</p>
        </div>
      </div>

      {/* Referrals List */}
      <div className="bg-white shadow-sm ring-1 ring-gray-200 rounded-xl overflow-hidden mt-8">
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-gray-400" />
          <h2 className="text-base font-semibold text-gray-900">Referred Signups</h2>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product/Service</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2026-07-15</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cloud VPS - 4GB RAM</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₦8,500</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">₦850</td>
              <td className="px-6 py-4 whitespace-nowrap"><span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Pending Clearance</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
