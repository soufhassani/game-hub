import Games from "../../entities/Games";
import { SimpleGrid } from "@chakra-ui/react";
import MoreGameDetails from "./MoreGameDetails";
interface Props {
  game: Games;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid as="dl" columns={2}>
      <MoreGameDetails
        term="Platforms"
        data={game.parent_platforms.map((platform) => platform.platform)}
      />
      <MoreGameDetails term="Metascore" data={game.metacritic} />
      <MoreGameDetails term="Genres" data={game.genres} />
      <MoreGameDetails term="Publishers" data={game.publishers} />
    </SimpleGrid>
  );
};

export default GameAttributes;
