import MarkHistory from "./features/history/MarkHistory";
import MarkerForm from "./features/marker/MarkerForm";

import "./index.css";

function App() {
  return (
    <div className="h-screen w-screen bg-gray-100 py-12 xl:px-16 xl:py-20">
      <div className="mx-auto my-0 h-full w-10/12">
        <header>
          <h1 className="text-center text-3xl font-semibold tracking-wider text-gray-800 uppercase">
            Marcador
          </h1>
        </header>

        <div className="mt-14 flex flex-col gap-10 xl:mt-20">
          <MarkerForm />
          <MarkHistory />
        </div>
      </div>
    </div>
  );
}

export default App;
