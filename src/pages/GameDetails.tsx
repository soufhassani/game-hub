import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandibleText from "../components/game/ExpandibleText";
import GameAttributes from "../components/game/GameAttributes";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!);
  console.log(game);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandibleText>{game.description_raw}</ExpandibleText>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetails;
