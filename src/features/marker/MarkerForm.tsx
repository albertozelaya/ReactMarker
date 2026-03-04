import { useState } from "react";

import Button from "../../components/Button";
import MarkerCheckBox from "./MarkerCheckBox";

function MarkerForm() {
  const [checks, setChecks] = useState({
    incoming: false,
    outgoing: false,
    lunchStart: false,
    lunchEnd: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecks((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  const handleSubmit = function (e: React.BaseSyntheticEvent) {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-6 rounded-lg bg-gray-50 px-8 pt-8 pb-6 shadow-lg xl:grid xl:w-1/3 xl:grid-cols-2 xl:py-12"
    >
      <div className="flex xl:items-center">
        <ul className="w-full space-y-2.5 xl:space-y-3">
          <MarkerCheckBox
            label="Entrada"
            name="incoming"
            checked={checks.incoming}
            onChange={handleChange}
          />
          <MarkerCheckBox
            label="Salida"
            name="outgoing"
            checked={checks.outgoing}
            onChange={handleChange}
          />
          <MarkerCheckBox
            label="Inicio almuerzo"
            name="lunchStart"
            checked={checks.lunchStart}
            onChange={handleChange}
          />
          <MarkerCheckBox
            label="Final almuerzo"
            name="lunchEnd"
            checked={checks.lunchEnd}
            onChange={handleChange}
          />
        </ul>
      </div>

      <Button title="marcar" />
    </form>
  );
}

export default MarkerForm;
