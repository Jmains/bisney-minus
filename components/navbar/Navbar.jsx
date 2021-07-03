import s from "./Navbar.module.css";
import { Film, Home, Plus, Search, Star, Camera } from "../icons/index";
import { useState } from "react";
import AccountMenu from "./accountMenu/AccountMenu";

export default function navbar() {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  return (
    <div className={s.nav__container}>
      <div className={s.nav__listContainer}>
        <div className={s.nav__link}>
          <a className={s.nav__logo} href="#">
            Bisney
          </a>
        </div>
        <span className={s.nav__linkContainer}>
          <a tabIndex="0" aria-label="HOME" className={s.nav__link} href="#">
            <span className={s.nav__iconContainer}>
              <Home className={s.nav__icon} />
            </span>
            <p className={s.nav__linkText}>Home</p>
          </a>
        </span>

        <span className={s.nav__linkContainer}>
          <a tabIndex="0" aria-label="SEARCH" className={s.nav__link} href="#">
            <span className={s.nav__iconContainer}>
              <Search className={s.nav__icon} />
            </span>
            <p className={s.nav__linkText}>Search</p>
          </a>
        </span>

        <span className={s.nav__linkContainer}>
          <a tabIndex="0" aria-label="WATCHLIST" className={s.nav__link} href="#">
            <span className={s.nav__iconContainer}>
              <Plus className={s.nav__icon} />
            </span>
            <p className={s.nav__linkText}>Watchlist</p>
          </a>
        </span>

        <span className={s.nav__linkContainer}>
          <a tabIndex="0" aria-label="ORIGINALS" className={s.nav__link} href="#">
            <span>
              <Star className={s.nav__icon} />
            </span>
            <p className={s.nav__linkText}>Originals</p>
          </a>
        </span>

        <span className={s.nav__linkContainer}>
          <a tabIndex="0" aria-label="FILM" className={s.nav__link} href="#">
            <span>
              <Film className={s.nav__icon} />
            </span>
            <p className={s.nav__linkText}>Movies</p>
          </a>
        </span>

        <span className={s.nav__linkContainer}>
          <a tabIndex="0" aria-label="SERIES" className={s.nav__link} href="#">
            <span>
              <Camera className={s.nav__icon} />
            </span>
            <p className={s.nav__linkText}>Series</p>
          </a>
        </span>
      </div>

      <div
        onMouseEnter={async () => {
          await setShowAccountMenu(true);
        }}
        className={s.nav__profileImgContainer}
      >
        {showAccountMenu ? (
          <AccountMenu setShowAccountMenu={setShowAccountMenu} />
        ) : (
          <img
            className={s.nav__profileImg}
            src="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
          />
        )}
      </div>
    </div>
  );
}
