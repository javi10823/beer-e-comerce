"use client";
import { useState } from "react";
import Image from "next/image";

const options = [
  { title: "All" },
  { title: "Beer", img: "/Beer.png" },
  { title: "Wine", img: "/Wine-glass.png" },
];

const Categories = () => {
  const [selected, setSelected] = useState("All");

  const getButtonStyle = (item: string) => {
    if (item === selected) return "bg-primary text-white";
    return "bg-white text-dark";
  };

  return (
    <div className="mb-6 md:ml-4 md:-mt-5">
      <div className="flex mb-4 justify-between items-center">
        <h2>Drink Category</h2>
        <p className="text-sm-gray" onClick={() => setSelected("All")}>
          See All
        </p>
      </div>
      <div className="flex gap-4">
        {options.map(({ title, img }) => (
          <button
            key={title}
            onClick={() => setSelected(title)}
            className={`${getButtonStyle(
              title
            )} rounded-xl px-5 h-12 font-medium	text-base leading-4 flex items-center`}
          >
            {img && (
              <Image src={img} width={20} height={20} alt="" className="mr-3" />
            )}
            {title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
