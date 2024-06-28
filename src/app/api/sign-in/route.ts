// app/api/route.ts
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const response = await fetch("http://localhost:8080/api/auth/sign-in", {
      body: JSON.stringify(data),
      method: "POST",
    });

    const responseBody = await response.json();

    const cookieSettings: Partial<ResponseCookie> = {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      secure: process.env.NODE_ENV === "production",
    };

    if (response.status >= 200 && response.status <= 300) {
      cookies().set("refreshToken", responseBody.refreshToken, cookieSettings);
    }

    return new Response(JSON.stringify(responseBody), {
      status: response.status,
    });
  } catch (err) {
    console.log(err);
  }
}
