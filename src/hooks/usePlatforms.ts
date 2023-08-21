import platforms from "../data/platforms";
import apiClient, { DataResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
interface Platforms {
  id: number;
  name: string;
  slug: string;
}
// const usePlatforms = () => useData<Platforms>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<DataResponse<Platforms>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
