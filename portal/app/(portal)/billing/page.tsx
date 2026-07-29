"use client";

import { useState } from "react";
import { CreditCard, Download, Eye } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const mockInvoices = [
  {
    id: 1042,
    date: "2026-07-28",
    dueDate: "2026-08-04",
    total: "₦15,000",
    status: "Unpaid",
  },
  {
    id: 1025,
    date: "2026-06-25",
    dueDate: "2026-06-25",
    total: "₦8,500",
    status: "Paid",
  },
];

export default function BillingPage() {
  const [filter, setFilter] = useState("All");

  const filteredInvoices = mockInvoices.filter(i => {
    if (filter === "All") return true;
    return i.status === filter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>
        <div className="flex gap-2">
          {["All", "Unpaid", "Paid", "Cancelled"].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={clsx(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                filter === status 
                  ? "bg-slate-900 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              )}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white shadow-sm ring-1 ring-gray-200 rounded-xl overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice #</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredInvoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                  #{invoice.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {invoice.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {invoice.dueDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                  {invoice.total}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={clsx(
                    "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium",
                    invoice.status === "Paid" ? "bg-green-100 text-green-800" : 
                    invoice.status === "Unpaid" ? "bg-red-100 text-red-800" :
                    "bg-gray-100 text-gray-800"
                  )}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end gap-2">
                    <Link href={`/billing/${invoice.id}`} className="text-gray-400 hover:text-orange-600" title="View">
                      <Eye className="h-5 w-5" />
                    </Link>
                    <button className="text-gray-400 hover:text-orange-600" title="Download PDF">
                      <Download className="h-5 w-5" />
                    </button>
                    {invoice.status === "Unpaid" && (
                      <Link href={`/billing/${invoice.id}/pay`} className="ml-2 inline-flex items-center rounded-md bg-orange-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500">
                        <CreditCard className="mr-1.5 h-4 w-4" /> Pay Now
                      </Link>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredInvoices.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            No invoices found.
          </div>
        )}
      </div>
    </div>
  );
}
