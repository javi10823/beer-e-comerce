import stockData from "@/mock/stock-price";

import { NextResponse } from "next/server";

export const GET = async (
  _req: Request,
  { params }: { params: { code: keyof typeof stockData } }
) => {
  const stock = stockData[params.code];

  if (!stock)
    return NextResponse.json({ message: "Product not found" }, { status: 404 });

  return NextResponse.json({ ...stock });
};
