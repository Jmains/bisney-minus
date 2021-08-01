import s from "./ContentGrid.module.css";

export default function ContentGrid({ children }) {
  return (
    <div>
      <div className={s.grid}>{children}</div>
    </div>
  );
}
