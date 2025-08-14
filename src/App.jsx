import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ModalWrapper from "./components/Extension/extensionModalComponents/ModalWrapper"

export default function App() {
  return (
    <Router>
      <ModalWrapper />
      <AppRoutes />
    </Router>
  );
}
