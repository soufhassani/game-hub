import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/gamehub.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image
        src={logo}
        htmlHeight="60px"
        htmlWidth="140px"
        objectFit="contain"
        alt="Game-Gub Logo"
      />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default NavBar;
