import { SearchIcon } from "@heroicons/react/solid";

export const SearchInput = ({ search, handleSearch }) => {
  return (
    <div className="w-3/4 mx-auto relative">
      <SearchIcon className="h-4 w-4 absolute right-1 top-1" />
      <input
        autoComplete="off"
        value={search}
        onChange={(e) => handleSearch(e)}
        className="focus:outline-none ring-1 ring-green-200 text-sm mx-auto w-full rounded-md px-2"
      />
    </div>
  );
};
