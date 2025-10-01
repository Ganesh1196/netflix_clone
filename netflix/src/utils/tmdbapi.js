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

export async function getMovieVideo(movieId) {
  try {
    const response = await tmbd.get(`/movie/${movieId}/videos`)
    return response.data.results
  } catch (error) {
    console.log("Error fetching Movie video data")
  }
}

export async function getTvVideo(tvId) {
  try {
    const response = await tmbd.get(`/tv/${tvId}/videos`)
    return response.data.results
  } catch (error) {
    console.log("Error fetching TV video data")
  }
}

export async function getTrendingAll() {
  try {
    const response = await tmbd.get("/trending/all/day")
    return response.data.results //array of movies and tv shows trending for the day

  } catch (error) {
    console.log("Error fetching trending all movies and tv shows: " + error)
  }
}

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

export async function getTrendingTV() {
  try {
    const response = await tmbd.get("/trending/tv/day")
    return response.data.results
  } catch (error) {
    console.log("Error fetching trending TV shows: " + error)
  }
}
export async function getPopularTV() {
  try {
    const response = await tmbd.get("/tv/popular")
    return response.data.results
  } catch (error) {
    console.log("Error fetching popular TV shows: " + error)
  }
}
export async function getTopRatedTV() {
  try {
    const response = await tmbd.get("/tv/top_rated")
    return response.data.results
  } catch (error) {
    console.log("Error fetching top_rated TV shows: " + error)
  }
}
export async function getOnAirTV() {
  try {
    const response = await tmbd.get("/tv/on_the_air")
    return response.data.results
  } catch (error) {
    console.log("Error fetching on_the_air TV shows: " + error)
  }
}