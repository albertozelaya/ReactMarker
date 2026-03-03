import MarkHistory from "./features/history/MarkHistory";
import MarkerForm from "./features/marker/MarkerForm";

import "./index.css";

function App() {
  return (
    <div className="h-screen bg-red-900 px-16 py-20">
      <div className="mx-auto my-0 w-10/12">
        <header>
          <h1 className="text-5xl text-gray-200 uppercase">Marcador</h1>
        </header>

        <div className="mt-20 flex gap-10">
          <MarkerForm />

          <MarkHistory />
        </div>
      </div>
    </div>
  );
}

export default App;
