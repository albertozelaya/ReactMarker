import Header from "./Header";

interface LayoutParams {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutParams) {
  return (
    <div className="3xl:top-[50%] mx-auto my-0 h-full w-10/12">
      <div className="flex flex-col gap-4 sm:gap-18 lg:gap-8 xl:gap-3 2xl:gap-5">
        <Header />

        <div className="3xl:text-2xl 3xl:px-52 3xl:leading-8 3xl:tracking-normal text-center leading-6 tracking-wide text-gray-800 lg:text-xl lg:leading-7 xl:px-24 2xl:px-36">
          <p>
            Registre su entrada o salida de forma segura.
            <strong className="font-semibold text-gray-800">
              &nbsp;Consulte su historial en el calendario inferior.
            </strong>
          </p>
        </div>
      </div>

      <div className="xl:align-start 3xl:gap-20 mt-10 flex flex-col gap-8 sm:mt-15 sm:gap-8 xl:mt-14 xl:gap-10 2xl:mt-20 2xl:gap-18">
        {children}
      </div>
    </div>
  );
}
