import React from "react";
import "./App.scss";
import Circles from "./Circles";
const width = 960;
const height = 500;
function App() {
  return (
    <div className="App">
      <h1 className="header">D3.js chart</h1>
      <div className="slider"></div>
      <div className="chart">
        <Circles year={1957} width={width} height={height}></Circles>
      </div>
    </div>
  );
}

export default App;
