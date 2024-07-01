import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get("refreshToken")?.value;

  const isInAuthRouter = request.nextUrl.pathname.startsWith("/auth");
  if (!refreshToken && !isInAuthRouter) {
    return Response.redirect(new URL("/auth/sign-in", request.url));
  }

  if (refreshToken && isInAuthRouter) {
    return Response.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
