import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { AppProviders } from "./AppProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <AppProviders>
      <App />
    </AppProviders>
  </>
);
