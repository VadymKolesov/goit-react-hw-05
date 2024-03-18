import css from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { fetchTopRatedMovies } from "../tmdb-api";
import MovieList from "../components/MovieList/MovieList";

export default function HomePage() {
  const [ratedMovies, setRatedMovies] = useState(null);

  useEffect(() => {
    async function getTopRatedMovies() {
      try {
        const movies = await fetchTopRatedMovies();
        setRatedMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }

    getTopRatedMovies();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      {ratedMovies && <MovieList movies={ratedMovies} />}
    </div>
  );
}
