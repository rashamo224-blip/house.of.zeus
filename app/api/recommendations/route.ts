import { NextResponse } from "next/server";
import { getProduct, products, recommendationsFor } from "@/lib/products";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const product = slug ? getProduct(slug) : null;

  return NextResponse.json({
    strategy: "pet-type and lifestyle affinity placeholder",
    products: product ? recommendationsFor(product) : products.slice(0, 4)
  });
}
