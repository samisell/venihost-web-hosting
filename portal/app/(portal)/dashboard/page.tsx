"use client";

import { useSession } from "next-auth/react";
import { Server, Globe, CreditCard, LifeBuoy } from "lucide-react";
import Link from "next/link";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", total: 1500 },
  { name: "Feb", total: 2300 },
  { name: "Mar", total: 3200 },
  { name: "Apr", total: 2800 },
  { name: "May", total: 3800 },
  { name: "Jun", total: 4200 },
];

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {session?.user?.name || "Client"}!
        </h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Active Services</h3>
            <Server className="h-5 w-5 text-gray-400" />
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">12</p>
          <div className="mt-4">
            <Link href="/hosting" className="text-sm font-medium text-orange-600 hover:text-orange-500">
              View all services &rarr;
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Active Domains</h3>
            <Globe className="h-5 w-5 text-gray-400" />
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">8</p>
          <div className="mt-4">
            <Link href="/domains" className="text-sm font-medium text-orange-600 hover:text-orange-500">
              Manage domains &rarr;
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Unpaid Invoices</h3>
            <CreditCard className="h-5 w-5 text-gray-400" />
          </div>
          <p className="mt-2 text-3xl font-bold text-red-600">2</p>
          <div className="mt-4">
            <Link href="/billing" className="text-sm font-medium text-orange-600 hover:text-orange-500">
              Pay invoices &rarr;
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Open Tickets</h3>
            <LifeBuoy className="h-5 w-5 text-gray-400" />
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">1</p>
          <div className="mt-4">
            <Link href="/support" className="text-sm font-medium text-orange-600 hover:text-orange-500">
              View tickets &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Spending Chart */}
        <div className="col-span-1 lg:col-span-2 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Spending Overview</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₦${value}`} />
                <Tooltip 
                  formatter={(value) => [`₦${value}`, "Amount"]}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="total" stroke="#f97316" strokeWidth={2} fillOpacity={1} fill="url(#colorTotal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity / Announcements */}
        <div className="col-span-1 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Announcements</h3>
          <div className="space-y-4">
            <div className="rounded-lg bg-orange-50 p-4 border border-orange-100">
              <h4 className="text-sm font-semibold text-orange-800">Scheduled Maintenance</h4>
              <p className="mt-1 text-sm text-orange-700">We will be performing network upgrades on Node-04 on August 15th at 2:00 AM WAT.</p>
              <p className="mt-2 text-xs text-orange-600 font-medium">Aug 01, 2026</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 border border-gray-100">
              <h4 className="text-sm font-semibold text-gray-800">New Cloud VPS Plans</h4>
              <p className="mt-1 text-sm text-gray-600">Explore our new high-frequency compute instances optimized for intensive workloads.</p>
              <p className="mt-2 text-xs text-gray-500 font-medium">Jul 12, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
