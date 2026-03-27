import { MouseIcon } from "./icons/MouseIcon";

export default function SeeMore() {
  return (
    <aside className="3xl:bottom-24 mt-8 flex flex-col items-center gap-1 sm:mt-20 lg:mt-16 xl:mt-20 lg:gap-2 xl:text-gray-700 2xl:absolute 2xl:bottom-16">
      <MouseIcon className="h-6 w-6 animate-bounce fill-gray-700 xl:h-7 xl:w-7" />
      <p className="3xl:text-lg text-sm lg:text-base">Baje para ver mas</p>
    </aside>
  );
}
