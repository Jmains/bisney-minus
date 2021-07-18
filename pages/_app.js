import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "../styles/globals.css";

import "swiper/swiper-bundle.min.css";
import Layout from "../components/layout/layout";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
