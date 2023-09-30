import genres from "../data/genres";
import ms from "ms";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24h
    initialData: { count: genres.length, results: genres, next: null },
  });

export default useGenres;
