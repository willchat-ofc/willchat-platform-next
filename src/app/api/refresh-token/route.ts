// app/api/route.ts
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const refreshToken = cookies().get("refreshToken")?.value;
    if (!refreshToken) {
      throw new Error("No refresh token found");
    }

    const response = await fetch(
      "http://localhost:8080/api/auth/refresh-token",
      {
        headers: {
          refreshtoken: refreshToken,
        },
        method: "GET",
      }
    );

    const responseBody = await response.json();
    const cookieSettings: Partial<ResponseCookie> = {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
    };

    if (response.status >= 200 && response.status <= 300) {
      cookies().set("accessToken", responseBody.accessToken, cookieSettings);
    }

    return new Response(JSON.stringify(responseBody), {
      status: response.status,
    });
  } catch (err) {
    console.log(err);
  }
}
