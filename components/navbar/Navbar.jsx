import s from "./Navbar.module.css";
import { Film, Home, Plus, Search, Star, Camera, VerticalDots } from "../icons/index";
import { useEffect, useState } from "react";
import AccountMenu from "./accountMenu/AccountMenu";
import throttle from "lodash.throttle";
import useScreenWidth from "../../utils/useScreenWidth";

const navLinks = [
  {
    icon: <Home className={s.nav__icon} />,
    text: "Home",
  },
  {
    icon: <Search className={s.nav__icon} />,
    text: "Search",
  },
  {
    icon: <Plus className={s.nav__icon} />,
    text: "Watchlist",
  },
  {
    icon: <Star className={s.nav__icon} />,
    text: "Originals",
  },
  {
    icon: <Film className={s.nav__icon} />,
    text: "Movies",
  },
  {
    icon: <Camera className={s.nav__icon} />,
    text: "Series",
  },
];

export default function navbar() {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const smScreenBreakPoint = 1024;

  const { width } = useScreenWidth();

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 10;
      const { scrollTop } = document.documentElement;

      const scrolled = scrollTop > offset;
      setHasScrolled(scrolled);
    }, 300);

    handleScroll();
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={hasScrolled ? `${s.nav__container} ${s.nav__bgColor}` : `${s.nav__container}`}
    >
      <div className={s.nav__listContainer}>
        <div className={s.nav__link}>
          <a className={s.nav__logo} href="#">
            Bisney
          </a>
        </div>

        {width > smScreenBreakPoint ? (
          navLinks.map((link) => {
            return (
              <span className={s.nav__linkContainer}>
                <a tabIndex="0" aria-label={link.text} className={s.nav__link} href="#">
                  <span className={s.nav__icon}>{link.icon}</span>
                  <p className={s.nav__linkText}>{link.text}</p>
                </a>
              </span>
            );
          })
        ) : (
          <>
            <SmallScreenNav />
            <span className={s.nav__moreOptionsContainer}>
              <div
                onMouseEnter={() => {
                  setShowMoreOptions(true);
                }}
                role="option"
                tabIndex="0"
                aria-label="More options"
                className={s.nav__link}
                href="#"
              >
                <VerticalDots className={s.nav__icon} />
              </div>
              {showMoreOptions && (
                <MoreOptionsDropdown setShowMoreOptions={setShowMoreOptions} />
              )}
            </span>
          </>
        )}
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

const SmallScreenNav = () => {
  return (
    <>
      {navLinks.map((link, idx) => {
        return (
          <>
            {idx < 3 && (
              <span className={s.nav__linkContainer}>
                <a tabIndex="0" aria-label={link.text} className={s.nav__link} href="#">
                  <span className={s.nav__icon}>{link.icon}</span>
                </a>
              </span>
            )}
          </>
        );
      })}
    </>
  );
};

const MoreOptionsDropdown = ({ setShowMoreOptions }) => {
  return (
    <ul
      onMouseLeave={() => setShowMoreOptions(false)}
      className={s.moreOptsDropdown__container}
    >
      <li className={s.moreOptsDropdown__listItem}>
        <a tabIndex="0" aria-label="Originals" className={s.moreOptsDropdown__link} href="#">
          <Star className={s.nav__icon} />
          <p className={s.nav__linkText}>Originals</p>
        </a>
      </li>
      <li className={s.moreOptsDropdown__listItem}>
        <a tabIndex="0" aria-label="Movies" className={s.moreOptsDropdown__link} href="#">
          <span className="">
            <Film className={s.nav__icon} />
          </span>
          <p className={s.nav__linkText}>Movies</p>
        </a>
      </li>
      <li className={s.moreOptsDropdown__listItem}>
        <a tabIndex="0" aria-label="Series" className={s.moreOptsDropdown__link} href="#">
          <span className="">
            <Camera className={s.nav__icon} />
          </span>
          <p className={s.nav__linkText}>Series</p>
        </a>
      </li>
    </ul>
  );
};
