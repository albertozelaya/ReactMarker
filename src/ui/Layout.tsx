import Header from "./Header";

interface LayoutParams {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutParams) {
  return (
    <div className="3xl:top-[50%] mx-auto my-0 h-full w-10/12">
      <div className="3xl:gap-10 flex flex-col gap-10 sm:gap-18 lg:gap-12 xl:gap-6 2xl:gap-10">
        <Header />

        <div className="3xl:text-2xl 3xl:px-52 3xl:leading-8 3xl:tracking-normal 3xl:text-gray-800 text-center leading-6 tracking-wide lg:text-lg lg:leading-7 xl:px-24 2xl:px-36">
          <p>
            Registre su entrada o salida de forma segura.
            <strong className="font-semibold text-gray-950">
              &nbsp;Consulte su historial en el calendario inferior.
            </strong>
          </p>
        </div>
      </div>

      {/* <h2 className="mb-4 text-center tracking-widest text-gray-400 uppercase sm:text-sm md:text-base lg:text-base xl:mb-6 2xl:mb-10 2xl:text-start 2xl:text-xl">
          Registro de asistencia
        </h2> */}

      <div className="xl:align-start 3xl:gap-20 mt-10 flex flex-col gap-8 sm:mt-15 sm:gap-8 xl:mt-14 xl:gap-10 2xl:mt-20 2xl:gap-18">
        {children}
      </div>
    </div>
  );
}
