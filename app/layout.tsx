import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/cart-provider";
import { ThemeProvider } from "@/components/theme/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "House of Zeus.ai | Luxury Pet Lifestyle in Kuwait",
    template: "%s | House of Zeus.ai"
  },
  description:
    "Luxury GCC pet lifestyle essentials for dogs and cats, curated for Kuwait homes, travel, grooming, cooling, and emotional everyday rituals.",
  applicationName: "House of Zeus.ai",
  keywords: ["luxury pet ecommerce Kuwait", "GCC pet boutique", "pet cooling essentials", "House of Zeus.ai"],
  authors: [{ name: "House of Zeus.ai" }],
  openGraph: {
    title: "House of Zeus.ai",
    description: "Premium pet lifestyle for Kuwait and the GCC.",
    url: "/en",
    siteName: "House of Zeus.ai",
    images: [{ url: "/images/house-of-pets.png", width: 1400, height: 1118 }],
    locale: "en_KW",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "House of Zeus.ai",
    description: "Premium pet lifestyle for Kuwait and the GCC.",
    images: ["/images/house-of-pets.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f0e8"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <ThemeProvider>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
