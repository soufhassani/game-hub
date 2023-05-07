import { HStack, Image, useColorMode } from "@chakra-ui/react";

import logoWhite from "../assets/gamehub.webp";
import logoBlack from "../assets/gamehub-black.webp";
import ColorModeSwitcher from "./ColorModeSwitcher";

const NavBar = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image
        src={colorMode === "dark" ? logoWhite : logoBlack}
        htmlHeight="60px"
        htmlWidth="140px"
        objectFit="contain"
        alt="Game-Gub Logo"
      />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
