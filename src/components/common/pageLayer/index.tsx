import { PageLayerProps } from "./types";

export default function PageLayer(args: PageLayerProps) {
  const { children } = args;

  return (
    <div className="flex-1 flex-col overflow-scroll px-4 sm:basis-full">
      {children}
    </div>
  );
}
