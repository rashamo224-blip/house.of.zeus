import type { Metadata } from "next";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      images: [{ url: "/images/house-of-pets.png", width: 1400, height: 1118 }]
    }
  };
}
