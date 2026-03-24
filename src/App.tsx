import { useMarkContext } from "./contexts/useMarkContext";
import { Notifications } from "./ui/notifications/Notifications";
import Title from "./ui/Title";

import MarkHistory from "./features/history/MarkHistory";
import MarkerForm from "./features/marker/MarkerForm";
import "./index.css";
import BackgroundLayout from "./ui/BackgroundLayout";
import Spinner from "./ui/Spinners";
import { configureDevExtreme } from "./utils/devextreme-config";

function App() {
  const { isLoading, responses } = useMarkContext();

  configureDevExtreme();

  if (isLoading)
    return (
      <div className="parent-spinner bg-gray-100">
        <Spinner />
      </div>
    );

  return (
    <>
      {responses.length > 0 && <Notifications responses={responses} />}

      <div className="relative h-screen w-screen bg-gray-100 py-10 sm:px-[10%] sm:py-10 md:px-[15%] lg:h-fit xl:px-14 xl:py-12 2xl:py-15">
        <BackgroundLayout />

        <div className="mx-auto my-0 h-full w-10/12">
          <Title />

          <div className="xl:align-start 3xl:gap-20 mt-10 flex flex-col gap-8 sm:mt-10 sm:gap-8 xl:mt-14 xl:gap-10 2xl:mt-20 2xl:gap-18">
            <MarkerForm />
            <MarkHistory />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
