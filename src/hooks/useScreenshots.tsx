import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Screenshot } from "../entities/Screenshot";

const useScreenshots = (id: string | number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${id}/screenshots`);

  return useQuery({
    queryKey: ["Game screenshots", id],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
