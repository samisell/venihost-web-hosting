"use client";

import { useState } from "react";
import { Globe, Settings, ExternalLink } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { useQuery } from "@tanstack/react-query";

export default function DomainsPage() {
  const [filter, setFilter] = useState("All");

  const { data, isLoading, error } = useQuery({
    queryKey: ["domains"],
    queryFn: async () => {
      const res = await fetch("/api/domains");
      if (!res.ok) throw new Error("Failed to fetch domains data");
      return res.json();
    }
  });

  const domains = data?.domains?.domain || [];

  const filteredDomains = domains.filter((d: any) => {
    if (filter === "All") return true;
    return d.status === filter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">My Domains</h1>
        <div className="flex gap-2">
          {["All", "Active", "Pending Transfer", "Expired"].map(status => (
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
          <div className="flex items-center justify-center h-64 text-gray-400">Loading domains...</div>
        ) : error ? (
          <div className="flex items-center justify-center h-64 text-red-500">Error loading domains.</div>
        ) : (
          <ul role="list" className="divide-y divide-gray-100">
            {filteredDomains.map((domain: any) => (
              <li key={domain.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between gap-x-6">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start gap-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg mt-1">
                        <Globe className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-lg font-bold leading-6 text-gray-900 flex items-center gap-2">
                          {domain.domainname}
                          <Link href={`http://${domain.domainname}`} target="_blank" className="text-gray-400 hover:text-blue-600">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </p>
                        <p className="mt-1 flex items-center text-sm leading-5 text-gray-500">
                          Registered: {domain.registrationdate}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-y-2">
                    <div className="flex items-center gap-x-2">
                      <span className={clsx(
                        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
                        domain.status === "Active" ? "bg-green-50 text-green-700 ring-green-600/20" : 
                        domain.status === "Expired" ? "bg-red-50 text-red-700 ring-red-600/20" :
                        "bg-yellow-50 text-yellow-700 ring-yellow-600/20"
                      )}>
                        {domain.status}
                      </span>
                      <Link
                        href={`/domains/${domain.id}`}
                        className="rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex items-center gap-2"
                      >
                        <Settings className="h-4 w-4 text-gray-400" />
                        Manage
                      </Link>
                    </div>
                    <p className="text-xs text-gray-500">
                      Auto Renew: <span className={domain.autorenew ? "text-green-600 font-bold" : "text-gray-400 font-bold"}>{domain.autorenew ? "ON" : "OFF"}</span> • Next Due: <span className="font-semibold">{domain.nextduedate}</span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
            {filteredDomains.length === 0 && (
              <li className="p-12 text-center text-gray-500">
                No domains found.
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
