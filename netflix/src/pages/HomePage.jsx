import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import {
  getTrendingAll,
  getTopRatedMovies,
  getPopularMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
  getOnAirTV
} from '../utils/tmdbapi'
import MovieGrid from '../components/MovieGrid'

const categories = {
  trendingAll: "Trending",
  popular: "Popular Movies",
  topRated: "Top Rated Movies",
  onAir: "Currently Airing TV Shows",
  upComing: "Upcoming Movies",
  nowPlaying: "Now Playing"
}



const HomePage = ({ searchedMovies }) => {

  const [heroItem, setHeroItem] = useState(null)
  const [moviesByCategories, setMoviesByCategories] = useState({
    trending: [],
    popular: [],
    topRated: [],
    onAir: [],
    upComing: [],
    nowPlaying: []
  })

  useEffect(() => {
    async function fetchData() {
      const [trendingAll, popular, topRated, onAir, upComing, nowPlaying] = await Promise.all([
        getTrendingAll(),
        getPopularMovies(),
        getTopRatedMovies(),
        getOnAirTV(),
        getUpcomingMovies(),
        getNowPlayingMovies()
      ])
      if (trendingAll.length > 0) {
        const randomIndex = Math.floor(Math.random() * trendingAll.length)
        setHeroItem(trendingAll[randomIndex])
      }

      setMoviesByCategories({
        trendingAll,
        popular,
        topRated,
        onAir,
        upComing,
        nowPlaying
      })

    }
    fetchData()
  }, [])


  return (
    <div className="min-h-screen">
      {searchedMovies.length > 0 ? (<MovieGrid movies={searchedMovies} />
      ) : (<>
        <Hero heroItem={heroItem} />
        {Object.keys(categories).map(key => (
          <MovieRow
            key={key}
            title={categories[key]}
            movies={moviesByCategories[key]} />
        ))

        }
      </>)
      }

    </div>
  )
}

export default HomePage
