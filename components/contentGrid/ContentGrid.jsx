import s from "./ContentGrid.module.css";
import { ChevronDown } from "../icons";

export default function ContentGrid({ children, title, filter }) {
  return (
    <div>
      {filter && title ? (
        <div className={s.grid__titleWithFilter}>
          <h4 className={s.grid__title}>{title}</h4>

          <div role="menu" className={s.grid__filterButton}>
            <div className={s.grid__filterButtonContainer}>
              <div className={s.grid__filterTitle}>Featured</div>
              <div className={s.grid__filterArrow}>
                <ChevronDown />
              </div>
            </div>
          </div>
        </div>
      ) : (
        title && <h4 className={s.grid__title}>{title}</h4>
      )}
      <div className={s.grid}>{children}</div>
    </div>
  );
}
