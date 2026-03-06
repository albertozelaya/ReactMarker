import MarkHistory from "./features/history/MarkHistory";
import MarkerForm from "./features/marker/MarkerForm";
import Title from "./features/ui/Title";

import "./index.css";

function App() {
  return (
    <div className="h-screen w-screen bg-gray-100 py-12 sm:px-[10%] sm:py-10 md:px-[15%] xl:px-14 xl:py-12 2xl:py-15">
      <div className="mx-auto my-0 h-full w-10/12">
        <Title />

        <div className="xl:align-start mt-14 flex flex-col gap-10 sm:mt-10 sm:gap-8 xl:mt-16 xl:flex-row xl:items-start xl:gap-10 2xl:mt-20 2xl:gap-18">
          <MarkerForm />
          <MarkHistory />
        </div>
      </div>
    </div>
  );
}

export default App;
