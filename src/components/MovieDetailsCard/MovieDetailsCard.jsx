import css from "./MovieDetailsCard.module.css";

export default function MovieDetailsCard({
  poster,
  title,
  releaseDate,
  overview,
  genres,
  score,
}) {
  const scoreVote = ((score / 10) * 100).toFixed(0) + "%";
  const releaseYear = releaseDate.slice(0, 4);

  return (
    <div className={css.card}>
      <img src={poster} alt={title} className={css.poster} />
      <div className={css.info}>
        <div className={css.wrap}>
          <h2>
            {title} ({releaseYear})
          </h2>
          <p>Rating: {scoreVote}</p>
        </div>
        <div className={css.wrap}>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
        <div className={css.wrap}>
          <h3>Genres</h3>
          <ul className={css.list}>
            {genres.map((el) => (
              <li key={el.id}>
                <p>{el.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
