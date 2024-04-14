import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { http } from "./util/http";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token");
  if (!token) return;
  const res = await http.post("/auth/isvalid", null, { token: token.value });
  if (res.data) return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/signin",
};
