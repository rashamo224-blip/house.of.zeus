import Link from "next/link";
import { BarChart3, Boxes, Crown, RefreshCw, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const cards = [
  { label: "Orders", value: "18", icon: BarChart3 },
  { label: "Products", value: "6 sample SKUs", icon: Boxes },
  { label: "CJ sync", value: "Ready", icon: RefreshCw },
  { label: "Auth", value: "Supabase", icon: ShieldCheck }
];

export default function AdminPage() {
  return (
    <div className="container-lux py-12">
      <Badge>Protected route candidate</Badge>
      <h1 className="mt-4 font-serif text-5xl font-semibold">Admin dashboard</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Operational command center for product curation, CJdropshipping sync review, order status, and content merchandising.
      </p>
      <Button asChild className="mt-6" variant="outline">
        <Link href="/en/super-admin">
          <Crown className="size-4" /> Super admin controls
        </Link>
      </Button>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {cards.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-xl border bg-white/65 p-5">
            <Icon className="size-5 text-zeus-clay" />
            <p className="mt-5 text-sm text-muted-foreground">{label}</p>
            <p className="mt-1 font-serif text-2xl font-semibold">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-xl border bg-white/65 p-6">
        <h2 className="font-serif text-2xl font-semibold">CJdropshipping sync structure</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          The API route can authenticate with CJ, fetch selected SKUs, normalize pricing and imagery, then upsert products into Supabase.
          Keep manual luxury curation as the approval layer before publishing.
        </p>
        <Button className="mt-5" variant="outline">
          <RefreshCw className="size-4" /> Run sync preview
        </Button>
      </div>
    </div>
  );
}
