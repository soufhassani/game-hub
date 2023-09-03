import genres from "../data/genres";
import ms from "ms";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.get,
    staleTime: ms("24h"), // 24h
    initialData: { count: genres.length, results: genres, next: null },
  });

export default useGenres;
