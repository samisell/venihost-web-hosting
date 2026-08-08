import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getTickets } from "@/lib/whmcs/support";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await getTickets(parseInt(session.user.id));
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Support API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch tickets" },
      { status: 500 }
    );
  }
}
