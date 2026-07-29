"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/whmcs/auth";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
    passwordConfirm: "",
    address1: "",
    city: "",
    state: "",
    postcode: "",
    country: "NG", // Default country
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.passwordConfirm) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      // Direct call won't work client-side if credentials are server-only.
      // We need an API route for this.
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Registration failed");
      } else {
        router.push("/login?registered=true");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl space-y-8 rounded-xl bg-white p-10 shadow-lg border border-gray-100">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Create an Account
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" name="firstname" id="firstname" required value={formData.firstname} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border" />
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" name="lastname" id="lastname" required value={formData.lastname} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" name="phonenumber" id="phonenumber" required value={formData.phonenumber} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="address1" className="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" name="address1" id="address1" required value={formData.address1} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border" />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" name="city" id="city" required value={formData.city} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border" />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Region</label>
              <input type="text" name="state" id="state" required value={formData.state} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border" />
            </div>
            <div>
              <label htmlFor="postcode" className="block text-sm font-medium text-gray-700">Postal Code</label>
              <input type="text" name="postcode" id="postcode" required value={formData.postcode} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border" />
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country Code</label>
              <input type="text" name="country" id="country" required value={formData.country} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" name="password" id="password" required value={formData.password} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border" />
            </div>
            <div>
              <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input type="password" name="passwordConfirm" id="passwordConfirm" required value={formData.passwordConfirm} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border" />
            </div>
          </div>

          {error && <div className="text-sm text-red-500 text-center">{error}</div>}

          <div>
            <button type="submit" disabled={loading} className="group relative flex w-full justify-center rounded-md bg-orange-500 px-3 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition-colors disabled:opacity-50">
              {loading ? "Registering..." : "Create Account"}
            </button>
          </div>
          <div className="text-center text-sm text-gray-600">
            Already have an account? <Link href="/login" className="font-medium text-orange-600 hover:text-orange-500">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
