import s from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={s.search__container}>
      <input
        className={s.search__input}
        type="text"
        placeholder="Search by title, character, or genre"
      />
    </div>
  );
}
