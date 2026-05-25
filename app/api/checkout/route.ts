import { NextResponse } from "next/server";
import { stripe } from "@/lib/integrations/stripe";

export async function POST() {
  if (!stripe) {
    return NextResponse.json({ error: "Stripe is not configured." }, { status: 503 });
  }

  return NextResponse.json({
    status: "ready",
    next: "Create Stripe Checkout Session with cart line items, Kuwait shipping rate, and Supabase order draft."
  });
}
