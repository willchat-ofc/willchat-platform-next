// app/api/route.ts
import { NextRequest } from "next/server";
import { fetchWithAuth } from "@/lib/fetch-with-auth";

export async function GET(request: NextRequest) {
  const response = await fetchWithAuth(`http://localhost:7070/chat`);

  return new Response(JSON.stringify(await response.json()), {
    status: response.status,
  });
}
