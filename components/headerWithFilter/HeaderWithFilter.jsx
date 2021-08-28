import s from "./HeaderWithFilter.module.css";
import { ChevronDown } from "../icons";
import { useState } from "react";
import Link from "next/link";
import SearchBar from "../search/SearchBar";

export default function HeaderWithFilter({ title, filterOptions }) {
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const handleFilterBtnClick = () =>
    setShowFilterOptions((showFilterOptions) => !showFilterOptions);

  return (
    <div className={s.header__container}>
      {showFilterOptions && (
        <button
          tabIndex="-1"
          aria-label="close filter popup menu"
          onClick={handleFilterBtnClick}
          className={s.hideFilterDropDownBlock}
        ></button>
      )}

      {filterOptions && title ? (
        <div className={s.header__titleWithFilter}>
          <h4 className={s.header__title}>{title}</h4>
          <div
            onClick={handleFilterBtnClick}
            className={
              showFilterOptions
                ? `${s.header__filterButton} ${s.header__filterButton_active}`
                : s.header__filterButton
            }
          >
            <div className={s.header__filterButtonContainer}>
              <div className={s.header__filterTitle}>Featured</div>
              <div className={s.header__filterArrow}>
                <ChevronDown />
              </div>
            </div>

            {showFilterOptions && (
              <FilterDropDown
                filterOptions={filterOptions}
                showFilterOptions={showFilterOptions}
                setShowFilterOptions={setShowFilterOptions}
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
      {filterOptions.map((option) => {
        return (
          <li key={option} className={s.dropDownMenu__listItem}>
            <Link href="#">
              <a tabIndex="0" aria-label={option} className={s.dropDownMenu__link}>
                <p className={s.dropDownMenu__text}>{option}</p>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
