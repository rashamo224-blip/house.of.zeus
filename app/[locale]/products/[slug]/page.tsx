import Image from "next/image";
import { notFound } from "next/navigation";
import { Heart, ShieldCheck, Star, Truck } from "lucide-react";
import { AddToCart } from "@/components/cart/add-to-cart";
import { ProductCard } from "@/components/products/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProduct, products, recommendationsFor } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return products.map((product) => ({ locale: "en", slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return pageMetadata(product.name, product.story, `/en/products/${slug}`);
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const recommended = recommendationsFor(product);

  return (
    <div className="container-lux py-10">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted lg:aspect-square">
          <Image src={product.image} alt={product.name} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="lg:pt-8">
          <Badge>{product.collection.replaceAll("-", " ")}</Badge>
          <h1 className="mt-5 font-serif text-5xl font-semibold">{product.name}</h1>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-semibold">{formatPrice(product.price)}</span>
            {product.compareAt ? <span className="text-sm text-muted-foreground line-through">{formatPrice(product.compareAt)}</span> : null}
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">{product.story}</p>
          {product.description ? <p className="mt-4 leading-7 text-muted-foreground">{product.description}</p> : null}
          {product.perfectFor ? (
            <div className="mt-6 rounded-xl border bg-white/55 p-4">
              <p className="font-serif text-2xl font-semibold">Perfect For</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.perfectFor.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ) : null}
          <p className="mt-4 rounded-xl border bg-white/55 p-4 text-sm leading-6">
            <span className="font-medium">AI recommendation note:</span> {product.aiReason}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <AddToCart product={product} />
            <Button variant="outline">
              <Heart className="size-4" /> Wishlist
            </Button>
          </div>
          <div className="mt-8 grid gap-3 text-sm">
            <p className="inline-flex items-center gap-2">
              <Star className="size-4 fill-zeus-gold text-zeus-gold" /> {product.rating} rating from {product.reviews} reviews
            </p>
            <p className="inline-flex items-center gap-2">
              <Truck className="size-4" /> Kuwait delivery support within 14 days
            </p>
            <p className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4" /> Secure Stripe checkout and customer account ready
            </p>
          </div>
          <div className="mt-8 grid gap-2">
            {Object.entries(product.attributes).map(([label, value]) => (
              <div key={label} className="flex justify-between border-b py-3 text-sm">
                <span className="text-muted-foreground">{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="mt-20">
        <h2 className="font-serif text-4xl font-semibold">Recommended by House of Zeus</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {recommended.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
