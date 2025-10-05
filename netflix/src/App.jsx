import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import ShowsPage from './pages/ShowsPage'
import MylistPage from './pages/MylistPage'
import MovieDetailPage from './pages/MovieDetailPage'
import Header from './components/Header'
import Footer from './components/Footer'
import { getSearchResults } from './utils/tmdbapi'
const App = () => {

  
  const [searchValue, setSearchValue] = useState("")

  const [searchedMovies, setSearchedMovies] = useState([])

  useEffect(() => {
    if (!searchValue) {
    setSearchedMovies([]);
    return;
  }
    async function fetchData() {
      if(searchedMovies.media_type === "movie" || searchedMovies.media_type === "tv"){
      const searchData = await getSearchResults(searchValue)

      setSearchedMovies(searchData || [])
      }
    }

    fetchData()
  }, [searchValue])

  console.log(searchedMovies)
  return ( <>
    <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
    <div >
      
      <Routes>
        <Route path='/' element={<HomePage searchedMovies={searchedMovies} />} />
        <Route path='/movies' element={<MoviesPage />}/>
        <Route path='/shows' element={<ShowsPage/>}/>
        <Route path='/my-list' element={<MylistPage/>}/>
        <Route path='/movie/:id' element={<MovieDetailPage/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
