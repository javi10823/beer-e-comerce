"use client";
import { ArrowBack, Elipsis } from "@/components/Icons";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center mt-10 mx-6  ">
      <button className="white-button" onClick={() => router.push("/")}>
        <ArrowBack />
      </button>
      <h2>Detail</h2>
      <button className="white-button">
        <Elipsis />
      </button>
    </div>
  );
};

export default Header;
