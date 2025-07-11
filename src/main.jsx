import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FavoriteProvider } from "../src/Contexts/FavContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <FavoriteProvider>
    <App />
    </FavoriteProvider>
  </BrowserRouter>
  
);
