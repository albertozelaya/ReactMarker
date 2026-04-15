import { MouseIcon } from "./icons/MouseIcon";

export default function SeeMore() {
  return (
    <aside className="absolute bottom-6 flex flex-col items-center gap-1 text-gray-600 xl:gap-2 2xl:bottom-10">
      <MouseIcon className="h-6 w-6 animate-bounce fill-gray-700 xl:h-7 xl:w-7" />
      <p className="3xl:text-lg text-sm lg:text-base">Baje para ver mas</p>
    </aside>
  );
}
