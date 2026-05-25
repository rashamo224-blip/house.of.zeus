"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-provider";
import { formatPrice } from "@/lib/utils";

export function CartView() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const shipping = items.length ? 2 : 0;

  return (
    <div className="container-lux py-12">
      <h1 className="font-serif text-5xl font-semibold">Shopping cart</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-4">
          {items.length === 0 ? (
            <div className="rounded-xl border bg-white/60 p-8">
              <p>Your furry family deserves something special.</p>
              <Button asChild className="mt-5">
                <Link href="/en/collections/cooling-essentials">Explore collections</Link>
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="grid grid-cols-[96px_1fr] gap-4 rounded-xl border bg-white/60 p-4">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <Link href={`/en/products/${item.slug}`} className="font-medium">
                      {item.name}
                    </Link>
                    <p className="mt-1 text-sm text-muted-foreground">{formatPrice(item.price)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity">
                      <Minus className="size-4" />
                    </Button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity">
                      <Plus className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} aria-label="Remove item">
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <aside className="h-fit rounded-xl border bg-white/65 p-6">
          <p className="font-serif text-2xl font-semibold">Order summary</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Carefully selected for comfort, style, and happy paws.
          </p>
          <div className="mt-5 grid gap-3 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            <div className="flex justify-between"><span>Kuwait delivery within 14 days</span><span>{formatPrice(shipping)}</span></div>
            <div className="flex justify-between border-t pt-3 text-base font-semibold"><span>Total</span><span>{formatPrice(subtotal + shipping)}</span></div>
          </div>
          <Button asChild className="mt-6 w-full">
            <Link href="/en/checkout">Checkout</Link>
          </Button>
        </aside>
      </div>
    </div>
  );
}
