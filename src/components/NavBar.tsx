import { HStack, Image } from "@chakra-ui/react";

import ColorModeSwitcher from "./ColorModeSwitcher";
import SearchInput from "./SearchInput";
import useLogo from "../hooks/useLogo";

const NavBar = () => {
  let { logo, width } = useLogo();

  return (
    <HStack padding="10px" justifyContent="space-between" gap="10px">
      <Image
        src={logo}
        htmlHeight="60px"
        htmlWidth={width}
        objectFit="contain"
        alt="Game-Gub Logo"
      />
      <SearchInput />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
