import { DefaultViewProps } from "./types";

export default function DefaultView(args: DefaultViewProps) {
  const {} = args;
  return (
    <div className="w-full h-[100px] flex flex-col justify-start items-start p-4 rounded-t-xl border-2 border-green-400">
      <h1>DefaultView</h1>
    </div>
  );
}
