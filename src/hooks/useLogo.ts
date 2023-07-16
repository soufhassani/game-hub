import { useEffect, useState } from "react";
import { useColorMode } from "@chakra-ui/react";

// interface Props {
//   defaultLogos: string[];
// }

const useLogo = (defaultLogos: string[]) => {
  const { colorMode } = useColorMode();
  const blackLogo = defaultLogos.filter((logo) => logo.includes("black"));
  const whiteLogo = defaultLogos.filter((logo) => !logo.includes("black"));
  const theLogo = colorMode === "dark" ? whiteLogo : blackLogo;
  const logo = window.innerWidth < 768 ? theLogo[1] : theLogo[0];
  const defaultWidth = window.innerWidth < 768 ? "50px" : "140px";
  const [width, setLogoWidth] = useState(defaultWidth);
  useEffect(() => {
    function handleResize() {
      const newWidth = window.innerWidth < 768 ? "50px" : "140px";
      setLogoWidth(newWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return { logo, width };
};

export default useLogo;
