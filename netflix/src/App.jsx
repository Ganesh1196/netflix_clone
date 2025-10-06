import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import ShowsPage from './pages/ShowsPage'
import MylistPage from './pages/MylistPage'
import MovieDetailPage from './pages/MovieDetailPage'
import SearchPage from './pages/SearchPage'
import Header from './components/Header'
import Footer from './components/Footer'
import { getSearchResults } from './utils/tmdbapi'
const App = () => {

  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("")
  const [searchedMovies, setSearchedMovies] = useState([])

  useEffect(() => {
    if (!searchValue) {
      setSearchedMovies([]);
      return;
    }

    // Set a timeout to debounce the API call
    const handler = setTimeout(async () => {
      const searchData = await getSearchResults(searchValue);

      const filteredData = searchData.filter(
        (item) =>
          (item.media_type === "movie" || item.media_type === "tv") &&
          item.backdrop_path !== null
      );

      setSearchedMovies(filteredData || []);
    }, 800);

    return () => clearTimeout(handler);
  }, [searchValue]);

  console.log(searchedMovies)
  return ( <>
    <Header searchValue={searchValue} setSearchValue={setSearchValue} isSearching={isSearching} setIsSearching={setIsSearching}/>
    <div >
      
      <Routes>
        <Route path='/' element={<HomePage searchedMovies={searchedMovies} isSearching={isSearching} />} />
        <Route path='/movies' element={<MoviesPage />}/>
        <Route path='/shows' element={<ShowsPage/>}/>
        <Route path='/my-list' element={<MylistPage/>}/>
        <Route path='/movie/:id' element={<MovieDetailPage/>}/>
        <Route path='/search' element={<SearchPage searchedMovies={searchedMovies} isSearching={isSearching} searchValue={searchValue}/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
