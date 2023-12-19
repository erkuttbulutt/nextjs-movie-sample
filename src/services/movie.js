const API_URL = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.API_TOKEN,
  },
};

const fetchMovieApi = async (pathname, query = "") => {
  try {
    const res = await fetch(`${API_URL}${pathname}${query}`, options);
    return res.json();
  } catch (err) {
    throw new Error(err)
  }
};

export const getTopRatedMovies = async () => {
  return fetchMovieApi("/movie/top_rated");
};

export const getPopularMovies = async () => {
  return fetchMovieApi("/movie/popular");
};

export const getCategories = async () => {
  return fetchMovieApi("/genre/movie/list");
};

export const getSingleCategory = async (genreId) => {
  return fetchMovieApi("/discover/movie", `?&with_genres=${genreId}`);
};

export const getMovie = async (movieId) => {
  return fetchMovieApi(`/movie/${movieId}`);
};
