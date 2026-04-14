import { useState } from "react";

import Button from "../../components/Button";
import { useMarkContext } from "../../contexts/useMarkContext";
import { insertMark } from "../../services/apiMarkers";
import { SpinnerButton } from "../../ui/Spinners";

interface MarkerParams {
  children: React.ReactNode;
}

function MarkerForm({ children }: MarkerParams) {
  const { addResponse, getHistory, getTodayHistory } = useMarkContext();
  const [isLoading, setIsLoading] = useState(false);
  // const [markedTime, setMarkedTime] = useState<string | null>(null);

  // const { markers } = useMarkContext();
  // const markersData = markers as MarkersIntl;

  // const initialState = Object.fromEntries(
  //   markersData?.data?.map((c) => [c.type, false]),
  // );
  // const [checks, setChecks] = useState(() => initialState);
  // const [errorMessage, setErrorMessage] = useState("");

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
          // setMarkedTime(res?.data?.times ?? null);
          getHistory();
          getTodayHistory();
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="3xl:py-8 z-20 flex flex-col items-center justify-center gap-4 px-12 pt-10 lg:px-8 xl:w-120 xl:self-center xl:pt-0 xl:pb-0 2xl:gap-6 2xl:py-20"
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

      <Button>{isLoading ? <SpinnerButton /> : "Marcar"}</Button>

      {/* {markedTime && (
        <p className="text-sm text-gray-700 md:text-base 2xl:text-lg">
          {markedTime}
        </p>
      )} */}

      {children}
    </form>
  );
}

export default MarkerForm;
