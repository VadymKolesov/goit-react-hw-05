import css from "./MovieList.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
  return (
    <ul className={css.list}>
      {movies.map((el) => (
        <li key={el.id} className={css.item}>
          <Link to={`/movies/${el.id}`}>
            <MovieCard
              title={el.title}
              posterUrl={"https://image.tmdb.org/t/p/w500" + el.poster_path}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
