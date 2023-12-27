import productsData from "@/mock/products";

import { NextResponse } from "next/server";

export const GET = async (
  _req: Request,
  { params }: { params: { id: string } }
) => {
  const product = productsData.find(({ id }) => id === parseInt(params.id));

  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({ ...product });
};
