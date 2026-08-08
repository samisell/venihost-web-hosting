"use client";

import { useQuery } from "@tanstack/react-query";
import { Server, Globe, FileText, LifeBuoy, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();

  // Parallel fetching of all stats
  const { data: hostingData, isLoading: loadingHosting } = useQuery({
    queryKey: ["hosting"],
    queryFn: async () => {
      const res = await fetch("/api/hosting");
      if (!res.ok) throw new Error("Failed");
      return res.json();
    }
  });

  const { data: domainsData, isLoading: loadingDomains } = useQuery({
    queryKey: ["domains"],
    queryFn: async () => {
      const res = await fetch("/api/domains");
      if (!res.ok) throw new Error("Failed");
      return res.json();
    }
  });

  const { data: billingData, isLoading: loadingBilling } = useQuery({
    queryKey: ["invoices"],
    queryFn: async () => {
      const res = await fetch("/api/billing");
      if (!res.ok) throw new Error("Failed");
      return res.json();
    }
  });

  const { data: supportData, isLoading: loadingSupport } = useQuery({
    queryKey: ["tickets"],
    queryFn: async () => {
      const res = await fetch("/api/support");
      if (!res.ok) throw new Error("Failed");
      return res.json();
    }
  });

  // Calculate stats from live data
  const hostingCount = hostingData?.products?.product?.length || 0;
  const domainsCount = domainsData?.domains?.domain?.length || 0;
  
  // Get unpaid invoices
  const invoices = billingData?.invoices?.invoice || [];
  const unpaidInvoices = invoices.filter((i: any) => i.status === "Unpaid");
  
  // Get open tickets
  const tickets = supportData?.tickets?.ticket || [];
  const openTickets = tickets.filter((t: any) => t.status === "Open" || t.status === "Customer-Reply");

  return (
    <div className="space-y-6 max-w-7xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {session?.user?.name || "Client"}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Here's what's happening with your hosting account today.
          </p>
        </div>
        <div>
          <Link href="/order" className="rounded-md bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
            Order New Service
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Active Services */}
        <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <dt>
            <div className="absolute rounded-md bg-orange-100 p-3">
              <Server className="h-6 w-6 text-orange-600" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">Hosting Services</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-1">
            <p className="text-2xl font-semibold text-gray-900">
              {loadingHosting ? "..." : hostingCount}
            </p>
          </dd>
        </div>

        {/* Active Domains */}
        <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <dt>
            <div className="absolute rounded-md bg-blue-100 p-3">
              <Globe className="h-6 w-6 text-blue-600" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">Domains</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-1">
            <p className="text-2xl font-semibold text-gray-900">
              {loadingDomains ? "..." : domainsCount}
            </p>
          </dd>
        </div>

        {/* Unpaid Invoices */}
        <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <dt>
            <div className="absolute rounded-md bg-red-100 p-3">
              <FileText className="h-6 w-6 text-red-600" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">Unpaid Invoices</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-1">
            <p className="text-2xl font-semibold text-gray-900">
              {loadingBilling ? "..." : unpaidInvoices.length}
            </p>
          </dd>
        </div>

        {/* Open Tickets */}
        <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <dt>
            <div className="absolute rounded-md bg-green-100 p-3">
              <LifeBuoy className="h-6 w-6 text-green-600" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">Open Tickets</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-1">
            <p className="text-2xl font-semibold text-gray-900">
              {loadingSupport ? "..." : openTickets.length}
            </p>
          </dd>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Recent Invoices Panel */}
        <div className="bg-white shadow-sm ring-1 ring-gray-200 rounded-xl overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4 flex items-center justify-between">
            <h2 className="text-base font-semibold text-gray-900">Recent Invoices</h2>
            <Link href="/billing" className="text-sm font-medium text-orange-600 hover:text-orange-500 flex items-center">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="p-6">
            {loadingBilling ? (
              <p className="text-sm text-gray-500 text-center py-4">Loading invoices...</p>
            ) : invoices.length === 0 ? (
              <p className="text-sm text-gray-500 text-center py-4">No recent invoices.</p>
            ) : (
              <ul className="divide-y divide-gray-100">
                {invoices.slice(0, 5).map((invoice: any) => (
                  <li key={invoice.id} className="py-3 flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Invoice #{invoice.invoicenum || invoice.id}</p>
                      <p className="text-xs text-gray-500">Due {invoice.duedate}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-900">{invoice.currencyprefix}{invoice.total}</p>
                      <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${invoice.status === 'Paid' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {invoice.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Quick Links Panel */}
        <div className="bg-white shadow-sm ring-1 ring-gray-200 rounded-xl overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <h2 className="text-base font-semibold text-gray-900">Quick Actions</h2>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            <Link href="/support/new" className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-colors group">
              <LifeBuoy className="h-8 w-8 text-slate-400 group-hover:text-orange-600 mb-3" />
              <span className="text-sm font-medium text-slate-900">Open Ticket</span>
            </Link>
            <Link href="/domains" className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-colors group">
              <Globe className="h-8 w-8 text-slate-400 group-hover:text-orange-600 mb-3" />
              <span className="text-sm font-medium text-slate-900">Manage Domains</span>
            </Link>
            <Link href="/wallet" className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-colors group">
              <ArrowUpRight className="h-8 w-8 text-slate-400 group-hover:text-orange-600 mb-3" />
              <span className="text-sm font-medium text-slate-900">Add Funds</span>
            </Link>
            <Link href="/profile" className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-colors group">
              <FileText className="h-8 w-8 text-slate-400 group-hover:text-orange-600 mb-3" />
              <span className="text-sm font-medium text-slate-900">Update Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
