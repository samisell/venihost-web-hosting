"use client";

import { useState } from "react";
import { BookOpen, Search, Folder, ChevronRight, ThumbsUp } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const mockCategories = [
  { id: 1, name: "Getting Started", count: 12 },
  { id: 2, name: "cPanel & Hosting", count: 34 },
  { id: 3, name: "Domains & DNS", count: 18 },
  { id: 4, name: "VPS & Dedicated Servers", count: 25 },
  { id: 5, name: "Billing & Accounts", count: 15 },
  { id: 6, name: "Security", count: 9 },
];

const mockArticles = [
  {
    id: 101,
    title: "How to connect your domain to a new hosting plan",
    category: "Domains & DNS",
    views: 1245,
    helpful: 95,
  },
  {
    id: 102,
    title: "Understanding your VPS Resource Limits",
    category: "VPS & Dedicated Servers",
    views: 843,
    helpful: 88,
  },
  {
    id: 103,
    title: "How to reset your cPanel Password",
    category: "cPanel & Hosting",
    views: 3102,
    helpful: 98,
  },
  {
    id: 104,
    title: "Adding funds to your Venihost Wallet",
    category: "Billing & Accounts",
    views: 520,
    helpful: 100,
  },
];

export default function KnowledgebasePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = mockArticles.filter(a => 
    a.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    a.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Search Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <BookOpen className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">How can we help you today?</h1>
          <p className="text-slate-300 mb-8">Search our knowledge base for answers to common questions.</p>
          
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="E.g., How to setup email in Outlook..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 bg-white border-0 shadow-lg focus:ring-2 focus:ring-orange-500 text-lg"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Categories</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <ul className="divide-y divide-gray-50">
              {mockCategories.map(cat => (
                <li key={cat.id}>
                  <Link href={`/knowledgebase/category/${cat.id}`} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center gap-3 text-gray-700 group-hover:text-orange-600 transition-colors">
                      <Folder className="h-5 w-5 text-gray-400 group-hover:text-orange-500" />
                      <span className="font-medium">{cat.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs font-semibold">
                        {cat.count}
                      </span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-orange-500" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Popular / Search Results */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-bold text-gray-900">
            {searchQuery ? "Search Results" : "Popular Articles"}
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <ul className="divide-y divide-gray-50">
              {filteredArticles.map(article => (
                <li key={article.id}>
                  <Link href={`/knowledgebase/${article.id}`} className="block p-5 hover:bg-gray-50 transition-colors group">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Folder className="h-4 w-4" />
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4 text-green-600" />
                        {article.helpful}% helpful
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
              {filteredArticles.length === 0 && (
                <li className="p-12 text-center text-gray-500">
                  No articles found for "{searchQuery}".
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
