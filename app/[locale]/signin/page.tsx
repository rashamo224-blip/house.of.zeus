import Link from "next/link";
import { LockKeyhole, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Sign in",
  "Sign in to your House of Zeus.ai customer account.",
  "/en/signin"
);

export default function SignInPage() {
  return (
    <div className="container-lux grid gap-8 py-12 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <LockKeyhole className="size-6 text-zeus-clay" />
        <h1 className="mt-4 font-serif text-5xl font-semibold">Sign in</h1>
        <p className="mt-4 max-w-md leading-7 text-muted-foreground">
          Access orders, saved pets, wishlist, delivery addresses, and Zeus.ai recommendations.
        </p>
      </div>
      <form className="rounded-xl border bg-white/65 p-6">
        <h2 className="font-serif text-2xl font-semibold">Customer access</h2>
        <div className="mt-5 grid gap-3">
          <Input type="email" placeholder="Email address" autoComplete="email" />
          <Input type="password" placeholder="Password" autoComplete="current-password" />
          <Button type="button">
            <Mail className="size-4" /> Sign in
          </Button>
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          New to House of Zeus.ai?{" "}
          <Link href="/en/signup" className="font-medium text-foreground underline underline-offset-4">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
}
