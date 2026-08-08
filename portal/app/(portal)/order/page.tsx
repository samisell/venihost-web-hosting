"use client";

import { useQuery } from "@tanstack/react-query";
import { Server, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function OrderPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    }
  });

  const products = data?.products?.product || [];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Order New Services</h1>
        <p className="mt-4 text-lg text-gray-500">
          Choose the perfect plan for your next big project. Instant provisioning on high-performance infrastructure.
        </p>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500">Loading available products...</p>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-red-500">Error loading products. Please try again later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: any) => (
            <div key={product.pid} className="rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
              <div className="p-8">
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Server className="h-5 w-5 text-orange-600" />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-500 min-h-[50px]">
                  {product.description ? product.description.replace(/<[^>]*>?/gm, '') : "Premium hosting service."}
                </p>
                <div className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-3xl font-bold tracking-tight text-gray-900">
                    {product.pricing?.USD?.monthly || product.pricing?.NGN?.monthly || "Contact us"}
                  </span>
                  {(product.pricing?.USD?.monthly || product.pricing?.NGN?.monthly) && (
                    <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                  )}
                </div>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  <li className="flex gap-x-3">
                    <Check className="h-5 w-5 flex-none text-orange-600" />
                    Instant Setup
                  </li>
                  <li className="flex gap-x-3">
                    <Check className="h-5 w-5 flex-none text-orange-600" />
                    99.9% Uptime Guarantee
                  </li>
                  <li className="flex gap-x-3">
                    <Check className="h-5 w-5 flex-none text-orange-600" />
                    24/7 Premium Support
                  </li>
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link
                  href={`https://app.venihost.com.ng/cart.php?a=add&pid=${product.pid}`}
                  target="_blank"
                  className={clsx(
                    "mt-8 block rounded-lg px-3 py-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors",
                    "bg-slate-900 text-white shadow-sm hover:bg-slate-800 focus-visible:outline-slate-900"
                  )}
                >
                  Order Now <ArrowRight className="inline h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
          {products.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-12">
              No products are currently available for ordering.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
