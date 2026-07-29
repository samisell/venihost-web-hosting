import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

// Add routes that don't require authentication here
const publicRoutes = ["/login", "/register", "/forgot-password", "/reset-password"];

export default auth((req) => {
  const { nextUrl } = req;
  const isAuthenticated = !!req.auth;
  const isPublicRoute = publicRoutes.some(route => nextUrl.pathname.startsWith(route));

  if (!isAuthenticated && !isPublicRoute && !nextUrl.pathname.startsWith("/api/auth")) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  if (isAuthenticated && isPublicRoute) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
