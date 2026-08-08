import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getClientProducts } from "@/lib/whmcs/hosting";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await getClientProducts(parseInt(session.user.id));
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Hosting API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch hosting products" },
      { status: 500 }
    );
  }
}
