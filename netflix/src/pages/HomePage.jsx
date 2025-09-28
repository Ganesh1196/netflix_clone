import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import {
  getTrendingMovies,
  getTopRatedMovies,
  getPopularMovies,
  getUpcomingMovies,
  getNowPlayingMovies
} from '../utils/tmdbapi'

const categories = {
  trending: "Trending",
  popular: "Popular Movies",
  topRated: "Top Rated Movies",
  upComing: "Upcoming Movies",
  nowPlaying: "Now Playing"
}



const HomePage = () => {
  const [moviesByCategories, setMoviesByCategories] = useState({
    trending: [],
    popular: [],
    topRated: [],
    upComing: [],
    nowPlaying: []
  })

  useEffect(() => {
    async function fetchData() {
      const [trending, popular, topRated, upComing, nowPlaying] = await Promise.all([
        getTrendingMovies(),
        getPopularMovies(),
        getTopRatedMovies(),
        getUpcomingMovies(),
        getNowPlayingMovies()
      ])

      setMoviesByCategories({
        trending,
        popular,
        topRated,
        upComing,
        nowPlaying
      })

    }
    fetchData()
  }, [])


  return (
    <div className="min-h-screen">
      <Hero />
      {Object.keys(categories).map(key => (
        <MovieRow
          key={key}
          title={categories[key]}
          movies={moviesByCategories[key]} />
      ))

      }

    </div>
  )
}

export default HomePage
