import React, { useState } from "react";
import "./App.scss";
import Circles from "./Circles";
import data from "./datas.json";
import { scaleOrdinal, schemeTableau10 } from "d3";
import Slider from "react-input-slider";

const width = 960;
const height = 500;
function App() {
  const [year, setYear] = useState({ x: 1975 });

  const continents = [...new Set(data.map((d) => d.continent))];
  const color = scaleOrdinal().domain(continents).range(schemeTableau10);
  return (
    <div className="App">
      <h1 className="header">D3.js chart</h1>
      <div className="slider">
        <p>{year.x}</p>
        <Slider axis="x" xmin={1975} xmax={2007} xstep={5} x={year.x}></Slider>
      </div>
      <div className="chart">
        <Circles
          year={1957}
          width={width}
          height={height}
          colorScale={color}
          selectedContinent={continents}
        ></Circles>
      </div>
    </div>
  );
}

export default App;
