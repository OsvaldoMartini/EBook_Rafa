import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import registerServiceWorker from "./registerServiceWorker";
//import LocalServiceWorkerRegister from "./sw";

ReactDOM.render(<App />, document.getElementById("root"));

// LocalServiceWorkerRegister();

// //registerServiceWorker;
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", function() {
//     navigator.serviceWorker.register(LocalServiceWorkerRegister).then(
//       function(registration) {
//         // Registration was successful
//         console.log(
//           "ServiceWorker registration successful with scope: ",
//           registration.scope
//         );
//       },
//       function(err) {
//         // registration failed :(
//         console.log("ServiceWorker registration failed: ", err);
//       }
//     );
//   });
// }
