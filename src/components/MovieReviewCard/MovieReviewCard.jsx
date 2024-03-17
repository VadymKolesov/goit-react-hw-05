import css from "./MovieReviewCard.module.css";

export default function MovieReviewCard({ author, rating, review, avatarURL }) {
  return (
    <div className={css.card}>
      <img src={avatarURL} alt={author} className={css.img} />
      <div>
        <div className={css.wrap}>
          <p className={css.name}>{author}</p>
          <p>{rating}</p>
        </div>
        <p className={css.review}>{review}</p>
      </div>
    </div>
  );
}
