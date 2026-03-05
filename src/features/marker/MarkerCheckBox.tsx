interface CheckBoxParams {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function MarkerCheckBox({ label, name, checked, onChange }: CheckBoxParams) {
  return (
    <li className="flex items-center justify-between lg:gap-6">
      <label
        htmlFor={name}
        className="font-medium tracking-wider text-gray-800 xl:tracking-wide"
      >
        {label}
      </label>

      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 cursor-pointer"
      />
    </li>
  );
}

export default MarkerCheckBox;
