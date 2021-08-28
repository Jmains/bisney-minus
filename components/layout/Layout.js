import { useState } from "react";
import useScreenWidth from "../../utils/useScreenWidth";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import s from "./Layout.module.css";
export default function Layout({ children }) {
  const [viewSmScreenAnyway, setViewSmScreenAnyway] = useState(false);
  const { width: currentScreenWidth } = useScreenWidth();
  const smScreenBreakPoint = 460;
  return (
    <div>
      {currentScreenWidth > smScreenBreakPoint ? (
        <>
          <div className={s.bg__color}></div>
          <Navbar />
          <main className={s.layout}>{children}</main>
          <Footer />
        </>
      ) : (
        <>
          {viewSmScreenAnyway ? (
            <>
              <div className={s.bg__color}></div>
              <Navbar />
              <main className={s.layout}>{children}</main>
              <Footer />
            </>
          ) : (
            <>
              <div className={s.bg__color}></div>
              <div className={s.ios__container}>
                <div className={s.ios__content}>
                  <h2 style={{ letterSpacing: "1px", fontSize: "2rem", textAlign: "center" }}>
                    Welcome to Bisney-
                  </h2>
                  <p style={{ fontWeight: "500", fontSize: "1.25rem", textAlign: "center" }}>
                    Download our iOS App to start streaming
                  </p>
                  <div className={s.ios__downloadLink}>
                    <img
                      src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6B411652EA166EFDEE8819D926C162D2A8176690153575D04E566058467D35B0/scale?format=png"
                      alt="download ios link"
                    />
                  </div>
                  <div className={s.ios__divider}></div>
                </div>
                <div className={s.ios__linksContainer}>
                  <a className={s.ios__links} href="#">
                    Manage Account
                  </a>
                  <a className={s.ios__links} href="#">
                    Help
                  </a>
                </div>

                <button
                  onClick={() => {
                    setViewSmScreenAnyway(true);
                  }}
                  className={s.ios__viewSmScreenBtn}
                >
                  View app on small screen anyway
                </button>
                <p className={s.note}>Note: App is not optimized for small screens</p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
