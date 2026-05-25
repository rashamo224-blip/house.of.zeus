"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Menu, Search, Shield, ShoppingBag, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const nav = [
  ["Collections", "/en/collections/cooling-essentials"],
  ["Summer", "/en/collections/cooling-essentials"],
  ["Cats", "/en/collections/cat-lifestyle"],
  ["Dogs", "/en/collections/dog-lifestyle"],
  ["Track", "/en/track"],
  ["Sign in", "/en/signin"]
];

export function SiteHeader() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 glass">
      <div className="container-lux flex h-16 items-center justify-between gap-4">
        <Link href="/en" className="flex items-center gap-3" aria-label="House of Zeus.ai home">
          <span className="relative h-9 w-24 overflow-hidden rounded-full">
            <Image src="/images/house-of-zeus-logo.png" alt="House of Zeus.ai logo" fill className="object-cover" sizes="96px" priority />
          </span>
          <span className="hidden font-serif text-xl font-semibold tracking-normal sm:inline">House of Zeus.ai</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {nav.map(([label, href]) => (
            <Link key={`${label}-${href}`} href={href} className="transition hover:text-foreground">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="size-4" />
          </Button>
          <ThemeToggle />
          <Button asChild variant="ghost" size="icon" aria-label="Wishlist">
            <Link href="/en/wishlist">
              <Heart className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Account">
            <Link href="/en/account">
              <UserRound className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Super admin">
            <Link href="/en/super-admin">
              <Shield className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" aria-label="Shopping cart">
            <Link href="/en/cart">
              <ShoppingBag className="size-4" />
              <span>{count}</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
            <Menu className="size-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
