import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../tmdb-api";
import { useParams } from "react-router-dom";
import MovieCastCard from "../MovieCastCard/MovieCastCard";

export default function MovieCast() {
  const [cast, setCast] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const data = await fetchMovieCast(movieID);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [movieID]);
  return (
    <ul className={css.list}>
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
