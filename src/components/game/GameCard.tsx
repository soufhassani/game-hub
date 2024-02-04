import Games from "../../entities/Games";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformsIconList from "../PlatformsIconList";
import CriticScore from "../CriticScore";
import getCroppedImageUrl from "../../services/image-url";
import { Link } from "react-router-dom";
import { useGameStore, uselinkState } from "../../store/Store";
import { useRef } from "react";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const gameStore = useGameStore();
  const setFromHome = uselinkState((s) => s.setFromHome);
  const handleClick = () => {
    const rect = imageRef.current!.getBoundingClientRect();
    gameStore.setBackground_image(game.background_image);
    gameStore.title(game.name);
    gameStore.setHeight(rect?.height!);
    gameStore.setWidth(rect?.width!);
    gameStore.setLeft(rect?.left!);
    gameStore.setY(rect?.y!);
    gameStore.setX(rect?.x!);
    setFromHome(true);
  };
  return (
    <>
      <Card>
        <Link onClick={handleClick} to={"/games/" + game.slug}>
          <Image
            transition="transform .3s ease"
            _hover={{ transform: "scale(1.03)" }}
            ref={imageRef}
            src={getCroppedImageUrl(game.background_image)}
          />
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
            <Link onClick={handleClick} to={"/games/" + game.slug}>
              {game.name}
            </Link>
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
