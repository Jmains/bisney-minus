import { useState, useEffect, useCallback } from "react";

function getScreenWidth() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(0);

  const handleResize = () => {
    setScreenWidth(getScreenWidth());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
}
