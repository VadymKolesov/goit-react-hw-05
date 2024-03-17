import css from "./MovieReview.module.css";
import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../tmdb-api";
import { useParams } from "react-router-dom";
import MovieReviewCard from "../MovieReviewCard/MovieReviewCard";

export default function MovieReviews() {
  const [reviews, setReviews] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const data = await fetchMovieReviews(movieID);
        if (data.length <= 0) {
          return;
        }

        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieID]);

  return (
    <>
      {reviews ? (
        <ul className={css.list}>
          {reviews.map((el) => (
            <li key={el.id}>
              <MovieReviewCard
                avatarURL={
                  el.author_details.avatar_path
                    ? "https://image.tmdb.org/t/p/w500" +
                      el.author_details.avatar_path
                    : "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
                }
                author={el.author}
                rating={
                  el.author_details.rating
                    ? `${el.author_details.rating}/10`
                    : "no score"
                }
                review={el.content}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noReviews}>No reviews</p>
      )}
    </>
  );
}
