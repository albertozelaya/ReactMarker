import { useMarkContext } from "../../contexts/useMarkContext";

export default function User() {
  const { user } = useMarkContext();
  const name = user?.data?.text?.split(" ")[0];

  return (
    <aside className="fixed top-3 left-3 text-sm text-gray-600 xl:text-base 2xl:text-lg">
      <p className="tracking-wide">Hola,</p>
      <strong className="tracking-wide text-gray-700 capitalize sm:text-base xl:text-lg 2xl:text-xl">
        {name}
      </strong>
    </aside>
  );
}
