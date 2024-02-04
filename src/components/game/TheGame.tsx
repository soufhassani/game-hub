import {
  SimpleGrid,
  GridItem,
  Heading,
  Spinner,
  Box,
  Image,
} from "@chakra-ui/react";
import ExpandibleText from "./ExpandibleText";
import GameAttributes from "./GameAttributes";
import GameTrailer from "./GameTrailer";
import GamesScreenshots from "./GamesScreenshots";
import useGameDetail from "../../hooks/useGameDetail";

interface Props {
  slug: string | undefined;
  isFromHome: boolean | undefined;
}

const TheGame = ({ slug, isFromHome }: Props) => {
  const { data: game, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      {!isFromHome && (
        <Box marginBottom={10} position="relative">
          <Image
            src={game.background_image}
            objectFit="cover"
            align="top"
            filter="grayscale(80%) brightness(60%) contrast(150%)"
            height="400px"
            width="100%"
          />
          <Heading
            as="h2"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            {game.name}
          </Heading>
        </Box>
      )}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandibleText>{game.description_raw}</ExpandibleText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GamesScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default TheGame;
