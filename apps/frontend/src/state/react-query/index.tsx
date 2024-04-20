"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      // With SSR, we usually want to set some default staleTime
      // above 0 to avoid refetching immediately on the client
      staleTime: Infinity,
    },
  },
});
export const QueryProvider = ({ children }: { children: ReactNode }) => {
  // const [client] = useState(

  // );
  return (
    <QueryClientProvider
      client={client}
      children={children}
    ></QueryClientProvider>
  );
};
