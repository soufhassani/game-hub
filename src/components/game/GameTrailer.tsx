import { AspectRatio, Box, Select, Spinner } from "@chakra-ui/react";
import useGameTrailer from "../../hooks/useGameTrailer";
import { useState } from "react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const [quality, setQuality] = useState<"480" | "max">("480");
  const { data, isLoading, error } = useGameTrailer(gameId);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    if (value === "480" || value === "max") return setQuality(value);
  };
  const firstTrailer = data?.results[0];

  return firstTrailer ? (
    <Box position="relative">
      <Box
        maxW={"100px"}
        position="absolute"
        right="10px"
        top="10px"
        zIndex="999"
      >
        <Select onChange={handleChange}>
          <option value="480">480p</option>
          <option value="max">HD</option>
        </Select>
      </Box>
      <AspectRatio ratio={16 / 9}>
        <video
          src={firstTrailer.data[quality]}
          poster={firstTrailer.preview}
          controls
        ></video>
      </AspectRatio>
    </Box>
  ) : null;
};

export default GameTrailer;
