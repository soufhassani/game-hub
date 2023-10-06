import Games from "../../entities/Games";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformsIconList from "../PlatformsIconList";
import CriticScore from "../CriticScore";
import getCroppedImageUrl from "../../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Link to={"/games/" + game.slug}>
        <Image src={getCroppedImageUrl(game.background_image)} />
      </Link>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformsIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
