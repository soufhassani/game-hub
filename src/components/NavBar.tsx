import { HStack, Image, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import logoWhite from "../assets/gamehub.webp";
import logoBlack from "../assets/gamehub-black.webp";
import logoIconBlack from "../assets/logoIcon-black.webp";
import logoIconWhite from "../assets/logoIcon-white.webp";
import ColorModeSwitcher from "./ColorModeSwitcher";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const { colorMode } = useColorMode();
  const desktopLogo = colorMode === "dark" ? logoWhite : logoBlack;
  const mobileLogo = colorMode === "dark" ? logoIconWhite : logoIconBlack;
  const defaultLogo = innerWidth < 768 ? mobileLogo : desktopLogo;
  const defaultWidth = window.innerWidth < 768 ? "50px" : "140px";
  const [logo, setLogo] = useState(defaultLogo);
  const [logoWidth, setLogoWidth] = useState(defaultWidth);

  useEffect(() => {
    function handleResize() {
      const newLogo = window.innerWidth < 768 ? mobileLogo : desktopLogo;
      const newWidth = window.innerWidth < 768 ? "50px" : "140px";
      setLogo(newLogo);
      setLogoWidth(newWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <HStack padding="10px">
      <Image
        src={logo}
        htmlHeight="60px"
        htmlWidth={logoWidth}
        objectFit="contain"
        alt="Game-Gub Logo"
      />
      <SearchInput />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
