import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import ShowsPage from './pages/ShowsPage'
import MylistPage from './pages/MylistPage'
import MovieDetailPage from './pages/MovieDetailPage'
import Header from './components/Header'
import Footer from './components/Footer'
const App = () => {
  return ( <>
    <Header />
    <div >
      
      <Routes>
        <Route path='/' element={<HomePage />} />
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
