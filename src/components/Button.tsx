interface ButtonParams {
  title: string;
}

export default function Button({ title }: ButtonParams) {
  return (
    <div className="flex items-center justify-center">
      <button className="bg-button hover:bg-button-hover 3xl:text-[1.3rem] cursor-pointer rounded-md px-4 py-2  font-semibold tracking-wider text-gray-100 uppercase shadow-sm transition-all duration-200 active:scale-95 md:tracking-wide xl:px-5 xl:py-2.5 xl:text-base xl:font-bold xl:tracking-wider">
        {title}
      </button>
    </div>
  );
}
