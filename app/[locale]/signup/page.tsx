import Link from "next/link";
import { Sparkles, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Sign up",
  "Create a House of Zeus customer account.",
  "/en/signup"
);

export default function SignUpPage() {
  return (
    <div className="container-lux grid gap-8 py-12 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <UserPlus className="size-6 text-zeus-sage" />
        <h1 className="mt-4 font-serif text-5xl font-semibold">Create account</h1>
        <p className="mt-4 max-w-md leading-7 text-muted-foreground">
          Build a pet profile for better product recommendations, Kuwait delivery within 14 days, and early access to private drops.
        </p>
      </div>
      <form className="rounded-xl border bg-white/65 p-6">
        <h2 className="font-serif text-2xl font-semibold">Join House of Zeus</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <Input placeholder="Full name" autoComplete="name" />
          <Input type="tel" placeholder="Kuwait mobile number" autoComplete="tel" />
          <Input type="email" placeholder="Email address" autoComplete="email" />
          <Input type="password" placeholder="Password" autoComplete="new-password" />
        </div>
        <Button type="button" className="mt-5">
          <Sparkles className="size-4" /> Create account
        </Button>
        <p className="mt-5 text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/en/signin" className="font-medium text-foreground underline underline-offset-4">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
