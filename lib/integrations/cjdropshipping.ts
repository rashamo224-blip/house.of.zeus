import { z } from "zod";

const CJProductSchema = z.object({
  pid: z.string(),
  productName: z.string(),
  sellPrice: z.string().optional(),
  productImage: z.string().optional()
});

export type CJProduct = z.infer<typeof CJProductSchema>;

export async function syncCJProducts() {
  const base = process.env.CJDROPSHIPPING_API_BASE;
  const email = process.env.CJDROPSHIPPING_EMAIL;
  const password = process.env.CJDROPSHIPPING_PASSWORD;

  if (!base || !email || !password) {
    return { status: "skipped", reason: "CJdropshipping credentials are not configured." };
  }

  return {
    status: "ready",
    next: "Exchange credentials for CJ token, fetch curated SKUs, normalize to Product, then upsert into Supabase."
  };
}
