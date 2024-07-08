// app/api/route.ts
import { NextRequest } from "next/server";
import { fetchWithAuth } from "@/lib/fetch-with-auth";

export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const response = await fetchWithAuth(
    `http://localhost:7070/chat?id=${searchParams.get("id")}`,
    {
      method: "DELETE",
    }
  );

  return new Response(null, {
    status: response.status,
  });
}
