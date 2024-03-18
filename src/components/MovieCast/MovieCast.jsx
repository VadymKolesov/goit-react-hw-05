import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../tmdb-api";
import { useParams } from "react-router-dom";
import MovieCastCard from "../MovieCastCard/MovieCastCard";

export default function MovieCast() {
  const [cast, setCast] = useState(null);
  const { movieID } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchMovieCast(movieID);
        setCast(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getCast();
  }, [movieID]);

  return (
    <ul className={css.list}>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Something went wrong. Please, try again.</div>}

      {cast &&
        cast.map((el) => (
          <li key={el.id}>
            <MovieCastCard
              img={
                el.profile_path
                  ? "https://image.tmdb.org/t/p/w500" + el.profile_path
                  : "https://newadmin.heberjeunes.fr/images/no-photo.png"
              }
              name={el.name}
              character={el.character}
            />
          </li>
        ))}
    </ul>
  );
}
