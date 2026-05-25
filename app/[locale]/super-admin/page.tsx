import { Crown, KeyRound, ShieldCheck, UsersRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const controls = [
  { label: "Role management", value: "Owner, super_admin, admin, support", icon: UsersRound },
  { label: "Protected operations", value: "Product publishing, refunds, CJ sync approval", icon: ShieldCheck },
  { label: "Security checks", value: "MFA, audit logs, service-role isolation", icon: KeyRound }
];

export default function SuperAdminPage() {
  return (
    <div className="container-lux py-12">
      <Badge>Super admin control</Badge>
      <Crown className="mt-6 size-7 text-zeus-gold" />
      <h1 className="mt-4 font-serif text-5xl font-semibold">Super admin console</h1>
      <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
        A dedicated owner-level control surface for permissions, catalog approvals, storefront operations,
        integrations, and sensitive commerce actions.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {controls.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-xl border bg-white/65 p-5">
            <Icon className="size-5 text-zeus-clay" />
            <p className="mt-5 text-sm text-muted-foreground">{label}</p>
            <p className="mt-2 text-sm font-medium leading-6">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-xl border bg-zeus-ink p-6 text-zeus-pearl">
        <h2 className="font-serif text-2xl font-semibold">Launch rule</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-white/72">
          Super admin routes should be protected by Supabase auth, role claims, and server-side checks before
          live use. Never expose service-role keys to the browser.
        </p>
        <Button className="mt-5" variant="secondary">Review access matrix</Button>
      </div>
    </div>
  );
}
