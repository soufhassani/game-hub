import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitcher = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        sx={{
          ".chakra-switch__track, .chakra-switch__track *": {
            transition: "all .3s ease",
          },
        }}
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitcher;
