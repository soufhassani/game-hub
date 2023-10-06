import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GamesScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error || !data) throw error;
  const screenshots = data.results;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {screenshots.map((s) => (
        <Image key={s.id} src={s.image} />
      ))}
    </SimpleGrid>
  );
};

export default GamesScreenshots;
