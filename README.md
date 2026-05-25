# House of Zeus

Production-ready luxury pet ecommerce starter for a GCC/Kuwait-focused brand inspired by Zeus, Ouzo, Diva, Blacky, Tiger, and Swaida.

## Stack

- Next.js 15 App Router, TypeScript, Tailwind CSS, Shadcn-style UI primitives
- Framer Motion homepage animation
- Supabase-ready auth/database schema
- Dedicated sign-in, sign-up, customer account, admin, and super-admin control surfaces
- Light/dark mode theme toggle
- Stripe checkout route structure
- Shopify Storefront API adapter
- CJdropshipping sync adapter structure
- Arabic/English locale routing structure
- SEO metadata, OpenGraph, sitemap, robots

## Local Setup

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

Open `http://localhost:3000/en`.

## Environment Variables

Use `.env.example` as the source of truth. Required for production:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `SHOPIFY_STOREFRONT_DOMAIN`
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
- `CJDROPSHIPPING_EMAIL`
- `CJDROPSHIPPING_PASSWORD`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`

## Supabase Setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Enable email magic-link auth.
4. Enable email/password or magic-link sign-in for `/en/signin` and `/en/signup`.
5. Add row-level security policies before live launch.
6. Use `profiles.role` for `customer`, `support`, `admin`, `super_admin`, and `owner` permissions.
7. Protect `/en/admin` and `/en/super-admin` with server-side role checks.
8. Connect `profiles`, `orders`, `reviews`, wishlist, and pet profile tables to authenticated users.

## Required Platform Defaults

Every House of Zeus platform build should include:

- Clear sign-in and sign-up routes
- Customer account dashboard
- Light mode and dark mode
- Admin dashboard
- Super admin console with role-based access controls
- Audit logging for sensitive admin actions

## Stripe Setup

1. Add Stripe keys to Vercel environment variables.
2. Replace `app/api/checkout/route.ts` placeholder with a Checkout Session create call.
3. Add a Stripe webhook route for `checkout.session.completed`.
4. On webhook success, mark Supabase order as paid and trigger fulfillment.

## Shopify Storefront API

The adapter in `lib/integrations/shopify.ts` is ready for GraphQL Storefront calls.

Recommended path:

1. Keep Shopify as the product/catalog source if desired.
2. Map Shopify products into the internal `Product` type.
3. Cache results with Next revalidation.
4. Preserve luxury curation fields such as story, pet type, GCC suitability, and AI recommendation notes.

## CJdropshipping Integration

`lib/integrations/cjdropshipping.ts` and `app/api/cj/sync/route.ts` are prepared for sync.

Recommended architecture:

1. Authenticate with CJ and store token securely.
2. Fetch selected products only, not broad catalog dumps.
3. Normalize price, inventory, shipping metadata, images, and variants.
4. Upsert into Supabase as draft products.
5. Publish only after brand review in the admin dashboard.

## Vercel Deployment

1. Push the repo to GitHub.
2. Import into Vercel.
3. Add all production environment variables.
4. Set build command to `pnpm build`.
5. Set output to the default Next.js framework preset.
6. Configure `NEXT_PUBLIC_SITE_URL` to the production domain.

## Architecture

- `app/[locale]`: localized storefront routes
- `components/home`: luxury homepage sections
- `components/products`: product cards and commerce UI
- `components/cart`: local cart provider and cart screen
- `components/ui`: Shadcn-style primitives
- `lib/products.ts`: sample catalog and recommendation helpers
- `lib/integrations`: Supabase, Stripe, Shopify, CJ seams
- `supabase/schema.sql`: initial database structure

## Next Production Steps

- Add RLS policies and real auth actions.
- Enforce super-admin middleware and role checks.
- Implement Stripe Checkout Session creation.
- Add product variant support.
- Build protected admin middleware.
- Replace sample imagery with product photography.
- Add Arabic dictionaries for all UI copy.
