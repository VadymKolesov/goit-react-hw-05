import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";
import {
  NavLink,
  Outlet,
  useParams,
  Link,
  useLocation,
} from "react-router-dom";
import { fetchMovieDetails } from "../tmdb-api";
import { useEffect, useRef, useState } from "react";
import MovieDetailsCard from "../components/MovieDetailsCard/MovieDetailsCard";

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieID } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const data = await fetchMovieDetails(movieID);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    }

    getMovieDetails();
  }, [movieID]);

  return (
    <div className={css.wrap}>
      <Link to={backLinkRef.current ?? "/movies"}>Go back</Link>
      {movieDetails && (
        <MovieDetailsCard
          poster={"https://image.tmdb.org/t/p/w500" + movieDetails.poster_path}
          title={movieDetails.title}
          releaseDate={movieDetails.release_date}
          overview={movieDetails.overview}
          genres={movieDetails.genres}
          score={movieDetails.vote_average}
        />
      )}
      <ul className={css.list}>
        <li>
          <NavLink
            to="cast"
            className={({ isActive }) =>
              clsx(css.link, isActive && css.isActive)
            }
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              clsx(css.link, isActive && css.isActive)
            }
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
