"use client";
import { useState } from "react";
import { ReactQueryProviderProps } from "./types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function ReactQueryProvider(args: ReactQueryProviderProps) {
  const { children } = args;
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 5 * 60 * 1000,
            retry: 2,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
