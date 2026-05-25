const SHOPIFY_VERSION = "2025-01";

export async function shopifyStorefront<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const domain = process.env.SHOPIFY_STOREFRONT_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!domain || !token) {
    throw new Error("Shopify Storefront credentials are not configured.");
  }

  const response = await fetch(`https://${domain}/api/${SHOPIFY_VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 300 }
  });

  if (!response.ok) {
    throw new Error(`Shopify Storefront request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
