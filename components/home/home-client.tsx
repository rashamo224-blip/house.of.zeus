"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/products/product-card";
import { collections, products } from "@/lib/products";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

const family = [
  ["Zeus", "The king of the house. Fluffy, calm, and always supervising."],
  ["Ouzo", "Tiny, dramatic, affectionate, and impossible not to love."],
  ["Diva", "Luxury is simply part of her personality."],
  ["Blacky", "Elegant, mysterious, and silently judging everyone."],
  ["Tiger", "Calm, lovable, and endlessly gentle beneath the fluff."],
  ["Swaida", "Quiet chaos wrapped in velvet fur."]
];

const whyUs = [
  ["Carefully Curated", "Every item is personally selected for comfort, quality, and aesthetics."],
  ["Designed for Gulf Living", "Products thoughtfully chosen with Kuwait's climate and lifestyle in mind."],
  ["Premium Comfort", "Because pets deserve spaces as beautiful and comforting as our own homes."],
  ["Fast & Caring Support", "We're pet parents too - and we genuinely care about every order."]
];

const mobileBanners = [
  "Designed for Kuwait summers.",
  "Luxury comfort for indoor pets.",
  "Curated for Gulf homes.",
  "Because pets are family."
];

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
              House of Zeus
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-7 text-zeus-ink/72 md:text-lg">
              Luxury comfort for Kuwait's most loved pets.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-sm leading-7 text-zeus-ink/68 md:text-base">
              Thoughtfully curated pet essentials inspired by Zeus, Ouzo, Diva, Blacky, Tiger, and Swaida - designed for
              Gulf homes and pets who deserve nothing but the very best.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/en/collections/cooling-essentials">
                  Shop Collection <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/en/collections/cooling-essentials">Explore Summer Essentials</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="container-lux grid gap-3 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {mobileBanners.map((banner) => (
          <div key={banner} className="rounded-xl border bg-white/60 px-4 py-3 text-sm font-medium">
            {banner}
          </div>
        ))}
      </section>

      <section className="container-lux grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-zeus-clay">Brand story</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold">More Than a Pet Store</h2>
        </div>
        <div className="space-y-5 leading-7 text-muted-foreground">
          <p>House of Zeus was born from a home filled with love, fur, personality, and a few spoiled little rulers.</p>
          <p>
            Inspired by our own pets, we carefully curate elegant, practical, and comforting essentials designed for
            modern pet living in Kuwait and across the Gulf.
          </p>
          <p>
            From cooling comfort for warm summers to cozy luxury accessories, every product is selected with care,
            aesthetics, and quality in mind.
          </p>
        </div>
      </section>

      <section className="container-lux py-20">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zeus-clay">Featured collections</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold">Curated for Gulf homes</h2>
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
            <h2 className="mt-5 font-serif text-4xl font-semibold">Designed for Gulf Summers</h2>
            <p className="mt-4 leading-7 text-white/68">
              Kuwait summers can be intense - especially for indoor pets with thick fur and sensitive paws.
            </p>
            <p className="mt-4 leading-7 text-white/68">
              That's why we focus on cooling comfort, breathable fabrics, calming spaces, and thoughtfully selected
              products designed specifically for Gulf living.
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
          <p className="text-sm uppercase tracking-[0.2em] text-white/75">Meet the family</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold">Meet the Family Behind House of Zeus</h2>
          <p className="mt-5 leading-7 text-white/78">
            Every collection begins with the pets who made this house feel like home.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {family.map(([name, text]) => (
            <div key={name} className="rounded-xl border bg-white/60 p-5">
              <p className="font-serif text-2xl font-semibold">{name}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-lux py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-zeus-clay">Life at House of Zeus</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold">Small moments, spoiled pets, and everyday luxury.</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-5">
          {["Morning walk", "Cooling edit", "Chalet weekend", "Grooming ritual", "Cat corner"].map((label) => (
            <div key={label} className="aspect-[3/4] rounded-xl border bg-gradient-to-br from-zeus-pearl via-white to-zeus-sand p-4">
              <p className="text-sm font-medium">{label}</p>
              <p className="mt-2 text-xs text-muted-foreground">TikTok and Instagram product story slot</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-lux py-16">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-zeus-clay">Why choose us</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold">Why Pet Parents Love House of Zeus</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {whyUs.map(([title, text]) => (
            <div key={title} className="rounded-xl border bg-white/60 p-5">
              <p className="font-serif text-2xl font-semibold">{title}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-lux rounded-xl bg-white/60 p-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-zeus-clay">Join the House of Zeus Family</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold">
          Be the first to discover new collections, seasonal essentials, and exclusive pet lifestyle updates.
        </h2>
        <Button className="mt-6" variant="default">Join the Family</Button>
      </section>
    </div>
  );
}
