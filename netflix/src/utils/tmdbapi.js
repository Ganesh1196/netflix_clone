import axios from "axios"

const API_KEY = "53aa0c0c39626f8ee3400770eb6cb92c"
const BASE_URL = "https://api.themoviedb.org/3"

// Axios Instance


const tmbd = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
})

export async function getTrendingMovies() {
  try {
    const response = await tmbd.get("/trending/movie/day")
    return response.data.results //array of movies
    
  } catch (error) {
    console.log("Error fetching trending movies: " + error)
  }
}

export async function getPopularMovies() {
  try {
    const response = await tmbd.get("/movie/popular")
    return response.data.results
  } catch (error) {
    console.log("Error fetching popular movies: " + error)
  }
}


export async function getTopRatedMovies() {
  try {
    const response = await tmbd.get("/movie/top_rated")
    return response.data.results
  } catch (error) {
    console.log("Error fetching top_rated movies: " + error)
  }
}

export async function getUpcomingMovies() {
  try {
    const response = await tmbd.get("/movie/upcoming")
    return response.data.results
  } catch (error) {
    console.log("Error fetching upcoming movies: " + error)
  }
}
export async function getNowPlayingMovies() {
  try {
    const response = await tmbd.get("/movie/now_playing")
    return response.data.results
  } catch (error) {
    console.log("Error fetching now_playing movies: " + error)
  }
}

