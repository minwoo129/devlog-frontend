import { PageLayerProps } from "./types";

export default function PageLayer(args: PageLayerProps) {
  const { className, children } = args;

  return (
    <div
      className={`flex-1 flex-col overflow-scroll px-16 sm:basis-full ${className}`}
    >
      {children}
    </div>
  );
}
