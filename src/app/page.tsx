import { Categories, Popular, SearchBar } from "@/components";
import { Menu } from "@/components/Icons";

import Image from "next/image";

const Home = () => (
  <main className="main-container bg-background pt-10 pl-6">
    <div className="flex justify-between mr-5 mb-4">
      <button className="white-button">
        <Menu />
      </button>
      <Image
        src="/user.jpg"
        width={40}
        height={40}
        className="bg-white size-10 rounded-full"
        alt=""
      />
    </div>
    <div className="mr-6 pb-4">
      <div>
        <p className="mb-1 text-mediumDark leading-5">Hi Mr. Michael,</p>
        <h1>Welcome Back!</h1>
      </div>
      <div className="md:flex">
        <SearchBar />
        <Categories />
      </div>
      <Popular />
    </div>
  </main>
);

export default Home;
