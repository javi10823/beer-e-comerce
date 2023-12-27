import stockData from "@/mock/stock-price";
import productsData from "@/mock/products";

import { NextResponse } from "next/server";

export const GET = async () => {
  const products = productsData.map(({ id, brand, image, skus }) => {
    let stock;
    if (skus.length > 0) {
      const code = skus[0].code as unknown as keyof typeof stockData;
      stock = stockData[code];
    }

    return {
      id,
      brand,
      image,
      stock,
    };
  });

  return NextResponse.json({ products });
};
