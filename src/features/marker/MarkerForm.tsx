import { useState } from "react";

import Button from "../../components/Button";
import { useMarkContext } from "../../hooks/useMarkContext";
import type { MarkersIntl } from "../../interfaces/markersInt";
import { ErrorForm } from "../ui/Errors";
import MarkerCheckBox from "./MarkerCheckBox";

function MarkerForm() {
  const { markers } = useMarkContext();
  const markersData = markers as MarkersIntl;
  const [checks, setChecks] = useState(() =>
    Object.fromEntries(markersData?.data?.map((c) => [c.type, false])),
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const updatedChecks = {
      ...checks,
      [e.target.name]: e.target.checked,
    };

    setChecks(updatedChecks);

    if (Object.values(updatedChecks).some(Boolean)) setErrorMessage("");
  };

  const handleSubmit = function (e: React.BaseSyntheticEvent) {
    e.preventDefault();
    const sendValue = Object.fromEntries(
      Object.entries(checks).filter(([, value]) => value),
    );

    if (Object.keys(sendValue).length === 0)
      return setErrorMessage("Debe seleccionar un valor");

    const value = Object.keys(sendValue)[0];
    const sendFormatted = { type: value };

    console.log(sendFormatted);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="3xl:py-14 3xl:gap-24 flex max-w-full flex-col gap-6 rounded-lg bg-gray-50 px-8 pt-8 pb-6 shadow-lg lg:flex-row lg:justify-between lg:px-10 lg:py-10 xl:grid xl:w-1/3 xl:grid-cols-1 xl:gap-8 xl:pt-12 xl:pb-8 2xl:flex 2xl:w-1/2 2xl:flex-row 2xl:justify-evenly 2xl:gap-14 2xl:py-12"
    >
      <div>
        <div className="flex xl:items-center">
          <ul className="3xl:space-y-5 w-full space-y-2.5 xl:space-y-3 2xl:space-y-4">
            {markers?.data?.map((check) => (
              <MarkerCheckBox
                key={check.type}
                label={check.description}
                name={check.type}
                checked={checks[check.type]}
                onChange={handleChange}
              />
            ))}
          </ul>
        </div>

        {errorMessage && <ErrorForm error={errorMessage} />}
      </div>

      <Button title="marcar" />
    </form>
  );
}

export default MarkerForm;
