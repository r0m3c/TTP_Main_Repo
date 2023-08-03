import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./index.css"
import { AuthProvider } from "./context/AuthContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
    // <React.StrictMode>
    //     <App />
    // </React.StrictMode>
    <AuthProvider>
        <App />
    </AuthProvider>
);

// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./app/App.jsx";
// import { AuthProvider } from "./context/AuthContext.jsx";

// const root = createRoot(document.getElementById("app"));

// root.render(
//   <AuthProvider>
//     <App />
//   </AuthProvider>
// );
