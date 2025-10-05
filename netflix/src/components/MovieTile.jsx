import React from 'react'

const MovieTile = ({imagesrc, title}) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-[30%] md:w-[20%] lg:w-[17%] bg-[#141414] rounded-md overflow-hidden cursor-pointer hover:scale-105 transform transition duration-300">
      <img
        src={imagesrc}
        alt="movie poster"
        className="w-full h-32 sm:h-36 md:h-40 object-cover"
      />
     <p className="text-xs sm:text-sm md:text-base font-medium text-white text-center p-1 truncate ">
  {title}
</p>
    </div>
  )
}

export default MovieTile
