// import React from "react";
// import { createRoot, ReactDOM } from "react-dom/client";
// import Main from "./Main";

// const root = createRoot(document.getElementById("app"));

// ReactDOM.createRoot(document.getElementById("app")).render(
//     <React.StrictMode>
//         <Main />
//     </React.StrictMode>
    
// );

import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("app")
);
