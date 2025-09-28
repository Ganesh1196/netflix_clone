import React from 'react'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'

const MoviesPage = () => {
  return (
    <div className='min-h-screen'>
      <Hero />
        <MovieRow />
        <MovieRow />
        <MovieRow />
        <MovieRow />
        <MovieRow />
    </div>
  )
}

export default MoviesPage
