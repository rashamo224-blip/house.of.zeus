import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AddToCart } from "@/components/cart/add-to-cart";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group overflow-hidden border-black/10 bg-white/60">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Link href={`/en/products/${product.slug}`} className="block size-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Link>
        <Badge className="absolute left-3 top-3 bg-zeus-pearl/85">{product.pet}</Badge>
        <Button variant="secondary" size="icon" className="absolute right-3 top-3" aria-label="Add to wishlist">
          <Heart className="size-4" />
        </Button>
      </div>
      <CardContent>
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link href={`/en/products/${product.slug}`} className="font-medium hover:underline">
              {product.name}
            </Link>
            <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted-foreground">{product.story}</p>
          </div>
          <p className="text-sm font-semibold">{formatPrice(product.price)}</p>
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="size-3 fill-zeus-gold text-zeus-gold" /> {product.rating} ({product.reviews})
          </span>
          <AddToCart product={product} label="Add" />
        </div>
      </CardContent>
    </Card>
  );
}
