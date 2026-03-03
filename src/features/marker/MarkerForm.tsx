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

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(e);
  };

  return (
    <article className="grid w-1/3 grid-cols-2 rounded-lg bg-gray-200 px-8 py-12 shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <ul className="space-y-3">
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
    </article>
  );
}

export default MarkerForm;
