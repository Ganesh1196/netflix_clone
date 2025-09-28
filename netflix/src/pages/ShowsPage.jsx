import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import { getOnAirTV, getPopularTV, getTopRatedTV, getTrendingTV } from '../utils/tmdbapi'
import MovieRow from '../components/MovieRow'

const tvCategories = {
  trending: "Trending TV Shows",
  popular: "Popular TV Shows",
  topRated: "Top Rated TV Shows",
  onAir: "Currently Airing"
}

const ShowsPage = () => {
  const [tvByCategores, setTvByCategories] = useState({
    trending: [],
    popular: [],
    topRated: [],
    onAir: []
  })

  useEffect(() => {
    async function fetchData() {
      const [trending, popular, topRated, onAir] = await Promise.all([
        getTrendingTV(),
        getPopularTV(),
        getTopRatedTV(),
        getOnAirTV(),
      ])
      setTvByCategories({
        trending,
        popular,
        topRated,
        onAir,
      })
    }
    fetchData()
  }, [])

  return (
    <div className='min-h-screen'>
      <Hero />
      {Object.keys(tvCategories).map(key=>(
        <MovieRow
        key={key}
        title={tvCategories[key]}
        movies={tvByCategores[key]}
        />
      ))}

    </div>
  )
}

export default ShowsPage