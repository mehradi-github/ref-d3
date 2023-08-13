import React, { useState } from "react";
import "./App.scss";
import Circles from "./Circles";
import data from "./datas.json";
import { scaleOrdinal, schemeTableau10 } from "d3";
import Slider from "react-input-slider";
import Legend from "./Legend";

const width = 960;
const height = 500;
function App() {
  const [year, setYear] = useState({ x: 1987 });
  const [selectedContinent, setSelectedContinent] = useState("all");

  const continents = [...new Set(data.map((d) => d.continent))];
  const color = scaleOrdinal().domain(continents).range(schemeTableau10);

  function handleLegendClick(continent: string) {
    setSelectedContinent((prevState) =>
      prevState === continent ? "all" : continent
    );
  }
  return (
    <div className="App">
      <h1 className="header">D3.js chart</h1>
      <div className="slider">
        <p>{year.x}</p>
        <Slider
          axis="x"
          xmin={1975}
          xmax={2007}
          xstep={1}
          x={year.x}
          onChange={({ x }) => setYear((state) => ({ ...state, x }))}
        ></Slider>
      </div>
      <Legend
        setContinent={handleLegendClick}
        continent={selectedContinent}
        colorScale={color}
        labels={continents}
      />
      <div className="chart">
        <Circles
          year={year.x}
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
