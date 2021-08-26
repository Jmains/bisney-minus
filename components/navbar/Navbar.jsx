import s from "./Navbar.module.css";
import { Film, Home, Plus, Search, Star, Camera, VerticalDots } from "../icons/index";
import { useEffect, useState } from "react";
import AccountMenu from "./accountMenu/AccountMenu";
import throttle from "lodash.throttle";
import useScreenWidth from "../../utils/useScreenWidth";
import Link from "next/link";

const navLinks = [
  {
    icon: <Home className={s.nav__icon} />,
    text: "Home",
    href: "/",
  },
  {
    icon: <Search className={s.nav__icon} />,
    text: "Search",
    href: "/search",
  },
  {
    icon: <Plus className={s.nav__icon} />,
    text: "Watchlist",
    href: "/watchlist",
  },
  {
    icon: <Star className={s.nav__icon} />,
    text: "Originals",
    href: "/originals",
  },
  {
    icon: <Film className={s.nav__icon} />,
    text: "Movies",
    href: "/movies",
  },
  {
    icon: <Camera className={s.nav__icon} />,
    text: "Series",
    href: "/series",
  },
];

export default function Navbar() {
  const smScreenBreakPoint = 1024;

  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const { width: currentScreenWidth } = useScreenWidth();

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 5;
      const { scrollTop } = document.documentElement;

      const scrolled = scrollTop > offset;
      setHasScrolled(scrolled);
    }, 200);

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
        <div className={s.nav__logoLink}>
          <Link href="/">
            <a className={s.nav__logo}>Bisney+</a>
          </Link>
        </div>
        {/* Nav links */}
        {currentScreenWidth > smScreenBreakPoint ? (
          navLinks.map((link) => {
            return (
              <span key={link.text} className={s.nav__linkContainer}>
                <Link href={link.href}>
                  <a tabIndex="0" aria-label={link.text} className={s.nav__link}>
                    <span className={s.nav__icon}>{link.icon}</span>
                    <p className={s.nav__linkText}>{link.text}</p>
                  </a>
                </Link>
              </span>
            );
          })
        ) : (
          <SmallScreenNav
            setShowMoreOptions={setShowMoreOptions}
            showMoreOptions={showMoreOptions}
          />
        )}
      </div>

      {/* End Nav links */}
      {/* Avatar and Account Menu */}
      <div
        onMouseEnter={() => {
          setShowAccountMenu(true);
        }}
        onClick={() => {
          setShowAccountMenu((prev) => !prev);
        }}
        className={s.nav__profileImgContainer}
        aria-haspopup="true"
        aria-expanded={showAccountMenu ? "true" : "false"}
        role="button"
      >
        <img
          className={s.nav__profileImg}
          src="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
        />
      </div>
      <AccountMenu setShowAccountMenu={setShowAccountMenu} showAccountMenu={showAccountMenu} />
      {/* End Avatar and Account Menu */}
    </div>
  );
}

const SmallScreenNav = ({ setShowMoreOptions, showMoreOptions }) => {
  return (
    <>
      {navLinks.map((link, idx) => {
        return (
          <>
            {idx < 3 && (
              <span key={link.text} className={s.nav__linkContainer}>
                <Link href={link.href}>
                  <a tabIndex="0" aria-label={link.text} className={s.nav__link} href="#">
                    <span className={s.nav__icon}>{link.icon}</span>
                  </a>
                </Link>
              </span>
            )}
          </>
        );
      })}
      <span
        onMouseLeave={() => {
          setShowMoreOptions(false);
        }}
        className={s.nav__moreOptionsContainer}
      >
        <div
          onMouseEnter={() => {
            setShowMoreOptions(true);
          }}
          onClick={() => {
            setShowMoreOptions((prevValue) => !prevValue);
          }}
          role="option"
          tabIndex="0"
          aria-label="More options"
          className={s.nav__link}
        >
          <VerticalDots className={s.nav__icon} />
        </div>
        <MoreOptionsDropdown showMoreOptions={showMoreOptions} />
      </span>
    </>
  );
};

const MoreOptionsDropdown = ({ showMoreOptions }) => {
  return (
    <ul
      className={
        showMoreOptions
          ? `${s.dropDownMenu__container}  ${s.dropDownMenu_active}`
          : `${s.dropDownMenu__container}`
      }
    >
      <li className={s.dropDownMenu__listItem}>
        <Link href="/originals">
          <a tabIndex="0" aria-label="Originals" className={s.dropDownMenu__link}>
            <Star className={s.nav__icon} />
            <p className={s.nav__linkText}>Originals</p>
          </a>
        </Link>
      </li>
      <li className={s.dropDownMenu__listItem}>
        <Link href="/movies">
          <a tabIndex="0" aria-label="Movies" className={s.dropDownMenu__link} href="#">
            <span className="">
              <Film className={s.nav__icon} />
            </span>
            <p className={s.nav__linkText}>Movies</p>
          </a>
        </Link>
      </li>
      <li className={s.dropDownMenu__listItem}>
        <Link href="/series">
          <a tabIndex="0" aria-label="Series" className={s.dropDownMenu__link} href="#">
            <span className="">
              <Camera className={s.nav__icon} />
            </span>
            <p className={s.nav__linkText}>Series</p>
          </a>
        </Link>
      </li>
    </ul>
  );
};
