import React, { useRef } from "react";
import MovieTile from "./MovieTile";

const MovieRow = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="px-[4%] relative z-20 group mb-8 scrollbar-hide ">
      <p className="text-white font-medium text-[1.625rem] mb-2">{title}</p>

      {/* Left Fade + Arrow */} 
      <div className="absolute left-0 top-0 h-85% w-16 bg-gradient-to-r from-black/80 to-transparent z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <button
        onClick={() => scroll("left")}
        className="text-3xl hidden group-hover:flex items-center justify-center absolute left-4 top-32 -translate-y-1/2 w-16 h-40 bg-black/50 hover:bg-black/70 hover:text-4xl text-white rounded-l-lg z-30 transition-all"
      >
        ❮
      </button>

      {/* Scrollable Movie Row */}
      <div
        ref={rowRef}
        className="flex space-x-3 overflow-x-scroll scrollbar-hide scroll-smooth"
      >
        {movies.map((movie) => (
          <MovieTile
            key={movie.id}
            imagesrc={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            title={movie.title || movie.name}
          />
        ))}
      </div>

      {/* Right Fade + Arrow */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/80 to-transparent z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <button
        onClick={() => scroll("right")}
        className="hidden group-hover:flex items-center justify-center absolute right-4 top-32 -translate-y-1/2 w-16 h-40 bg-black/50 hover:bg-black/70 text-white rounded-r-lg z-30 transition-all duration-300 text-3xl hover:text-4xl"
      >
        ❯
      </button>
    </div>
  );
};

export default MovieRow;
