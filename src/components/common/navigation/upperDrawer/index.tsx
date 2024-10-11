import DrawerMenuBtn from "./drawerMenuBtn";
import { UpperDrawerProps } from "./types";

export default function UpperDrawer(args: UpperDrawerProps) {
  const { isOpen, setOpen } = args;
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-y-0  "
          : " transition-all delay-500 opacity-0 -translate-y-full  ")
      }
    >
      <section
        className={
          " w-screen absolute bg-zinc-600 h-1/2 shadow-xl delay-400 duration-500 ease-in-out transition-all transform border-2 border-sky-400 " +
          (isOpen ? " translate-y-0 " : " -translate-y-full ")
        }
      >
        <article className="relative w-screen px-4 flex flex-col space-y-6 overflow-y-scroll h-full">
          <DrawerMenuBtn
            href={"/testPage"}
            title="테스트1"
            onClick={() => setOpen(false)}
          />
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setOpen(false);
        }}
      ></section>
    </main>
  );
}
