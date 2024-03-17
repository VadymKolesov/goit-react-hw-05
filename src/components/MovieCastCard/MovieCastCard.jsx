import css from "./MovieCastCard.module.css";

export default function MovieCastCard({ img, name, character }) {
  return (
    <div className={css.card}>
      <img src={img} className={css.img} />
      <div>
        <p className={css.name}>{name}</p>
        <p className={css.character}>{character}</p>
      </div>
    </div>
  );
}
