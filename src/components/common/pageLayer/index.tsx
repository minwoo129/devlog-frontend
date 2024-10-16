import { PageLayerProps } from "./types";

export default function PageLayer(args: PageLayerProps) {
  const { className, children } = args;

  return (
    <div
      className={`flex-1 flex-col overflow-y-scroll px-16 min-h-screen ${className}`}
    >
      {children}
    </div>
  );
}
