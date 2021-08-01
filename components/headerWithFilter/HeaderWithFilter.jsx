import s from "./HeaderWithFilter.module.css";
import { ChevronDown } from "../icons";
import { useState } from "react";
import Link from "next/link";

export default function HeaderWithFilter({ title, filterOptions }) {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const handleFilterBtnClick = () => {
    setShowFilterOptions(true);
  };
  return (
    <div className={s.header__container}>
      {filterOptions && title ? (
        <div className={s.header__titleWithFilter}>
          <h4 className={s.header__title}>{title}</h4>

          <div
            onClick={() => {
              handleFilterBtnClick();
              console.log(showFilterOptions);
            }}
            // role="menu"
            className={s.header__filterButton}
          >
            <div className={s.header__filterButtonContainer}>
              <div className={s.header__filterTitle}>Featured</div>
              <div className={s.header__filterArrow}>
                <ChevronDown />
              </div>
            </div>
            {filterOptions && (
              <FilterDropDown
                filterOptions={filterOptions}
                showFilterOptions={showFilterOptions}
              />
            )}
          </div>
        </div>
      ) : (
        title && <h4 className={s.header__title}>{title}</h4>
      )}
    </div>
  );
}

const FilterDropDown = ({ filterOptions, showFilterOptions }) => {
  return (
    <ul
      className={
        showFilterOptions
          ? `${s.dropDownMenu__container}  ${s.dropDownMenu_active}`
          : `${s.dropDownMenu__container}`
      }
    >
      {filterOptions.map((option, idx) => {
        return (
          <li key={idx} className={s.dropDownMenu__listItem}>
            <Link href="/">
              <a tabIndex="0" aria-label="Originals" className={s.dropDownMenu__link}>
                <p className={s.dropDownMenu__text}>{option}</p>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
