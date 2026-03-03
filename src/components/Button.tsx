interface ButtonParams {
  title: string;
}

export default function Button({ title }: ButtonParams) {
  return (
    <div className="flex items-center justify-center">
      <button className="cursor-pointer rounded-md bg-green-600 px-6 py-2 text-lg font-semibold tracking-wider text-white uppercase shadow-sm transition-all duration-200 hover:bg-green-700 active:scale-95">
        {title}
      </button>
    </div>
  );
}
