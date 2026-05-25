"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-provider";
import type { Product } from "@/lib/products";

export function AddToCart({ product, label = "Add to cart" }: { product: Product; label?: string }) {
  const { addItem } = useCart();

  return (
    <Button onClick={() => addItem(product)} aria-label={`Add ${product.name} to cart`}>
      <ShoppingBag className="size-4" />
      {label}
    </Button>
  );
}
