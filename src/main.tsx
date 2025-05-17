import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SideBar from "./Components/SideBar";
// @ts-ignore
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SideBar />
  </StrictMode>
);
