import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "../styles/globals.css";
// Import Swiper styles
// import "swiper/swiper.scss";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
