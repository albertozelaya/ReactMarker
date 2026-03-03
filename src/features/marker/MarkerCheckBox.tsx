interface CheckBoxParams {
  label: string;
}

function MarkerCheckBox({ label }: CheckBoxParams) {
  return (
    <li className="flex items-center justify-between gap-6">
      <label
        htmlFor="incoming"
        className="font-medium tracking-wide text-gray-800"
      >
        - {label}
      </label>

      <input
        type="checkbox"
        name="incoming"
        id="incoming"
        className="h-4 w-4 cursor-pointer"
      />
    </li>
  );
}

export default MarkerCheckBox;
