import { TagProps } from "./types";

export default function Tag(args: TagProps) {
  const { tag, className } = args;
  return (
    <div className={`rounded-lg px-2 py-0.5 bg-gray-200 ${className}`}>
      <p className="text-emerald-500">{tag}</p>
    </div>
  );
}
