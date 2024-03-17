import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../tmdb-api";
import { useEffect, useState } from "react";
import MovieDetailsCard from "../components/MovieDetailsCard/MovieDetailsCard";

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const data = await fetchMovieDetails(movieID);
        setMovieDetails(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    getMovieDetails();
  }, [movieID]);

  return (
    <div className={css.wrap}>
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
