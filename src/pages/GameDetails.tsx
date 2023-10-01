import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandibleText from "../components/game/ExpandibleText";
import GameAttributes from "../components/game/GameAttributes";
import GameTrailer from "../components/game/GameTrailer";
import GamesScreenshots from "../components/game/GamesScreenshots";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
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
  );
};

export default GameDetails;
