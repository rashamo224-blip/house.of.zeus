import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number, currency = "KWD") {
  return new Intl.NumberFormat("en-KW", {
    style: "currency",
    currency,
    maximumFractionDigits: 3
  }).format(amount);
}
