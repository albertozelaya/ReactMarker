interface CheckBoxParams {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function MarkerCheckBox({ label, name, checked, onChange }: CheckBoxParams) {
  return (
    <li className="3xl:gap-12 flex items-center justify-between lg:gap-6 2xl:gap-10">
      <label
        htmlFor={name}
        className="font-medium tracking-wider text-gray-800 xl:tracking-wide 2xl:text-lg 2xl:tracking-normal"
      >
        {label}
      </label>

      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
        className="focus:ring-main h-4 w-4 cursor-pointer focus:ring focus:outline-none"
      />
    </li>
  );
}

export default MarkerCheckBox;
