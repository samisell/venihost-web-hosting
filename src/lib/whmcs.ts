export const VITE_PORTAL_URL = import.meta.env.VITE_PORTAL_URL || "http://localhost:3001";

let productsCache: any = null;
let fetchPromise: Promise<any> | null = null;

export async function fetchProducts() {
  if (productsCache) return productsCache;
  if (fetchPromise) return fetchPromise;

  fetchPromise = fetch(`${VITE_PORTAL_URL}/api/products`)
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    })
    .then(data => {
      productsCache = data?.products?.product || [];
      return productsCache;
    })
    .catch(err => {
      console.error("Error fetching WHMCS products:", err);
      return [];
    });

  return fetchPromise;
}

export function getPortalLoginUrl() {
  return `${VITE_PORTAL_URL}/login`;
}

export function getPortalRegisterUrl() {
  return `${VITE_PORTAL_URL}/register`;
}

export function getPortalForgotPasswordUrl() {
  return `${VITE_PORTAL_URL}/forgot-password`;
}
