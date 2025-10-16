import React, { useEffect, useState } from 'react'
import { getMovieVideo, getTvVideo } from '../utils/tmdbapi'


const Hero = ({ heroItem }) => {
  const [movieVideo, setMovieVideo] = useState([])
  const [isMute, setIsMute] = useState(true)

  function toggleMute() {

    setIsMute(!isMute)

  }
  console.log("Mute State: " + isMute)
  useEffect(() => {
    if (!heroItem) return
    async function fetchVideoData() {
      let videos = []
      if (heroItem.media_type === "movie") {
        videos = await getMovieVideo(heroItem.id)
        console.log(heroItem.id)
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

    <div className="w-full h-[50rem] relative">
      {/* Video or Image */}
      {movieVideo[0]?.key ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${movieVideo[0]?.key}?autoplay=1${isMute ? "&mute=1" : ""}&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=${movieVideo[0]?.key}`}
          allow="autoplay"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        ></iframe>
      ) : (
        heroItem?.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/original${heroItem.backdrop_path}`}
            alt={heroItem?.title || "Fallback Poster"}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        )
      )}

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#141414] via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#141414]/30 "></div>

      <div className='absolute bottom-56 left-28'>
        {/* Title */}
        <h1 className="text-[2.5rem] md:text-6xl font-bold text-white">
          {heroItem?.name || heroItem?.title}
        </h1>
        <p className="mt-4 mb-3 text-white font-normal leading-normal line-clamp-3 max-w-[40%] text-[1.2vw]">{heroItem?.overview}</p>
        {/* Buttons */}
        <div className="left-28 flex space-x-4 w-full">
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
        <button onClick={toggleMute} className='absolute bottom-56 right-28 border-[0.5px] hover:bg-white/20  border-gray-300 rounded-full w-12 h-12 items-center justify-center flex'>
              {isMute ?

                (
                  // 🔊 Unmuted Icon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-8 h-8">
                    <path
                      fill="#ffffff"
                      d="M80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416zM399 239C389.6 248.4 389.6 263.6 399 272.9L446 319.9L399 366.9C389.6 376.3 389.6 391.5 399 400.8C408.4 410.1 423.6 410.2 432.9 400.8L479.9 353.8L526.9 400.8C536.3 410.2 551.5 410.2 560.8 400.8C570.1 391.4 570.2 376.2 560.8 366.9L513.8 319.9L560.8 272.9C570.2 263.5 570.2 248.3 560.8 239C551.4 229.7 536.2 229.6 526.9 239L479.9 286L432.9 239C423.5 229.6 408.3 229.6 399 239z"
                    />
                  </svg>
                ) : ( // 🔇 Muted Icon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-8 h-8">
                    <path
                      fill="#ffffff"
                      d="M533.6 96.5C523.3 88.1 508.2 89.7 499.8 100C491.4 110.3 493 125.4 503.3 133.8C557.5 177.8 592 244.8 592 320C592 395.2 557.5 462.2 503.3 506.3C493 514.7 491.5 529.8 499.8 540.1C508.1 550.4 523.3 551.9 533.6 543.6C598.5 490.7 640 410.2 640 320C640 229.8 598.5 149.2 533.6 96.5zM473.1 171C462.8 162.6 447.7 164.2 439.3 174.5C430.9 184.8 432.5 199.9 442.8 208.3C475.3 234.7 496 274.9 496 320C496 365.1 475.3 405.3 442.8 431.8C432.5 440.2 431 455.3 439.3 465.6C447.6 475.9 462.8 477.4 473.1 469.1C516.3 433.9 544 380.2 544 320.1C544 260 516.3 206.3 473.1 171.1zM412.6 245.5C402.3 237.1 387.2 238.7 378.8 249C370.4 259.3 372 274.4 382.3 282.8C393.1 291.6 400 305 400 320C400 335 393.1 348.4 382.3 357.3C372 365.7 370.5 380.8 378.8 391.1C387.1 401.4 402.3 402.9 412.6 394.6C434.1 376.9 448 350.1 448 320C448 289.9 434.1 263.1 412.6 245.5zM80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416z"
                    />
                  </svg>
                )}
            </button>
      
    </div >

  )
}

export default Hero
