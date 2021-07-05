import Head from "next/head";

import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/carousel/Carousel";
import Studios from "../components/studios/Studios";
import Recommended from "../components/recommended/Recommended";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="layout">
        <section id="slider">
          <Carousel />
        </section>
        <section id="studios">
          <Studios />
        </section>
        <section id="recommended">
          <Recommended />
        </section>
        <section id="new"></section>
        <section id="continueWatching"></section>
      </div>
    </div>
  );
}
