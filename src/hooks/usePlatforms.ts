import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
// const usePlatforms = () => useData<Platforms>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms, next: null },
  });

export default usePlatforms;
