import s from "./ContentGrid.module.css";

export default function ContentGrid({ children }) {
  return <div className={s.grid}>{children}</div>;
}
