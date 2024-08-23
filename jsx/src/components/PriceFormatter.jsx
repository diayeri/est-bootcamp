import React from "react";

const currencyConfig = {
  USD: { locale: "en", currency: "USD", symbol: "$" },
  KRW: { locale: "ko", currency: "KRW", symbol: "₩" },
  JPY: { locale: "ja", currency: "JPY", symbol: "¥" },
};

const formatPrice = (price, currencyCode) => {};

export default function PriceFormatter({ price, currencyCode }) {
  const formattedPrice = formatPrice(price, currencyCode);
  return <div></div>;
}
