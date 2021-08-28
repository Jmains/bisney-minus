import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <span className={s.footer__logo}>Bisney-</span>
      <div className={s.footer__linksContainer}>
        <div className={s.footer__linkFlexItem}>
          <a className={s.footer__link} href="#">
            Privacy Policy
          </a>
        </div>
        <div className={s.footer__linkFlexItem}>
          <a className={s.footer__link} href="#">
            Subscriber Agreement
          </a>
        </div>
        <div className={s.footer__linkFlexItem}>
          <a className={s.footer__link} href="#">
            Your California Privacy Rights
          </a>
        </div>
        <div className={s.footer__linkFlexItem}>
          <a className={s.footer__link} href="#">
            Do Not Sell My Personal Information
          </a>
        </div>
        <div className={s.footer__linkFlexItem}>
          <a className={s.footer__link} href="#">
            Children's Online Privacy Policy
          </a>
        </div>
        <div className={s.footer__linkFlexItem}>
          <a className={s.footer__link} href="#">
            Help
          </a>
        </div>
        <div className={s.footer__linkFlexItem}>
          <a className={s.footer__link} href="#">
            Closed Captioning
          </a>
        </div>
        <div className={s.footer__linkFlexItem}>
          <a className={s.footer__link} href="#">
            Supported Devices
          </a>
        </div>
        <div className={s.footer__linkFlexItem}>
          <a className={s.footer__link} href="#">
            Gift Bisney-
          </a>
        </div>
        <div className={s.footer__linkFlexItem}>
          <a className={s.footer__link} href="#">
            About Us
          </a>
        </div>
        <div className={s.footer__linkFlexItem}>
          <a className={s.footer__link} href="#">
            Bisney- Partner Program
          </a>
        </div>
        <div className={s.footer__linkFlexItem}>
          <a className={s.footer__link} href="#">
            Interest-based Ads
          </a>
        </div>
      </div>
      <span className={s.footer__copyright}>&copy; Bisney. All Rights Reserved.</span>
    </footer>
  );
}
