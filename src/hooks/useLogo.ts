import { useEffect, useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import logoWhite from "../assets/gamehub.webp";
import logoBlack from "../assets/gamehub-black.webp";
import logoIconBlack from "../assets/logoIcon-black.webp";
import logoIconWhite from "../assets/logoIcon-white.webp";

// interface Props {
//   defaultLogos: string[];
// }

const useLogo = () => {
  const { colorMode } = useColorMode();
  const theLogo = colorMode === "dark" ? logoWhite : logoBlack;
  const theLogoIcon = colorMode === "dark" ? logoIconWhite : logoIconBlack;
  const logo = window.innerWidth < 768 ? theLogoIcon : theLogo;
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
