"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/products/product-card";
import { collections, products } from "@/lib/products";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

export function HomeClient() {
  return (
    <div>
      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
        <Image
          src="/images/house-of-pets.png"
          alt="Zeus, Ouzo, Diva, Blacky, Tiger, and Swaida inspired pet lifestyle scene"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zeus-pearl via-zeus-pearl/78 to-transparent" />
        <div className="container-lux relative flex min-h-[calc(100svh-4rem)] items-center pb-24 pt-16">
          <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }} className="max-w-2xl">
            <motion.div variants={fadeUp}>
              <Badge className="border-zeus-gold/50 bg-zeus-pearl/75 text-zeus-ink">Kuwait-first luxury pet lifestyle</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="mt-6 font-serif text-5xl font-semibold leading-[0.96] text-balance md:text-7xl">
              House of Zeus.ai
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-7 text-zeus-ink/72 md:text-lg">
              Premium essentials for dogs and cats who are family, styled for warm GCC homes and inspired by Zeus, Ouzo,
              Diva, Blacky, Tiger, and Swaida.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/en/collections/cooling-essentials">
                  Shop summer essentials <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "96500000000"}`}>
                  <MessageCircle className="size-4" /> Concierge
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="container-lux -mt-12 grid gap-3 md:grid-cols-3">
        {["Kuwait shipping support", "AI recommendation ready", "Shopify and CJ sync ready"].map((item) => (
          <div key={item} className="glass rounded-xl border border-black/10 p-4 shadow-soft">
            <BadgeCheck className="mb-3 size-5 text-zeus-sage" />
            <p className="text-sm font-medium">{item}</p>
          </div>
        ))}
      </section>

      <section className="container-lux py-20">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zeus-clay">Curated collections</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold">Built for GCC pet life</h2>
          </div>
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href="/en/collections/cooling-essentials">View all</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/en/collections/${collection.slug}`}
              className="rounded-xl border bg-white/55 p-5 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <p className="font-serif text-2xl font-semibold">{collection.name}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{collection.tone}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-zeus-ink py-20 text-zeus-pearl">
        <div className="container-lux grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Sparkles className="size-6 text-zeus-gold" />
            <h2 className="mt-5 font-serif text-4xl font-semibold">Summer cooling essentials</h2>
            <p className="mt-4 leading-7 text-white/68">
              Kuwait heat changes the pet routine. This edit focuses on breathable walks, cool rest, hydration,
              and elevated accessories that still feel beautiful at home.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {products.slice(0, 2).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-lux py-20">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-zeus-clay">Luxury accessories</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold">Quietly premium, never overdone</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {products.slice(2, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="container-lux grid gap-8 py-16 lg:grid-cols-[1fr_1.1fr]">
        <div className="rounded-xl bg-zeus-sage p-8 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-white/75">Meet Zeus & Friends</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold">A brand built around real pets, not anonymous SKUs.</h2>
          <p className="mt-5 leading-7 text-white/78">
            Zeus brings confidence. Ouzo brings warmth. Diva, Blacky, Tiger, and Swaida bring personality,
            softness, mischief, and grace. Their world shapes every collection.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["Zeus", "Ouzo", "Diva", "Blacky", "Tiger", "Swaida"].map((name, index) => (
            <div key={name} className="rounded-xl border bg-white/60 p-5">
              <p className="font-serif text-2xl font-semibold">{name}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {index < 2 ? "Dog lifestyle muse" : "Cat lifestyle muse"}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-lux py-16">
        <div className="grid gap-3 md:grid-cols-5">
          {["Morning walk", "Cooling edit", "Chalet weekend", "Grooming ritual", "Cat corner"].map((label) => (
            <div key={label} className="aspect-[3/4] rounded-xl border bg-gradient-to-br from-zeus-pearl via-white to-zeus-sand p-4">
              <p className="text-sm font-medium">{label}</p>
              <p className="mt-2 text-xs text-muted-foreground">TikTok and Instagram product story slot</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-lux rounded-xl bg-white/60 p-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-zeus-clay">Customer notes</p>
        <blockquote className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-semibold">
          “Finally, pet essentials that look right in a Kuwait home and feel thoughtful for the pets themselves.”
        </blockquote>
        <p className="mt-4 text-sm text-muted-foreground">Early customer, Kuwait City</p>
      </section>
    </div>
  );
}
