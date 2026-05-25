import Link from "next/link";
import { LogIn, Package, UserRound, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AccountPage() {
  return (
    <div className="container-lux py-12">
      <UserRound className="size-6" />
      <h1 className="mt-4 font-serif text-5xl font-semibold">Customer account</h1>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/en/signin">
            <LogIn className="size-4" /> Sign in
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/en/signup">
            <UserPlus className="size-4" /> Sign up
          </Link>
        </Button>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border bg-white/65 p-6">
          <h2 className="font-serif text-2xl font-semibold">Auth-ready account center</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Sign-in and sign-up routes are separated so every platform has a clear customer onboarding path.
            Wire these forms to Supabase email/password or magic-link auth when keys are configured.
          </p>
        </div>
        <div className="rounded-xl border bg-white/65 p-6">
          <Package className="size-5 text-zeus-sage" />
          <h2 className="mt-4 font-serif text-2xl font-semibold">Orders and care profile</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Store pet preferences, saved addresses, order history, and recommendation signals for Zeus.ai personalization.
          </p>
          <Button asChild variant="outline" className="mt-5">
            <Link href="/en/orders">View sample orders</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
