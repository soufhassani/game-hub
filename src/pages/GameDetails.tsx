import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: details, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;
  if (error || !details) throw error;

  return (
    <>
      <Heading>{details.name}</Heading>
      <Text>{details.description_raw}</Text>
    </>
  );
};

export default GameDetails;
