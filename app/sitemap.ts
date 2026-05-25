import type { MetadataRoute } from "next";
import { collections, products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const staticRoutes = ["", "/collections", "/wishlist", "/cart", "/account", "/track"];

  return [
    ...staticRoutes.map((route) => ({ url: `${base}/en${route}`, lastModified: new Date() })),
    ...collections.map((collection) => ({
      url: `${base}/en/collections/${collection.slug}`,
      lastModified: new Date()
    })),
    ...products.map((product) => ({
      url: `${base}/en/products/${product.slug}`,
      lastModified: new Date()
    }))
  ];
}
