import { useEffect, useState } from "react";
import { getSearchResults } from "../utils/tmdbapi";

export default function HeaderSearch({searchValue, setSearchValue } ) {
  const [isSearching, setIsSearching] = useState(false);
  return (

    <div className="flex items-center space-x-2 relative">
      {/* Search Input */}

      <input
        type="text"
        placeholder="Titles, people, genre..."
        className={`bg-black/70 text-white px-4 py-2 rounded-sm border border-white outline-none transition-all duration-300 ease-in-out
    ${isSearching ? "w-80 opacity-100" : "w-0 opacity-0 px-0"}`}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}

      />


      {/* Toggle Icons */}
      {!isSearching ? (
        <svg
          onClick={() => setIsSearching(true)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-white cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      ) : (
        <svg
          onClick={() => setIsSearching(false)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
     
    </div>
  );
}
