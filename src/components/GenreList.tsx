import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenresListSkelaton from "./GenresListSkelaton";
import useGameQuery from "../Store";

const GenreList = () => {
  const genreId = useGameQuery((s) => s.gameQuery.genreId);
  const setGenreId = useGameQuery((s) => s.setGenreId);
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return null;
  if (isLoading)
    return (
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <ListItem key={skeleton} paddingY="5px">
              <GenresListSkelaton />
            </ListItem>
          ))}
      </List>
    );
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                textAlign="left"
                fontWeight={genre.id === genreId ? "bold" : "normal"}
                onClick={() => setGenreId(genre.id)}
                fontSize="lg"
                variant="links"
                whiteSpace="normal"
                sx={{ textWrap: "wrap" }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
