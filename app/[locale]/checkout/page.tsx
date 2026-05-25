import { Lock, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CheckoutPage() {
  return (
    <div className="container-lux py-12">
      <h1 className="font-serif text-5xl font-semibold">Checkout</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        <form className="grid gap-6 rounded-xl border bg-white/65 p-6">
          <section>
            <h2 className="font-serif text-2xl font-semibold">Contact</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <Input placeholder="Email address" type="email" />
              <Input placeholder="Mobile number" type="tel" />
            </div>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-semibold">Kuwait delivery</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <Input placeholder="Full name" />
              <Input placeholder="Area" />
              <Input placeholder="Block" />
              <Input placeholder="Street" />
              <Input placeholder="House / building" />
              <Input placeholder="Delivery notes" />
            </div>
          </section>
          <Button type="button" className="w-full md:w-fit">
            <Lock className="size-4" /> Continue to secure Stripe payment
          </Button>
        </form>
        <aside className="h-fit rounded-xl border bg-zeus-ink p-6 text-zeus-pearl">
          <p className="font-serif text-2xl font-semibold">Luxury concierge checkout</p>
          <div className="mt-6 grid gap-4 text-sm text-white/72">
            <p className="flex gap-3"><MapPin className="size-5 text-zeus-gold" /> Kuwait address fields are prepared for local delivery workflows.</p>
            <p className="flex gap-3"><Lock className="size-5 text-zeus-gold" /> Stripe Checkout route is ready for live keys.</p>
            <p className="flex gap-3"><MessageCircle className="size-5 text-zeus-gold" /> WhatsApp handoff can support high-touch orders.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
