import Navbar from "../navbar/Navbar";
import s from "./Layout.module.css";
export default function Layout({ children }) {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <div className={s.bg__color}></div>
      <main className={s.layout}>{children}</main>
      {/* <Footer/> */}
    </div>
  );
}
