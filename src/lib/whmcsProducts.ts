import { useEffect, useState } from 'react';
import { fetchProducts, VITE_PORTAL_URL } from './whmcs';

/**
 * A map of WHMCS Product IDs to their category slug.
 * Update these PIDs to match your exact WHMCS product configuration.
 * 
 * HOW TO FIND YOUR PIDs:
 * 1. Log into your WHMCS Admin Area
 * 2. Go to Setup > Products/Services
 * 3. The "ID" column shows each product's PID
 */
export const PRODUCT_PIDS = {
  // --- Shared / cPanel Hosting ---
  CPANEL_ECONOMY: 66,
  CPANEL_DELUXE: 70,
  CPANEL_ULTIMATE: 62,

  // --- WordPress Hosting ---
  WP_STARTER: 67,
  WP_PRO: 68,

  // --- VPS Hosting ---
  VPS_START: 71,
  WINDOWS_VPS_START: 72,
  STORAGE_VPS: 73,

  // --- Cloud VPS ---
  CLOUD_VPS_START: 74,

  // --- Dedicated Servers ---
  DEDICATED_START: 75,

  // --- Email ---
  EMAIL_PRO: 76,
};

export interface WhmcsProduct {
  pid: number;
  name: string;
  description: string;
  pricing: {
    NGN?: { monthly: string; annually: string; biennially: string; triennially: string };
    USD?: { monthly: string; annually: string; biennially: string; triennially: string };
  };
}

let _products: WhmcsProduct[] | null = null;
let _promise: Promise<WhmcsProduct[]> | null = null;

export function useWhmcsProducts() {
  const [products, setProducts] = useState<WhmcsProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((p) => {
      setProducts(p);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  function getProduct(pid: number): WhmcsProduct | undefined {
    return products.find(p => p.pid == pid);
  }

  function getPrice(pid: number, cycle: 'monthly' | 'annually' | 'biennially' | 'triennially' = 'monthly'): string | null {
    const p = getProduct(pid);
    if (!p) return null;
    return p.pricing?.NGN?.[cycle] || p.pricing?.USD?.[cycle] || null;
  }

  function getName(pid: number): string | null {
    return getProduct(pid)?.name || null;
  }

  return { products, loading, getProduct, getPrice, getName };
}

export function getCartUrl(pid: number): string {
  return `https://app.venihost.com.ng/cart.php?a=add&pid=${pid}`;
}

export function getPortalUrl(path: string = ''): string {
  return `${VITE_PORTAL_URL}${path}`;
}
