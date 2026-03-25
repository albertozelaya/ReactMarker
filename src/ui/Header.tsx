import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header>
      <img
        src={logo}
        alt="banhcafe-logo"
        className="3xl:w-15 mx-auto my-0 mb-4 w-8 lg:w-9 xl:mb-6 xl:w-11"
      />

      <h1 className="3xl:text-7xl 3xl:tracking-tight text-center text-5xl font-semibold tracking-tight text-gray-800 sm:text-[2.75rem] md:tracking-wide lg:text-6xl lg:tracking-tight xl:tracking-normal 2xl:text-6xl">
        Registro de Asistencia
      </h1>
    </header>
  );
}
