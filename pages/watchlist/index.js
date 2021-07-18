import Card from "../../components/card/Card";
import s from "./watchlist.module.css";

export default function Watchlist() {
  return (
    <div className={s.grid}>
      {images.map((img, idx) => {
        return <Card key={idx} img={img} />;
      })}
    </div>
  );
}

const images = [
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=800&aspectRatio=1.78&format=jpeg",
  },
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F48C2D492B31714C94AB0DD0BCF3D3CA7EAFB658F922BF313011C9D308B9B494/scale?width=800&aspectRatio=1.78&format=jpeg",
  },
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BB81D72237DA59D1354C35E750A621E92E11358B3E90B1214EAF81D71BEB65A9/scale?width=800&aspectRatio=1.78&format=jpeg",
  },
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A28CBE90B76869A05C6A1CBCF2E8488D4AA40C3D4047100D2DD33349E05E187A/scale?width=800&aspectRatio=1.78&format=jpeg",
  },
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8A0F5D7C2FEB3B0D3CE7AA153016E54A2619EC12F307B1D168F022FA5B31A6F0/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals",
  },
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8E2CD2E9076193CEBAF0D6C3E17C81D9BA87766D4D18832FF5B730C4D0C08AB9/scale?width=800&aspectRatio=1.78&format=jpeg",
  },
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A70B621E6AEA078E1CC33D0941B23C3CF64EA6EB0C620BBA1BFABB58663A90A3/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals",
  },
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9FE32EC34EF424786CBC0DE0838A861E66863B79A2E62B66D8409538502657BC/scale?width=800&aspectRatio=1.78&format=jpeg",
  },
  // {
  //   url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/144E0B00FAF6DF0ED875565D49E6BDEF07E4555F5128567A2ED4196F37CF409D/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals",
  // },
];
