import { HStack, Image } from "@chakra-ui/react";
import logoWhite from "../assets/gamehub.webp";
import logoBlack from "../assets/gamehub-black.webp";
import logoIconBlack from "../assets/logoIcon-black.webp";
import logoIconWhite from "../assets/logoIcon-white.webp";
import ColorModeSwitcher from "./ColorModeSwitcher";
import SearchInput from "./SearchInput";
import useLogo from "../hooks/useLogo";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const logos = [logoBlack, logoIconBlack, logoWhite, logoIconWhite];
  let { logo, width } = useLogo(logos);

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
