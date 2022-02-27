import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import Demo from "./Demo";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <RecoilRoot>
        <Demo />
      </RecoilRoot>
    </React.Suspense>
  </React.StrictMode>,
  rootElement
);

