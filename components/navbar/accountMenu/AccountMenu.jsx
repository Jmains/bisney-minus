import s from "./AccountMenu.module.css";

export default function AccountMenu({ setShowAccountMenu }) {
  return (
    <div
      onMouseLeave={async () => {
        await setShowAccountMenu(false);
      }}
      className={s.accMenu__container}
    >
      <div className={s.accMenu__profile}>
        <p className={s.accMenu__profileName}>Aneem</p>
        <img
          className={s.accMenu__profileImg}
          src="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
        />
      </div>

      <div className={s.accMenu__separator}></div>

      {profiles.map((profile, i) => {
        return (
          <div key={i} className={s.accMenu__userProfilesContainer}>
            <img className={s.accMenu__userProfilesImg} src={profile.picUrl} />
            <p className={s.accMenu__userProfilesName}>{profile.name}</p>
          </div>
        );
      })}

      {options.map((opt, i) => {
        return (
          <div key={i} className={s.accMenu__linksContainer}>
            <a className={s.accMenu__link} href={opt.to}>
              {opt.name}
            </a>
          </div>
        );
      })}
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
