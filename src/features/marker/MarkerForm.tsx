import { useState } from "react";

import Button from "../../components/Button";
import MarkerCheckBox from "./MarkerCheckBox";
import { checksData } from "../history/historySlice";

//* http://172.20.19.11:8000/marcador/types

fetch("http://172.20.19.11:8000/marcador", { credentials: "include" })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

function MarkerForm() {
  const initialState = Object.fromEntries(
    checksData.map((c) => [c.type, false]),
  );
  const [checks, setChecks] = useState(() => initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecks(() => ({ ...initialState, [e.target.name]: e.target.checked }));
  };

  const handleSubmit = function (e: React.BaseSyntheticEvent) {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-full flex-col gap-6 rounded-lg bg-gray-50 px-8 pt-8 pb-6 shadow-lg lg:flex-row lg:justify-between lg:px-10 lg:py-10 xl:grid xl:w-1/3 xl:grid-cols-1 xl:gap-8 xl:pt-12 xl:pb-8 2xl:flex 2xl:w-1/2 2xl:flex-row 2xl:justify-evenly 2xl:gap-14 2xl:py-12"
    >
      <div className="flex xl:items-center">
        <ul className="w-full space-y-2.5 xl:space-y-3 2xl:space-y-4">
          {checksData?.map((check, index) => (
            <MarkerCheckBox
              key={index}
              label={check.description}
              name={check.type}
              checked={checks[check.type]}
              onChange={handleChange}
            />
          ))}
        </ul>
      </div>

      <Button title="marcar" />
    </form>
  );
}

export default MarkerForm;
