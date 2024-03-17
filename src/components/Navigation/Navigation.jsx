import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.isActive)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.isActive)}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}
