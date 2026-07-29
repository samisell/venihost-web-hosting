"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { useUIStore } from "@/store/ui";
import clsx from "clsx";
import { SessionProvider } from "next-auth/react";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { sidebarOpen } = useUIStore();

  return (
    <SessionProvider>
      <div className="min-h-screen bg-slate-50">
        <Sidebar />
        <div
          className={clsx(
            "flex flex-col flex-1 transition-all duration-300",
            sidebarOpen ? "lg:pl-64 pl-0" : "lg:pl-20 pl-0"
          )}
        >
          <Topbar />
          <main className="flex-1 py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </SessionProvider>
  );
}
