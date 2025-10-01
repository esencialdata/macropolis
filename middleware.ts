import { type NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard"];

export function middleware(request: NextRequest) {
  const isProtected = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));
  if (!isProtected) {
    return NextResponse.next();
  }

  // Placeholder: en implementación real validar cookie "sb-access-token"
  const hasSession = request.cookies.has("sb-access-token");
  if (!hasSession) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"]
};
