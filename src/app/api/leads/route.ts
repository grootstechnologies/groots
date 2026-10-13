import { NextResponse } from "next/server";
import { processLead } from "@/lib/leads";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await processLead(body);
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    if (error?.name === "ZodError") {
      const messages = error.issues?.map((e: any) => e.message) || error.errors?.map((e: any) => e.message) || ["Validation failed"];
      return NextResponse.json(
        {
          success: false,
          errors: messages,
          message: messages[0] || "Please check your inputs and try again.",
        },
        { status: 400 }
      );
    }
    console.error("[LEAD_API_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process inquiry. Please call us directly at +91 954 954 3898.",
      },
      { status: 500 }
    );
  }
}
