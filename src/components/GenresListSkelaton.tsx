import { Box, HStack, Skeleton, SkeletonCircle } from "@chakra-ui/react";

const GenresListSkelaton = () => {
  return (
    <Box>
      <HStack>
        <SkeletonCircle size="9" />
        <Skeleton>
          <span>All The Genres</span>
        </Skeleton>
      </HStack>
    </Box>
  );
};

export default GenresListSkelaton;
