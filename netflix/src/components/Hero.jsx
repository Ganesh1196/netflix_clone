import React, { useEffect, useState } from 'react'
import { getMovieVideo, getTvVideo } from '../utils/tmdbapi'


const Hero = ({ heroItem }) => {
  const [movieVideo, setMovieVideo] = useState([])


  useEffect(() => {
    if (!heroItem) return
    async function fetchVideoData() {
      let videos = []
      if (heroItem.media_type === "movie") {
        videos = await getMovieVideo(heroItem.id)
      }
      else if (heroItem.media_type === "tv") {
        videos = await getTvVideo(heroItem.id)
      }

      setMovieVideo(videos)
    }
    fetchVideoData()
  }, [heroItem])
console.log(movieVideo[0]?.key)
  return (
    <div className="w-full h-[50rem]">
      {/* Video */}
      <iframe
  src={`https://www.youtube-nocookie.com/embed/${movieVideo[0]?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=${movieVideo[0]?.key}`}
  allow="autoplay"
  className="absolute top-0 left-0 w-full h-full object-cover"
></iframe>

  {/* Gradient overlay */ }
  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#141414] via-transparent to-transparent pointer-events-none"></div>
<div className='absolute bottom-80 left-28 '>
  {/* Title */ }
  <h1 className="text-[2.5rem] md:text-6xl font-bold text-white">
    {heroItem?.name || heroItem?.title}
  </h1>
    <p className="mt-4 mb-3 text-white font-normal leading-normal line-clamp-3 max-w-[40%] text-[1.2vw]">{heroItem?.overview}</p>
  {/* Buttons */ }
  <div className=" left-28 flex space-x-4">
    {/* Play Button */}
    <button className="flex items-center bg-white text-black px-8 py-3 text-xl font-medium rounded hover:bg-gray-200 transition">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-8 h-8 mr-3">
        <path
          fill="#000"
          d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"
        />
      </svg>
      Play
    </button>

    {/* More Info Button */}
    <button className="flex items-center bg-[rgba(109,109,110,0.7)] text-white px-8 py-3 text-xl font-normal rounded hover:bg-[rgba(109,109,110,0.5)] transition">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-8 h-8 mr-3">
        <path
          fill="#fff"
          d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM280 400C266.7 400 256 410.7 256 424C256 437.3 266.7 448 280 448L360 448C373.3 448 384 437.3 384 424C384 410.7 373.3 400 360 400L352 400L352 312C352 298.7 341.3 288 328 288L280 288C266.7 288 256 298.7 256 312C256 325.3 266.7 336 280 336L304 336L304 400L280 400zM320 256C337.7 256 352 241.7 352 224C352 206.3 337.7 192 320 192C302.3 192 288 206.3 288 224C288 241.7 302.3 256 320 256z"
        />
      </svg>
      More Info
    </button>
  </div>
  </div>
</div >

  )
}

export default Hero
