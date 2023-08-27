import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const theGenre = genres.results.find((genre) => genre.id === gameQuery.genre);
  const thePlatform = platforms.results.find(
    (platform) => platform.id === gameQuery.platform
  );
  console.log(theGenre);
  const heading = `${thePlatform?.name || ""} ${theGenre?.name || ""} Games`;
  return (
    <Heading as="h1" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
