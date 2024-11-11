"use client";
import React from "react";
import { GroupedProviderType, UnifiedProviderProps } from "./types";
import ReactQueryProvider from "./ReactQuery";
import RecoilProvider from "./Recoil";

const GroupedProvider: GroupedProviderType = ({ providers, children }) =>
  providers.reduce(
    (prev, context) => React.createElement(context, null, prev),
    children
  );

export default function UnifiedProvider(args: UnifiedProviderProps) {
  const { children } = args;
  //return <ReactQueryProvider>{children}</ReactQueryProvider>;
  //return <>{children}</>;
  return (
    <GroupedProvider providers={[ReactQueryProvider, RecoilProvider]}>
      {children}
    </GroupedProvider>
  );
}
