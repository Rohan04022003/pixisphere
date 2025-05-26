import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import PhotographerContextProvider from "./context/PhotographerContextProvider.jsx";
import { SuggestionProvider } from "./context/SuggestionContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <SuggestionProvider>
    <PhotographerContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </PhotographerContextProvider>
      </SuggestionProvider>
  </StrictMode>
);
