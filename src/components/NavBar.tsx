import { HStack, Image } from "@chakra-ui/react";

import ColorModeSwitcher from "./ColorModeSwitcher";
import SearchInput from "./SearchInput";
import useLogo from "../hooks/useLogo";
import { Link } from "react-router-dom";

const NavBar = () => {
  let { logo, width } = useLogo();

  return (
    <HStack padding="10px" justifyContent="space-between" gap="10px">
      <Link to="/">
        <Image
          src={logo}
          htmlHeight="60px"
          htmlWidth={width}
          objectFit="contain"
          alt="Game-Gub Logo"
        />
      </Link>
      <SearchInput />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
