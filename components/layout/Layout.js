import Navbar from "../navbar/Navbar";
import s from "./Layout.module.css";
export default function Layout({ children }) {
  return (
    <div>
      <div className={s.bg__color}></div>
      <Navbar />
      <main className={s.layout}>{children}</main>
      {/* <Footer/> */}
    </div>
  );
}
