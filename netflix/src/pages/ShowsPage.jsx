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

  const [heroItem, setHeroItem] = useState(null)

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
      if(trending.length > 0 ){
          const randomIndex = Math.floor(Math.random() * trending.length)
          setHeroItem(trending[randomIndex])
        }
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
      <Hero heroItem={heroItem} />
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