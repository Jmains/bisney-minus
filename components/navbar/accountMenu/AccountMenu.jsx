import s from "./AccountMenu.module.css";

export default function AccountMenu({ setShowAccountMenu, showAccountMenu }) {
  return (
    <div
      onMouseLeave={() => {
        setShowAccountMenu(false);
      }}
    >
      <div
        className={
          showAccountMenu
            ? `${s.accMenu__container} ${s.slideDownAnim} ${s.expanded}`
            : `${s.accMenu__container}`
        }
      >
        <div className={s.accMenu__profile}>
          <p className={s.accMenu__profileName}>Jack</p>
        </div>

        <div className={s.accMenu__separator}></div>

        {profiles.map((profile, idx) => {
          return (
            <div
              key={idx}
              aria-label={`${profile.name}'s profile`}
              tabIndex="0"
              className={
                showAccountMenu
                  ? `${s.accMenu__userProfilesContainer} ${s.expandedFadeIn}`
                  : `${s.accMenu__userProfilesContainer}`
              }
            >
              <img className={s.accMenu__userProfilesImg} src={profile.picUrl} />
              <p className={s.accMenu__userProfilesName}>{profile.name}</p>
            </div>
          );
        })}

        {options.map((opt, idx) => {
          return (
            <div key={idx} className={s.accMenu__linksContainer}>
              <a
                className={
                  showAccountMenu
                    ? `${s.accMenu__link} ${s.expandedFadeIn}`
                    : `${s.accMenu__link}`
                }
                href={opt.to}
              >
                {opt.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

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
