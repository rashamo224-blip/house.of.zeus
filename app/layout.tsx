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
    default: "House of Zeus | Luxury Comfort for Kuwait Pets",
    template: "%s | House of Zeus"
  },
  description:
    "Luxury comfort for Kuwait's most loved pets. Curated essentials inspired by Zeus, Ouzo, Diva, Blacky, Tiger, and Swaida.",
  applicationName: "House of Zeus",
  keywords: ["luxury pet ecommerce Kuwait", "GCC pet boutique", "pet cooling essentials", "House of Zeus"],
  authors: [{ name: "House of Zeus" }],
  openGraph: {
    title: "House of Zeus",
    description: "Luxury comfort for Kuwait's most loved pets.",
    url: "/en",
    siteName: "House of Zeus",
    images: [{ url: "/images/house-of-pets.png", width: 1400, height: 1118 }],
    locale: "en_KW",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "House of Zeus",
    description: "Luxury comfort for Kuwait's most loved pets.",
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
