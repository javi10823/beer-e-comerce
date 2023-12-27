import { Search } from "../Icons";

const SearchBar = () => {
  return (
    <div className="bg-white w-full max-w-screen-md rounded-xl mb-8 mt-6 pl-4 h-12 flex items-center text-sm text-dark leading-4">
      <Search />
      <input
        type="text"
        className="h-full pl-2 w-full ml-2 rounded-r-xl"
        placeholder="Search burger, pizza, drink, or ect..."
      />
    </div>
  );
};

export default SearchBar;
