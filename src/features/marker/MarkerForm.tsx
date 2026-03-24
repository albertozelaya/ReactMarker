import { useState } from "react";
import Button from "../../components/Button";
import { useMarkContext } from "../../contexts/useMarkContext";
// import type { MarkersIntl } from "../../interfaces/markersInt";
import { insertMark } from "../../services/apiMarkers";
// import { ErrorForm } from "../../ui/Errors";
import { SpinnerButton } from "../../ui/Spinners";
// import MarkerCheckBox from "./MarkerCheckBox";

function MarkerForm() {
  const { addResponse, getHistory } = useMarkContext();
  // const { markers } = useMarkContext();
  // const markersData = markers as MarkersIntl;

  // const initialState = Object.fromEntries(
  //   markersData?.data?.map((c) => [c.type, false]),
  // );
  // const [checks, setChecks] = useState(() => initialState);
  // const [errorMessage, setErrorMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [markedTime, setMarkedTime] = useState<string | null>(null);

  const handleSubmit = async function (e: React.BaseSyntheticEvent) {
    e.preventDefault();

    setIsLoading(true);
    // await insertMark({ type: "EN" })
    await insertMark()
      .then((res) => {
        if (res?.errors?.length > 0) {
          addResponse(res?.errors?.join(", "), "error");
        } else {
          addResponse(res?.data?.response, "success");
          setMarkedTime(res?.data?.time ?? null);
          getHistory();
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form
      onSubmit={handleSubmit}
      // className="3xl:py-14 3xl:gap-24 flex max-w-full flex-col gap-6 rounded-lg bg-gray-50 px-8 pt-8 pb-6 shadow-lg lg:flex-row lg:justify-between lg:px-10 lg:py-10 xl:grid xl:w-1/3 xl:grid-cols-1 xl:gap-8 xl:pt-12 xl:pb-8 2xl:flex 2xl:w-1/2 2xl:flex-row 2xl:justify-evenly 2xl:gap-14 2xl:py-12"
      className="z-20 flex flex-col items-center justify-center gap-6 rounded-2xl border border-gray-100 bg-white px-12 py-10 shadow-sm lg:flex-1 lg:px-8 lg:py-9 xl:w-120 xl:self-center 2xl:w-160"
    >
      {/* <div>
        <div className="flex xl:items-center">
          <ul className="3xl:space-y-5 w-full space-y-2.5 xl:space-y-3 2xl:space-y-4">
            {markersData?.data?.map((check) => (
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
      </div> */}

      <h2 className="mb-4 text-center tracking-widest text-gray-400 uppercase sm:text-sm md:text-base lg:text-base xl:mb-6 2xl:mb-10 2xl:text-start 2xl:text-xl">
        Registro de asistencia
      </h2>

      <Button>{isLoading ? <SpinnerButton /> : "Marcar"}</Button>

      {markedTime && (
        <p className="text-sm text-gray-700 md:text-base 2xl:text-lg">
          {markedTime}
        </p>
      )}
    </form>
  );
}

export default MarkerForm;
