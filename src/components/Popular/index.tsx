"use client";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { formatPrice } from "@/utils";
import { useRouter } from "next/navigation";
import { LoadingContainer } from "..";
import { ResumeProduct } from "@/mock/types";

const Popular = () => {
  const [products, setProducts] = useState<ResumeProduct[]>();
  const router = useRouter();

  useEffect(() => {
    axios.get("http://localhost:3000/api/product/resume").then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  const renderProducts = useMemo(() => {
    const onClickPlus = (id: number, brand: string) => {
      const formatedBrand = brand.toLowerCase().replace(" ", "-");
      router.push(`/${id}-${formatedBrand}`);
    };

    if (!products) return <></>;
    return products.map(({ id, brand, image, stock }, index) => (
      <div
        key={id}
        className={`bg-white pl-4 pt-4 overflow-hidden rounded-xl w-[48%] ${
          index % 2 !== 0 ? "rounded-tl-[2rem]" : "rounded-tr-[2rem]"
        }`}
      >
        <p className="font-medium text-dark">{brand}</p>
        <div className="flex justify-center w-full h-[120px]">
          <Image
            src={image}
            width={120}
            height={120}
            alt={brand}
            className="object-contain"
          />
        </div>
        {stock?.stock > 0 && (
          <div className="flex justify-between items-center">
            <p className="font-medium text-dark text-base">
              {formatPrice(stock.price)}
            </p>
            <button
              onClick={() => onClickPlus(id, brand)}
              className="bg-primary size-10 flex justify-center items-center rounded-tl-lg"
            >
              <p className="text-white text-2xl -mt-1">+</p>
            </button>
          </div>
        )}
      </div>
    ));
  }, [products, router]);

  const ProductSkeleton = () => {
    return [1, 2, 3, 4].map((item) => (
      <div
        key={item}
        className={`skeleton pl-4 pt-4 overflow-hidden h-52 rounded-xl w-[48%] ${
          item % 2 !== 0 ? "rounded-tl-[2rem]" : "rounded-tr-[2rem]"
        }`}
      ></div>
    ));
  };

  return (
    <>
      <div className="flex mb-4 justify-between items-center">
        <h2>Popular</h2>
        <p className="text-sm-gray">See All</p>
      </div>
      <div className="flex justify-between gap-y-4 flex-wrap">
        <LoadingContainer isLoading={!products} fallback={<ProductSkeleton />}>
          {renderProducts}
        </LoadingContainer>
      </div>
    </>
  );
};

export default Popular;
