import { TitleProps } from "./types";

export default function Title(args: TitleProps) {
  const { children, className } = args;
  return (
    <h1 className={`text-3xl font-bold font-mono text-orange-600 ${className}`}>
      {children}
    </h1>
  );
}
