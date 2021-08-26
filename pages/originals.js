import Card from "../components/card/Card";
import ContentGrid from "../components/contentGrid/ContentGrid";
import ContentSlider from "../components/contentSlider/ContentSlider";

const headerWrapper = {
  position: "fixed",
  padding: "1rem calc(3.5vw + 24px)",
  paddingTop: "72px",
  // height: "310px",
  paddingBottom: "3rem",
  margin: "0",
  marginTop: "4rem",
  top: "0px",
  left: "0px",
  right: "0px",
  width: "100%",
  background: "var(--bg)",
  zIndex: "30",
};

const titleStyles = {
  textAlign: "center",
  margin: "0",
  textTransform: "uppercase",
  letterSpacing: "10px",
  fontSize: "3rem",
  color: "var(--pri)",
  fontWeight: "500",
  animation: "fadeUp 1000ms ease-in-out",
};

const fadeUp = `
@keyframes fadeUp {
  0%   { transform: scale(1.5) translateY(2rem);}
  100% { transform: scale(1) translateY(0);}
}
`;

export default function Originals() {
  return (
    <div>
      <div style={headerWrapper}>
        <style children={fadeUp} />
        <h2 style={titleStyles}>Originals</h2>
      </div>
      <section id="featured" style={{ marginTop: "13.5rem" }}>
        <div style={{ color: "var(--pri)", fontSize: "1.25rem", letterSpacing: "1px" }}>
          Featured
        </div>
        <ContentGrid>
          {images.map((img, idx) => {
            return <Card key={idx} img={img} />;
          })}
        </ContentGrid>
      </section>
      <section id="movies" style={{ marginTop: "2rem" }}>
        <ContentSlider images={images} title="Movies" />
      </section>
      <section id="series" className="">
        <ContentSlider images={images} title="Series" />
      </section>
      <section id="shorts" className="">
        <ContentSlider images={images} title="Shorts" />
      </section>
      <section id="specials" className="">
        <ContentSlider images={images} title="Specials" />
      </section>
    </div>
  );
}

const images = [
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=800&aspectRatio=1.78&format=jpeg",
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
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F48C2D492B31714C94AB0DD0BCF3D3CA7EAFB658F922BF313011C9D308B9B494/scale?width=800&aspectRatio=1.78&format=jpeg",
  },
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A28CBE90B76869A05C6A1CBCF2E8488D4AA40C3D4047100D2DD33349E05E187A/scale?width=800&aspectRatio=1.78&format=jpeg",
  },
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8A0F5D7C2FEB3B0D3CE7AA153016E54A2619EC12F307B1D168F022FA5B31A6F0/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals",
  },
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A28CBE90B76869A05C6A1CBCF2E8488D4AA40C3D4047100D2DD33349E05E187A/scale?width=800&aspectRatio=1.78&format=jpeg",
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
];
