import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.scss";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router basename="/">
            <App />
        </Router>
    </StrictMode>
);
