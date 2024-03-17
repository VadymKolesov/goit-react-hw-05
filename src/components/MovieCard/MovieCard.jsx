import css from "./MovieCard.module.css";

export default function MovieCard({ title, posterUrl }) {
  return (
    <div className={css.card}>
      <img src={posterUrl} alt={title} className={css.poster} />
      <p>{title}</p>
    </div>
  );
}
