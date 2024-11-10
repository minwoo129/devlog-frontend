"use client";
import { useState } from "react";
import { ReactQueryProviderProps } from "./types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function ReactQueryProvider(args: ReactQueryProviderProps) {
  const { children } = args;
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
