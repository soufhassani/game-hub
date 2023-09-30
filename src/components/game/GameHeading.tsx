import { Heading } from "@chakra-ui/react";
import useGenre from "../../hooks/useGame";
import usePlatform from "../../hooks/usePlatform";
import useGameQuery from "../../Store";

const GameHeading = () => {
  const genreId = useGameQuery((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);
  const platformId = useGameQuery((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
