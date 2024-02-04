import {
  Box,
  Grid,
  Show,
  GridItem,
  Flex,
  BoxProps,
  GridProps,
} from "@chakra-ui/react";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/game/GameGrid";
import GameHeading from "../components/game/GameHeading";
import GenreList from "../components/game/GenreList";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const MotionGrid = motion<Omit<GridProps, "transition">>(Grid);
  return (
    <MotionGrid
      as={motion.div}
      initial="initial"
      animate="animate"
      exit="exit"
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex gap={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </MotionGrid>
  );
};

export default HomePage;
