import React from "react";
import Reset from "./reset";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContactProvider from "./contexts/contactContext";
import GlobalLoading from "./components/LoadingRequest";
import Providers from "./contexts/userContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <GlobalLoading>
        <ContactProvider>
          <Providers>
            <App />
          </Providers>
        </ContactProvider>
      </GlobalLoading>
    </BrowserRouter>
  </React.StrictMode>
);
