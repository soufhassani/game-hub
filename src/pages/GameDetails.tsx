import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandibleText from "../components/game/ExpandibleText";
import GameAttributes from "../components/game/GameAttributes";
import useGameTrailer from "../hooks/useGameTrailer";
import GameTrailer from "../components/game/GameTrailer";
import GamesScreenshots from "../components/game/gamesScreenshots";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  console.log(game);

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandibleText>{game.description_raw}</ExpandibleText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GamesScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetails;
