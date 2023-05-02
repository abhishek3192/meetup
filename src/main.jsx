import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FavouriteContextProvider } from "./store/favorites-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavouriteContextProvider>
      <App />
    </FavouriteContextProvider>
  </React.StrictMode>
);
