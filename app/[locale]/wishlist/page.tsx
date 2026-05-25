import { Heart } from "lucide-react";
import { ProductCard } from "@/components/products/product-card";
import { products } from "@/lib/products";

export default function WishlistPage() {
  return (
    <div className="container-lux py-12">
      <Heart className="size-6 text-zeus-garnet" />
      <h1 className="mt-4 font-serif text-5xl font-semibold">Wishlist</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        A polished saved-products experience is ready to connect to Supabase auth and customer profiles.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
