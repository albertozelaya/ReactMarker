import MarkHistory from "./features/history/MarkHistory";
import MarkerForm from "./features/marker/MarkerForm";
import { ErrorNotification } from "./features/ui/Errors";
import Title from "./features/ui/Title";
import { useMarkContext } from "./hooks/useMarkContext";

import "./index.css";

function App() {
  const { errors, clearError } = useMarkContext();
  const { markers } = useMarkContext();

  return (
    <>
      {errors.length > 0 && (
        <div className="fixed top-4 right-4 flex flex-col gap-2">
          {errors.map((error) => (
            <ErrorNotification
              key={error}
              message={error}
              onClose={clearError}
            />
          ))}
        </div>
      )}

      <div className="h-screen w-screen bg-gray-100 py-10 sm:px-[10%] sm:py-10 md:px-[15%] xl:px-14 xl:py-12 2xl:py-15">
        <div className="mx-auto my-0 h-full w-10/12">
          <Title />

          <div className="xl:align-start 3xl:gap-20 mt-10 flex flex-col gap-8 sm:mt-10 sm:gap-8 xl:mt-16 xl:flex-row xl:items-start xl:gap-10 2xl:mt-20 2xl:gap-18">
            {markers && <MarkerForm />}
            <MarkHistory />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
