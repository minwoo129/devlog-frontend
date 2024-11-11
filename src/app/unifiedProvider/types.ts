export interface UnifiedProviderProps {
  children: JSX.Element;
}

export type GroupedProviderType = (args: GroupedProviderProps) => JSX.Element;
type GroupedProviderProps = {
  providers: ProviderType[];
  children: JSX.Element;
};

export type ProviderType = (args: ProviderProps) => JSX.Element;
type ProviderProps = {
  children: React.ReactNode;
};

export interface ProviderCommonExtendProps {
  children: React.ReactNode;
}

export interface ReactQueryProviderProps extends ProviderCommonExtendProps {}
