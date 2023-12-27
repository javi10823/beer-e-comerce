"use client";
import { useEffect, useMemo, useState } from "react";
import { formatPrice } from "@/utils";
import axios from "axios";
import Image from "next/image";
import { LoadingContainer, TruncatedText } from "@/components";
import {
  DetailsSkeleton,
  DescriptionSkeleton,
  SizeSkeleton,
} from "./Skeletons";
import Footer from "./Footer";
import { Product, Stock } from "@/mock/types";

interface Props {
  params: {
    product: string;
  };
}

const PDP = ({ params }: Props) => {
  const [product, setProduct] = useState<Product>();
  const [stockData, setStockData] = useState<Stock>();
  const [selected, setSelected] = useState<string>();

  const productInfo = useMemo(() => {
    const [id, brand] = params.product.split("-");

    return { id, brand };
  }, [params.product]);

  useEffect(() => {
    if (productInfo.id) {
      axios
        .get(`http://localhost:3000/api/product/${productInfo.id}`)
        .then((response) => {
          setProduct(response.data);
          setSelected(response.data?.skus[0]?.code);
        });
    }
  }, [productInfo.id]);

  useEffect(() => {
    const getStock = () => {
      axios
        .get(`http://localhost:3000/api/stock-price/${selected}`)
        .then((response) => {
          setStockData(response.data);
        });
    };

    if (selected) {
      getStock();

      const interval = setInterval(() => {
        getStock();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [selected]);

  const isLoading = useMemo(() => !product || !stockData, [product, stockData]);

  const renderSizes = useMemo(() => {
    const getStyles = (code: string) => {
      if (selected === code) return "border-primary text-primary";
      return "border-medium text-medium";
    };

    if (!product?.skus) return <></>;
    return product.skus.map((item) => (
      <button
        onClick={() => setSelected(item.code)}
        className={`border-[1px] ${getStyles(item.code)}  rounded-2xl px-4`}
        key={item.code}
      >
        {item.name}
      </button>
    ));
  }, [product?.skus, selected]);

  return (
    <>
      <div className="flex justify-center w-full h-60">
        <LoadingContainer
          isLoading={isLoading}
          fallback={<div className="size-60 skeleton" />}
        >
          <Image
            src={product?.image || ""}
            width={240}
            height={240}
            alt={product?.brand || ""}
            className="object-contain"
          />
        </LoadingContainer>
      </div>
      <div className="bg-white px-6 pt-11 mt-3 rounded-t-[48px] mb-[90px] pb-2 overflow-scroll flex flex-col flex-grow">
        <LoadingContainer isLoading={isLoading} fallback={<DetailsSkeleton />}>
          <div className="flex justify-between items-center">
            <h1>{product?.brand}</h1>
            <h1 className="text-primary">
              {stockData?.price && formatPrice(stockData?.price)}
            </h1>
          </div>
          <p className="text-medium text-sm leading-4 mt-1 mb-7">
            Origin: {product?.origin} | Stock: {stockData?.stock}
          </p>
        </LoadingContainer>

        <p className=" text-base leading-5 text-dark font-bold mb-2">
          Description
        </p>
        <LoadingContainer
          isLoading={isLoading}
          fallback={<DescriptionSkeleton />}
        >
          <TruncatedText text={product?.information || ""} max={190} />
        </LoadingContainer>

        <p className=" text-base leading-5 text-dark font-bold mb-2 mt-5">
          Size
        </p>
        <div className="flex gap-4 flex-wrap">
          <LoadingContainer isLoading={isLoading} fallback={<SizeSkeleton />}>
            {renderSizes}
          </LoadingContainer>
        </div>
      </div>
      <Footer disabled={isLoading || stockData!.stock < 1} />
    </>
  );
};

export default PDP;
