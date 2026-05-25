import { notFound } from "next/navigation";
import { ProductCard } from "@/components/products/product-card";
import { Badge } from "@/components/ui/badge";
import { collections, getCollection, productsByCollection } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return collections.map((collection) => ({ locale: "en", slug: collection.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};
  return pageMetadata(collection.name, collection.tone, `/en/collections/${slug}`);
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();
  const items = productsByCollection(slug);

  return (
    <div className="container-lux py-12">
      <Badge>{items.length} pieces</Badge>
      <h1 className="mt-5 font-serif text-5xl font-semibold">{collection.name}</h1>
      <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{collection.tone}</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
