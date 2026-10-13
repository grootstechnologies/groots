import { NextResponse } from "next/server";

// Mark as static so it can be pre-rendered during `next build` for
// Cloudflare Pages static export.
export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}
