import { HStack, Image } from "@chakra-ui/react";

import ColorModeSwitcher from "./ColorModeSwitcher";
import SearchInput from "./SearchInput";
import useLogo from "../hooks/useLogo";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  let { logo, width } = useLogo();

  return (
    <HStack padding="10px">
      <Image
        src={logo}
        htmlHeight="60px"
        htmlWidth={width}
        objectFit="contain"
        alt="Game-Gub Logo"
      />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
