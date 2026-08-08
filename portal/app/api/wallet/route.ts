import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getClientBalance } from "@/lib/whmcs/wallet";
import { getTransactions } from "@/lib/whmcs/billing";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const balance = await getClientBalance(parseInt(session.user.id));
    const transactions = await getTransactions(parseInt(session.user.id));
    
    return NextResponse.json({ balance, transactions });
  } catch (error: any) {
    console.error("Wallet API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch wallet data" },
      { status: 500 }
    );
  }
}
