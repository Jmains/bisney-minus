import Head from "next/head";

import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/carousel/Carousel";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
    </div>
  );
}
