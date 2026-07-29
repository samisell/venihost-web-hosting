"use client";

import { useState } from "react";
import { Wallet as WalletIcon, CreditCard, ArrowUpRight, ArrowDownRight, History } from "lucide-react";

const transactions = [
  { id: 1, type: "deposit", amount: "₦50,000", date: "2026-07-28", description: "Paystack Deposit", status: "Completed" },
  { id: 2, type: "payment", amount: "₦15,000", date: "2026-07-28", description: "Invoice #1042 Payment", status: "Completed" },
  { id: 3, type: "deposit", amount: "₦10,000", date: "2026-06-15", description: "Flutterwave Deposit", status: "Completed" },
];

export default function WalletPage() {
  const [addFundsMode, setAddFundsMode] = useState(false);
  const [amount, setAmount] = useState("");

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Wallet & Balance</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account balance and view transaction history.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Balance Card */}
        <div className="md:col-span-1 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute -right-4 -top-4 opacity-10">
            <WalletIcon className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <h2 className="text-sm font-medium text-slate-300">Available Balance</h2>
            <p className="mt-2 text-4xl font-bold">₦35,000.00</p>
            <div className="mt-8">
              <button 
                onClick={() => setAddFundsMode(!addFundsMode)}
                className="w-full rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 transition-colors"
              >
                {addFundsMode ? "Cancel" : "Add Funds"}
              </button>
            </div>
          </div>
        </div>

        {/* Add Funds Panel */}
        {addFundsMode && (
          <div className="md:col-span-2 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-orange-500" />
              Add Funds to Wallet
            </h3>
            <div className="mt-6 space-y-4 max-w-sm">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (NGN)</label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">₦</span>
                  </div>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    className="block w-full rounded-md border-0 py-2.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-500 sm:text-sm">NGN</span>
                  </div>
                </div>
              </div>
              <button className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
                Proceed to Payment
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Transaction History */}
      <div className="bg-white shadow-sm ring-1 ring-gray-200 rounded-xl overflow-hidden mt-8">
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-4 flex items-center gap-2">
          <History className="h-5 w-5 text-gray-400" />
          <h2 className="text-base font-semibold text-gray-900">Recent Transactions</h2>
        </div>
        <ul role="list" className="divide-y divide-gray-100">
          {transactions.map((tx) => (
            <li key={tx.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <div className={`p-2 rounded-full ${tx.type === 'deposit' ? 'bg-green-100' : 'bg-red-100'}`}>
                    {tx.type === 'deposit' ? (
                      <ArrowDownRight className="h-5 w-5 text-green-600" />
                    ) : (
                      <ArrowUpRight className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-6 text-gray-900">{tx.description}</p>
                    <p className="text-xs text-gray-500">{tx.date} • {tx.status}</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <p className={`text-sm font-bold ${tx.type === 'deposit' ? 'text-green-600' : 'text-gray-900'}`}>
                    {tx.type === 'deposit' ? '+' : '-'}{tx.amount}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
