import { clerkMiddleware, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    const signInUrl = new URL("/admin-login", req.url); // ✅ redirect ไปหน้า login ที่คุณตั้งเอง
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};