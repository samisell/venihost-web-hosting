"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUIStore } from "@/store/ui";
import {
  LayoutDashboard,
  Server,
  Globe,
  HardDrive,
  CreditCard,
  LifeBuoy,
  BookOpen,
  Wallet,
  Users,
  Download,
  UserCircle,
  Shield,
  Settings,
  ChevronLeft
} from "lucide-react";
import clsx from "clsx";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Hosting", href: "/hosting", icon: Server },
  { name: "Domains", href: "/domains", icon: Globe },
  { name: "VPS & Servers", href: "/vps", icon: HardDrive },
  { name: "Billing", href: "/billing", icon: CreditCard },
  { name: "Support", href: "/support", icon: LifeBuoy },
  { name: "Knowledgebase", href: "/knowledgebase", icon: BookOpen },
  { name: "Wallet", href: "/wallet", icon: Wallet },
  { name: "Affiliates", href: "/affiliate", icon: Users },
  { name: "Downloads", href: "/downloads", icon: Download },
  { name: "Profile", href: "/profile", icon: UserCircle },
  { name: "Security", href: "/security", icon: Shield },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { sidebarOpen, setSidebarOpen } = useUIStore();

  return (
    <aside
      className={clsx(
        "fixed inset-y-0 left-0 z-50 flex flex-col bg-slate-900 text-white transition-all duration-300",
        sidebarOpen ? "w-64" : "w-20 lg:w-64 -translate-x-full lg:translate-x-0"
      )}
    >
      <div className="flex h-16 shrink-0 items-center justify-between px-4 bg-slate-950">
        <div className={clsx("font-bold text-xl", !sidebarOpen && "lg:block hidden")}>
          VENI<span className="text-orange-500">HOST</span>
        </div>
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden p-2 text-slate-400 hover:text-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-orange-500 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white",
                !sidebarOpen && "lg:justify-start justify-center"
              )}
            >
              <item.icon
                className={clsx(
                  "h-5 w-5 shrink-0",
                  isActive ? "text-white" : "text-slate-400 group-hover:text-white",
                  sidebarOpen ? "mr-3" : "lg:mr-3 mr-0"
                )}
                aria-hidden="true"
              />
              <span className={clsx(!sidebarOpen && "lg:block hidden")}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
