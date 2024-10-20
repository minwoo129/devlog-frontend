import { EmptyBodyProps } from "./types";

export default function EmptyBody(args: EmptyBodyProps) {
  const { containerStyle } = args;
  return (
    <div className={containerStyle}>
      <h1>EmptyBody</h1>
    </div>
  );
}
