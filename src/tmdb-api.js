import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODBlNGM0MjYzZjc1NWI5OWNhYmNhMGU0ZTY4Zjg0NCIsInN1YiI6IjY1ZjZlMTA0OTAzYzUyMDE2NTI3ZjE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K_R-9NM-_HXyeUgMQPNDANJcdm_2lFWhSgdzxxp9iMc";

export const fetchTopRatedMovies = async () => {
  const res = await axios.get(`/movie/popular`);
  return res.data.results;
};

export const fetchMovieDetails = async (id) => {
  const res = await axios.get(`/movie/${id}`);
  return res.data;
};

export const fetchMovieCast = async (id) => {
  const res = await axios.get(`/movie/${id}/credits`);
  return res.data.cast;
};

export const fetchMovieReviews = async (id) => {
  const res = await axios.get(`/movie/${id}/reviews`);
  return res.data.results;
};

export const fetchMoviesByQuery = async (query) => {
  const res = await axios.get(`/search/movie?query=${query}`);
  return res.data.results;
};
