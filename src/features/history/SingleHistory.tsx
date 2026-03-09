interface SingleHistoryParams {
  date: string;
  checkInTime: string;
  checkOutTime: string;
}

export default function SingleHistory({
  date,
  checkInTime,
  checkOutTime,
}: SingleHistoryParams) {
  return (
    <figure className="3xl:py-7 3xl:px-5 flex flex-col gap-4 rounded-md border border-gray-100 bg-gray-100 p-4 shadow-md xl:p-5 3xl:leading-7">
      <div className="bg-accent text-accent-text 3xl:text-[1rem] 3xl:p-1.5 w-full rounded-sm p-1 ps-2 text-sm font-bold tracking-wider uppercase lg:text-sm xl:tracking-wide 2xl:text-[0.9rem]">
        <p>{date}</p>
      </div>

      <div>
        <p>Hora de Entrada: {checkInTime}</p>
        <p>Hora de Salida: {checkOutTime}</p>
      </div>
    </figure>
  );
}
