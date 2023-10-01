import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { DataResponse } from "../services/api-client";
import ms from "ms";
import useGameQuery from "../Store";
import Games from "../entities/Games";

const apiClient = new APIClient<Games>("/games");

const useGames = () => {
  const gameQuery = useGameQuery((s) => s.gameQuery);
  return useInfiniteQuery<DataResponse<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"), //24h
  });
};

export default useGames;
