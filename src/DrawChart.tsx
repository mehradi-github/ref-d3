import React, { FC } from "react";
import { extent, scaleLinear, scaleLog } from "d3";

interface Iprop {
  SVG: any;
  chartData: ChartData[];
  data: ChartData[];
  height: number;
  width: number;
  margin: Margin;
  colorScale: any;
  selectedContinent: string;
}
export type ChartData = {
  country: string;
  year: number;
  population: number;
  continent: string;
  life_exp: number;
  gdp_cap: number;
};
export type Margin = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};
const drawChart: FC<Iprop> = ({ chartData, data, margin, width, height }) => {
  // scales
  let maxRadius: number = 40;
  let xScale = scaleLog()
    .domain(
      extent<ChartData, number>(data, (d) => d.gdp_cap) as [Number, number]
    )
    .range([margin.left, width - margin.right]);

  let yScale = scaleLinear()
    .domain(
      extent<ChartData, number>(data, (d) => d.life_exp) as [Number, number]
    )
    .range([height - margin.bottom, margin.top]);

  return <div>drawChart</div>;
};
export default drawChart;
