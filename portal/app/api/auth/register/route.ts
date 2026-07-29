import { NextResponse } from "next/server";
import { createClient } from "@/lib/whmcs/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Add Client to WHMCS
    const res = await createClient({
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      phonenumber: body.phonenumber,
      password2: body.password, // WHMCS expects password in password2 field when creating client? No wait, usually just 'password' or 'password2'. We use password2.
      address1: body.address1,
      city: body.city,
      state: body.state,
      postcode: body.postcode,
      country: body.country,
    });

    if (res.result === "success") {
      return NextResponse.json({ success: true, clientId: res.clientid });
    } else {
      return NextResponse.json({ error: res.message || "Registration failed" }, { status: 400 });
    }
  } catch (error: any) {
    console.error("Register Error:", error);
    return NextResponse.json({ error: error.message || "An unexpected error occurred" }, { status: 500 });
  }
}
