import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getInvoices } from "@/lib/whmcs/billing";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await getInvoices(parseInt(session.user.id));
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Billing API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch invoices" },
      { status: 500 }
    );
  }
}
