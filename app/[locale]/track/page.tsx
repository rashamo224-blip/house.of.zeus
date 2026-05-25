import { Search, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TrackPage() {
  return (
    <div className="container-lux py-12">
      <Truck className="size-6 text-zeus-sage" />
      <h1 className="mt-4 font-serif text-5xl font-semibold">Track your order</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Prepared for Kuwait courier updates, CJdropshipping tracking references, and Shopify/Supabase order records.
      </p>
      <form className="mt-8 flex max-w-xl flex-col gap-3 rounded-xl border bg-white/65 p-5 sm:flex-row">
        <Input placeholder="Order number or tracking code" />
        <Button type="button">
          <Search className="size-4" /> Track
        </Button>
      </form>
    </div>
  );
}
