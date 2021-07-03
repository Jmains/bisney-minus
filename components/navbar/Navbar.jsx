import s from "./Navbar.module.css";
import { Film, Home, Plus, Search, Star, Camera } from "../icons/index";
import { useState } from "react";

const profiles = [
  {
    name: "jack",
    picUrl:
      "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
  },
  {
    name: "jill",
    picUrl:
      "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
  },
];

const options = [
  {
    name: "Edit Profiles",
    to: "#",
  },
  {
    name: "App Settings",
    to: "#",
  },
  {
    name: "Account",
    to: "#",
  },
  {
    name: "Help",
    to: "#",
  },
  {
    name: "Log Out",
    to: "#",
  },
];

export default function navbar() {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const AccountMenu = () => {
    return (
      <div
        onMouseLeave={async () => {
          await setShowAccountMenu(false);
        }}
        className={s.accMenuContainer}
      >
        <div className={s.accNameContainer}>
          <p className={s.accName}>Aneem</p>
          <img
            className={s.profileImg}
            src="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
          />
        </div>

        <div className={s.separator}></div>
        {profiles.map((profile, i) => {
          return (
            <div key={i} className={s.userAccsContainer}>
              <img className={s.profileImg} src={profile.picUrl} />
              <p className={s.profileName}>{profile.name}</p>
            </div>
          );
        })}

        {options.map((opt, i) => {
          return (
            <div key={i} className={s.menuItemContainer}>
              <a className={s.menuItem} href={opt.to}>
                {opt.name}
              </a>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={s.navContainer}>
      <div>
        <div className={s.navListContainer}>
          <div className={s.navItemContainer}>
            <a className={s.navLogo} href="#">
              Logo
            </a>
          </div>
          <span className={s.navItemWrapper}>
            <a tabIndex="0" aria-label="HOME" className={s.navItemContainer} href="#">
              <span className={s.navIconContainer}>
                <Home className={s.navIcon} />
              </span>
              <p className={s.navItem}>Home</p>
            </a>
          </span>

          <span className={s.navItemWrapper}>
            <a tabIndex="0" aria-label="SEARCH" className={s.navItemContainer} href="#">
              <span className={s.navIconContainer}>
                <Search className={s.navIcon} />
              </span>
              <p className={s.navItem}>Search</p>
            </a>
          </span>

          <span className={s.navItemWrapper}>
            <a tabIndex="0" aria-label="WATCHLIST" className={s.navItemContainer} href="#">
              <span className={s.navIconContainer}>
                <Plus className={s.navIcon} />
              </span>
              <p className={s.navItem}>Watchlist</p>
            </a>
          </span>

          <span className={s.navItemWrapper}>
            <a tabIndex="0" aria-label="ORIGINALS" className={s.navItemContainer} href="#">
              <span>
                <Star className={s.navIcon} />
              </span>
              <p className={s.navItem}>Originals</p>
            </a>
          </span>

          <span className={s.navItemWrapper}>
            <a tabIndex="0" aria-label="FILM" className={s.navItemContainer} href="#">
              <span>
                <Film className={s.navIcon} />
              </span>
              <p className={s.navItem}>Movies</p>
            </a>
          </span>

          <span className={s.navItemWrapper}>
            <a tabIndex="0" aria-label="SERIES" className={s.navItemContainer} href="#">
              <span>
                <Camera className={s.navIcon} />
              </span>
              <p className={s.navItem}>Series</p>
            </a>
          </span>
        </div>
      </div>
      <div
        onMouseEnter={async () => {
          await setShowAccountMenu(true);
        }}
        className={s.profileImgContainer}
      >
        {showAccountMenu ? (
          <AccountMenu />
        ) : (
          <img
            className={s.profileImg}
            src="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
          />
        )}
      </div>
    </div>
  );
}
