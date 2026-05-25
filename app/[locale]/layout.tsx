import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { directionByLocale, locales, type Locale } from "@/lib/i18n";

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div dir={directionByLocale[locale]}>
      <AppShell>{children}</AppShell>
    </div>
  );
}
