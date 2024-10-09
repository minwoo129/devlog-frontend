import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row min-w-screen min-h-screen">
      <div className="basis-60 min-h-full bg-sky-500 sm:basis-10"></div>
      <div className="basis-full min-h-full bg-red-500"></div>
    </div>
  );
}
