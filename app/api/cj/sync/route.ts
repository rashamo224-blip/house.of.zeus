import { NextResponse } from "next/server";
import { syncCJProducts } from "@/lib/integrations/cjdropshipping";

export async function POST() {
  const result = await syncCJProducts();
  return NextResponse.json(result);
}
