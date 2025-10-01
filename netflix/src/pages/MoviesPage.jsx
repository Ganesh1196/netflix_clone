import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import { getPopularMovies, getTopRatedMovies, getTrendingMovies, getUpcomingMovies, getNowPlayingMovies } from '../utils/tmdbapi'

const movieCategories = {
  trending: "Trending Movies",
  popular: "Popular Movies",
  topRated: "Top Rated Movies",
  upComing: "Up Coming Movies",
  nowPlaying: "Now Playing"
}

const MoviesPage = () => {
  const [heroItem, setHeroItem] = useState(null)

  const [movieByCategores, setMovieByCategories] = useState({
    trending: [],
    popular: [],
    topRated: [],
    upComing : [],
    nowPlaying: [],
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
      if (trending.length > 0) {
        const randomIndex = Math.floor(Math.random() * trending.length)
        setHeroItem(trending[randomIndex])
      }
      setMovieByCategories({
        trending,
        popular,
        topRated,
        upComing,
        nowPlaying,
      })
    }
    fetchData()
  }, [])

  return (
    <div className='min-h-screen'>
      <Hero heroItem={heroItem} />
      {Object.keys(movieCategories).map(key => (
        <MovieRow
          key={key}
          title={movieCategories[key]}
          movies={movieByCategores[key]}
        />
      ))}

    </div>
  )
}

export default MoviesPage
