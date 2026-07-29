"use client";

import { useState } from "react";
import { LifeBuoy, MessageSquare, Plus } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const mockTickets = [
  {
    id: 1042,
    department: "Technical Support",
    subject: "Server node offline since 2AM",
    status: "Open",
    lastUpdated: "2 hours ago",
  },
  {
    id: 1025,
    department: "Billing",
    subject: "Cannot pay invoice #1042 with Flutterwave",
    status: "Answered",
    lastUpdated: "1 day ago",
  },
  {
    id: 998,
    department: "Sales",
    subject: "Question about enterprise hosting",
    status: "Closed",
    lastUpdated: "2 weeks ago",
  },
];

export default function SupportPage() {
  const [filter, setFilter] = useState("Active");

  const filteredTickets = mockTickets.filter(t => {
    if (filter === "All") return true;
    if (filter === "Active") return t.status !== "Closed";
    return t.status === filter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Support Tickets</h1>
        <div className="flex gap-2 items-center">
          <div className="flex gap-1 mr-4">
            {["Active", "All", "Closed"].map(status => (
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
          <Link
            href="/support/new"
            className="inline-flex items-center gap-2 rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500"
          >
            <Plus className="h-4 w-4" />
            Open Ticket
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-sm ring-1 ring-gray-200 rounded-xl overflow-hidden">
        <ul role="list" className="divide-y divide-gray-100">
          {filteredTickets.map((ticket) => (
            <li key={ticket.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between gap-x-6">
                <div className="min-w-0 flex-1">
                  <div className="flex items-start gap-x-3">
                    <div className="bg-blue-50 p-2 rounded-lg mt-1">
                      <LifeBuoy className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-base font-bold leading-6 text-gray-900">
                        <Link href={`/support/${ticket.id}`} className="hover:text-orange-600">
                          #{ticket.id} - {ticket.subject}
                        </Link>
                      </p>
                      <p className="mt-1 flex items-center text-sm leading-5 text-gray-500 gap-2">
                        <span>{ticket.department}</span>
                        <span>•</span>
                        <span>Updated {ticket.lastUpdated}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-y-2">
                  <span className={clsx(
                    "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-inset",
                    ticket.status === "Open" ? "bg-red-50 text-red-700 ring-red-600/20" : 
                    ticket.status === "Answered" ? "bg-green-50 text-green-700 ring-green-600/20" :
                    ticket.status === "Customer-Reply" ? "bg-orange-50 text-orange-700 ring-orange-600/20" :
                    "bg-gray-50 text-gray-700 ring-gray-600/20"
                  )}>
                    {ticket.status}
                  </span>
                  <Link
                    href={`/support/${ticket.id}`}
                    className="rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <MessageSquare className="h-4 w-4 text-gray-400" />
                    View Ticket
                  </Link>
                </div>
              </div>
            </li>
          ))}
          {filteredTickets.length === 0 && (
            <li className="p-12 text-center text-gray-500">
              No tickets found.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
