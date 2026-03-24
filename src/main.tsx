import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { MarkContext } from "./contexts/MarksContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <MarkContext>
    <App />
  </MarkContext>,
);
