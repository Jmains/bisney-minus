import Head from "next/head";

import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/carousel/Carousel";
import Studios from "../components/studios/Studios";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section id="slider">
        <Carousel />
      </section>
      <div className="layout">
        <section id="studios">
          <Studios />
        </section>
        <section id="recommended"></section>
        <section id="new"></section>
        <section id="continueWatching"></section>
      </div>
    </div>
  );
}
