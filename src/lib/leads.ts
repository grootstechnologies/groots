import { z } from "zod";
import { db } from "@/lib/db";

export const LeadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().min(8, "Please enter a valid phone number").max(25),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  course: z.string().optional(),
  status: z.string().optional(),
  message: z.string().max(2000).optional(),
  source: z.string().default("website"),
  metadata: z.record(z.string(), z.any()).optional(),
});

export type LeadInput = z.infer<typeof LeadSchema>;

export async function processLead(input: LeadInput) {
  const validated = LeadSchema.parse(input);

  const timestamp = new Date().toISOString();
  const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  // 1. Structured logging (captured by Vercel Log Drains / Axiom / Datadog)
  console.info(`[LEAD_SUBMISSION] [${timestamp}] ID:${leadId}`, JSON.stringify({
    leadId,
    timestamp,
    ...validated,
  }));

  // 2. Dispatch to external webhook if configured (Zapier, Make, Slack, CRM)
  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: leadId,
          timestamp,
          ...validated,
        }),
      });
    } catch (webhookErr) {
      console.error("[LEAD_WEBHOOK_ERROR]", webhookErr);
    }
  }

  // 3. Database persistence (if DB is configured & writable)
  let dbSaved = false;
  try {
    if (db && "lead" in db && typeof (db as any).lead?.create === "function") {
      await (db as any).lead.create({
        data: {
          name: validated.name,
          phone: validated.phone,
          email: validated.email || null,
          course: validated.course || null,
          status: validated.status || null,
          source: validated.source,
          message: validated.message || null,
          metadata: validated.metadata ? JSON.stringify(validated.metadata) : null,
        },
      });
      dbSaved = true;
    }
  } catch (dbErr) {
    // In serverless / read-only SQLite environments, catch gracefully
    console.warn("[LEAD_DB_SAVE_SKIPPED]", dbErr instanceof Error ? dbErr.message : dbErr);
  }

  return {
    success: true,
    id: leadId,
    dbSaved,
    message: "Thank you! Our career counsellor will contact you within 4 hours.",
  };
}
