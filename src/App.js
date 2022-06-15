import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AppRoutes from "./Routes/Route";
import Aside from "./components/Aside";
import React from "react";

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
          <div class="row">
            <div class="col-sm-12" style={{ backgroundColor: "skyblue" }}>
              <Header />
            </div>
            <div
              class="col-sm-4"
              style={{ backgroundColor: "lightsalmon", height: "85vh" }}
            >
              <Aside />
            </div>
            <div
              class="col-sm-8"
              style={{ backgroundColor: "lightgrey", height: "85vh" }}
            >
              <AppRoutes />
            </div>
          </div>
        </BrowserRouter>
      </React.Suspense>
    </div>
  );
}

export default App;
