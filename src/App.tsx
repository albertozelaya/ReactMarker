import { Activity, useEffect } from "react";
import "./index.css";

import { useMarkContext } from "./contexts/useMarkContext";
import MarkHistory from "./features/history/MarkHistory";
import { TableToday } from "./features/history/TableToday";
import MarkerForm from "./features/marker/MarkerForm";
import BackgroundLayout from "./ui/BackgroundLayout";
import Layout from "./ui/Layout";
import Loader from "./ui/Loader";
import { Notifications } from "./ui/notifications/Notifications";
import SeeMore from "./ui/SeeMore";
import { configureDevExtreme } from "./utils/devextreme-config";

function App() {
  const { isLoading, responses, history, historyToday } = useMarkContext();

  useEffect(() => {
    if (history?.data) window.scrollTo({ top: 0, behavior: "instant" });
  }, [history?.data]);

  configureDevExtreme();

  return (
    <>
      {responses.length > 0 && <Notifications responses={responses} />}
      {isLoading && <Loader />}

      <div className="3xl:pt-[8%] relative h-screen w-screen bg-gray-100 pt-20 sm:px-[10%] sm:pt-16 md:px-[15%] md:pt-20 xl:px-16 xl:pt-18 2xl:pt-24">
        <BackgroundLayout />

        <Layout>
          <MarkerForm>
            <TableToday data={historyToday?.data} />
            <SeeMore />
          </MarkerForm>
        </Layout>
      </div>

      <Activity mode={history?.data ? "visible" : "hidden"}>
        <MarkHistory history={history} />
      </Activity>
    </>
  );
}

export default App;
