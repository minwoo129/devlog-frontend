"use client";
import { UnifiedProviderProps } from "./types";
//import ReactQueryProvider from "./ReactQuery";

export default function UnifiedProvider(args: UnifiedProviderProps) {
  const { children } = args;
  //return <ReactQueryProvider>{children}</ReactQueryProvider>;
  return <>{children}</>;
}