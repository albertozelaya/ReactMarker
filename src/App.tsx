import { Activity } from "react";
import "./index.css";

import { useMarkContext } from "./contexts/useMarkContext";
import MarkHistory from "./features/history/MarkHistory";
import { TableToday } from "./features/history/TableToday";
import MarkerForm from "./features/marker/MarkerForm";
import type { HistoryIntl } from "./interfaces/historyInt";
import BackgroundLayout from "./ui/BackgroundLayout";
import Layout from "./ui/Layout";
import { Notifications } from "./ui/notifications/Notifications";
import SeeMore from "./ui/SeeMore";
import Spinner from "./ui/Spinners";
import { configureDevExtreme } from "./utils/devextreme-config";

function App() {
  const { isLoading, responses, history, historyToday } = useMarkContext();
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

      <div className="3xl:pt-[8%] relative h-screen w-screen bg-gray-100 pt-20 sm:px-[10%] sm:pt-16 md:px-[15%] md:pt-20 xl:px-16 xl:pt-18 2xl:h-screen 2xl:pt-24">
        <BackgroundLayout />

        <Layout>
          <MarkerForm>
            <TableToday data={historyToday?.data} />
            <SeeMore />
          </MarkerForm>
        </Layout>
      </div>

      <Activity mode={historyData?.data ? "visible" : "hidden"}>
        <MarkHistory />
      </Activity>
    </>
  );
}

export default App;
