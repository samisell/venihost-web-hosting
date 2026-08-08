"use client";

import { useState } from "react";
import { Server, Settings, ExternalLink } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { useQuery } from "@tanstack/react-query";

export default function HostingPage() {
  const [filter, setFilter] = useState("All");

  const { data, isLoading, error } = useQuery({
    queryKey: ["hosting"],
    queryFn: async () => {
      const res = await fetch("/api/hosting");
      if (!res.ok) throw new Error("Failed to fetch hosting data");
      return res.json();
    }
  });

  // WHMCS returns products in data.products.product array
  const services = data?.products?.product || [];

  const filteredServices = services.filter((s: any) => {
    if (filter === "All") return true;
    return s.status === filter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Hosting Services</h1>
        <div className="flex gap-2">
          {["All", "Active", "Suspended"].map(status => (
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

      <div className="bg-white shadow-sm ring-1 ring-gray-200 rounded-xl overflow-hidden min-h-[300px]">
        {isLoading ? (
          <div className="flex items-center justify-center h-64 text-gray-400">Loading services...</div>
        ) : error ? (
          <div className="flex items-center justify-center h-64 text-red-500">Error loading services.</div>
        ) : (
          <ul role="list" className="divide-y divide-gray-100">
            {filteredServices.map((service: any) => (
              <li key={service.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between gap-x-6">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start gap-x-3">
                      <div className="bg-orange-100 p-2 rounded-lg mt-1">
                        <Server className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {service.name || service.translated_name || "Hosting Service"}
                        </p>
                        <p className="mt-1 flex items-center text-sm leading-5 text-gray-500">
                          <Link href={`http://${service.domain}`} target="_blank" className="hover:text-orange-600 hover:underline flex items-center gap-1">
                            {service.domain} <ExternalLink className="h-3 w-3" />
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-y-2">
                    <div className="flex items-center gap-x-2">
                      <span className={clsx(
                        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
                        service.status === "Active" ? "bg-green-50 text-green-700 ring-green-600/20" : "bg-red-50 text-red-700 ring-red-600/20"
                      )}>
                        {service.status}
                      </span>
                      <Link
                        href={`/hosting/${service.id}`}
                        className="rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex items-center gap-2"
                      >
                        <Settings className="h-4 w-4 text-gray-400" />
                        Manage
                      </Link>
                    </div>
                    <p className="text-xs text-gray-500">
                      {service.recurringamount} / {service.billingcycle} • Next Due: <span className="font-semibold">{service.nextduedate}</span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
            {filteredServices.length === 0 && (
              <li className="p-12 text-center text-gray-500">
                No services found.
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
