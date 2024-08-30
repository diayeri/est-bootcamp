import React from "react";

const currencyConfig = {
  USD: { locale: "en", currency: "USD", symbol: "$" },
  KRW: { locale: "ko", currency: "KRW", symbol: "₩" },
  JPY: { locale: "ja", currency: "JPY", symbol: "¥" },
  EUR: { locale: "it", currency: "EUR", symbol: "€" },
};

export default function PriceFormatter({ price, currencyCode }) {
  const config = currencyConfig[currencyCode] || currencyCode.KRW;

  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.currency,
    minimunFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
