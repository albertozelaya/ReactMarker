import Button from "../../components/Button";
import MarkerCheckBox from "./MarkerCheckBox";

function MarkerForm() {
  return (
    <article className="grid w-1/3 grid-cols-2 rounded-lg bg-gray-200 px-8 py-12 shadow-lg">
      <div className="flex items-center">
        <ul className="list-inside list-disc space-y-3">
          <MarkerCheckBox label="Entrada" />
          <MarkerCheckBox label="Salida" />
          <MarkerCheckBox label="Inicio almuerzo" />
          <MarkerCheckBox label="Final almuerzo" />
        </ul>
      </div>

      <Button title="marcar" />
    </article>
  );
}

export default MarkerForm;
