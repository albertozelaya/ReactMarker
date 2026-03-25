import { useMarkContext } from "./contexts/useMarkContext";
import Layout from "./ui/Layout";
import { Notifications } from "./ui/notifications/Notifications";

import MarkHistory from "./features/history/MarkHistory";
import MarkerForm from "./features/marker/MarkerForm";
import "./index.css";
import type { HistoryIntl } from "./interfaces/historyInt";
import BackgroundLayout from "./ui/BackgroundLayout";
import SeeMore from "./ui/SeeMore";
import Spinner from "./ui/Spinners";
import { configureDevExtreme } from "./utils/devextreme-config";

function App() {
  const { isLoading, responses, history } = useMarkContext();
  const historyData = history as HistoryIntl;

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

      <div className="3xl:pt-[8%] relative h-screen w-screen bg-gray-100 pt-16 sm:px-[10%] sm:pt-12 md:px-[15%] lg:h-fit xl:px-16 xl:pt-18 2xl:h-screen 2xl:pt-24">
        <BackgroundLayout />

        <Layout>
          <MarkerForm>
            <SeeMore />
          </MarkerForm>
        </Layout>
      </div>

      {historyData?.data && (
        <div className="bg-gray-50 px-[10%] py-16 sm:py-12 xl:py-18">
          <MarkHistory />
        </div>
      )}
    </>
  );
}

export default App;
