import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm/SerchForm";
import { fetchMoviesByQuery } from "../tmdb-api";
import MovieList from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query");

    if (!query) {
      return;
    }

    async function getMoviesByQuery() {
      const data = await fetchMoviesByQuery(query);
      setMovies(data);
    }

    getMoviesByQuery();
  }, [searchParams]);

  const handleSearch = (searchQuery) => {
    setSearchParams({ query: searchQuery });
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {movies && <MovieList movies={movies} />}
    </div>
  );
}
