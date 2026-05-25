import Link from "next/link";
import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "96500000000";

  return (
    <footer className="mt-20 border-t bg-zeus-ink text-zeus-pearl">
      <div className="container-lux grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="relative h-20 w-56 overflow-hidden rounded-xl border border-white/10">
            <Image src="/images/house-of-zeus-logo.png" alt="House of Zeus.ai logo" fill className="object-cover" sizes="224px" />
          </div>
          <p className="mt-5 font-serif text-3xl font-semibold">House of Zeus.ai</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/68">
            Premium pet lifestyle for warm GCC homes, inspired by Zeus, Ouzo, Diva, Blacky, Tiger, and Swaida.
          </p>
          <form className="mt-6 flex max-w-md gap-2">
            <Input placeholder="Email for private drops" className="border-white/15 bg-white/8 text-white placeholder:text-white/45" />
            <Button variant="secondary">Join</Button>
          </form>
        </div>
        <div className="grid gap-3 text-sm text-white/70">
          <p className="font-medium text-white">Experience</p>
          <Link href="/en/collections/cooling-essentials">Cooling Essentials</Link>
          <Link href="/en/track">Order Tracking</Link>
          <Link href="/en/account">Customer Account</Link>
          <Link href="/en/admin">Admin</Link>
        </div>
        <div className="grid content-start gap-3 text-sm text-white/70">
          <p className="font-medium text-white">Concierge</p>
          <a className="inline-flex items-center gap-2" href={`https://wa.me/${whatsapp}`}>
            <MessageCircle className="size-4" /> WhatsApp Kuwait support
          </a>
          <a className="inline-flex items-center gap-2" href="https://instagram.com">
            <Instagram className="size-4" /> Instagram and TikTok ready
          </a>
          <p>Kuwait delivery: 2-4 days on stocked pieces</p>
        </div>
      </div>
    </footer>
  );
}
