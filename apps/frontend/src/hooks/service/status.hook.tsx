import { getStatus } from "@/services/status.services";
import { useQuery } from "@tanstack/react-query";

export const useGetStatus = () => {
  return useQuery({
    queryKey: ["status"],
    queryFn: () => getStatus(),
  });
};
