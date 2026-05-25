export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const directionByLocale: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl"
};

export const dictionary = {
  en: {
    shipping: "Kuwait same-week delivery",
    whatsapp: "WhatsApp support",
    checkout: "Checkout"
  },
  ar: {
    shipping: "توصيل داخل الكويت خلال الأسبوع",
    whatsapp: "دعم واتساب",
    checkout: "الدفع"
  }
} satisfies Record<Locale, Record<string, string>>;
