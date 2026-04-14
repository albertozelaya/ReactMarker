import Logo from "../components/Logo";
import { useMarkContext } from "../contexts/useMarkContext";
import User from "../features/user/User";

export default function Header() {
  const { user } = useMarkContext();

  return (
    <header>
      {user && <User />}

      <div className="3xl:w-13 mx-auto my-0 mb-4 w-8 lg:w-9 xl:mb-4 xl:w-10">
        <Logo />
      </div>

      <h1 className="3xl:text-6xl 3xl:tracking-tight text-center text-5xl font-bold tracking-tight text-gray-800 sm:text-[2.75rem] md:tracking-wide lg:text-5xl lg:tracking-tight xl:tracking-normal">
        Registro de Asistencia
      </h1>
    </header>
  );
}
