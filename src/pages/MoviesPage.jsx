import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm/SerchForm";
import { fetchMoviesByQuery } from "../tmdb-api";
import MovieList from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const query = searchParams.get("query");

    if (!query) {
      return;
    }

    async function getMoviesByQuery() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchMoviesByQuery(query);
        setMovies(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMoviesByQuery();
  }, [searchParams]);

  const handleSearch = (searchQuery) => {
    setSearchParams({ query: searchQuery });
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />

      {isLoading && <div>Loading...</div>}
      {isError && <div>Something went wrong. Please, try again.</div>}

      {movies && <MovieList movies={movies} />}
    </div>
  );
}
