import { useMarkContext } from "../../contexts/useMarkContext";

export default function User() {
  const { user } = useMarkContext();
  const name = user?.data?.text
    ?.split(" ")[0]
    .split("")
    .map((letter, index) =>
      index === 0 ? letter.toUpperCase() : letter.toLowerCase(),
    );

  return (
    <aside className="fixed top-3 left-3 z-30 text-sm text-gray-600 lg:text-base 2xl:text-lg">
      <p className="tracking-wide">Hola,</p>
      <strong className="tracking-wide text-gray-700 capitalize sm:text-base lg:text-lg 2xl:text-xl">
        {name}
      </strong>
    </aside>
  );
}
