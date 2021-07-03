import Head from "next/head";

import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/carousel/Carousel";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="layout">
        <section id="slider">
          <Carousel />
        </section>
        <section id="recommended"></section>
        <section id="new"></section>
        <section id="continueWatching"></section>
      </div>
    </div>
  );
}
