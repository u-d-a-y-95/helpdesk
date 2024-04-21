import { http } from "@/util/http";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const cookie = request.cookies.get("next-auth.session-token");
  const result = await http.get("/status", {
    token: cookie.value,
  });

  return NextResponse.json(result);
};
