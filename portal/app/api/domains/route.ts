import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getClientDomains } from "@/lib/whmcs/domain";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await getClientDomains(parseInt(session.user.id));
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Domains API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch domains" },
      { status: 500 }
    );
  }
}
