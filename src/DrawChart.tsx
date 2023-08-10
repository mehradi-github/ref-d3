import React, { FC } from "react";
import { extent, scaleLog } from "d3";

interface Iprop {
  SVG: any;
  chartData: ChartData[];
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
const drawChart: FC<Iprop> = ({chartData}) => {
  // scales
  let maxRadius: number = 40;
  let xScale = scaleLog()
  .domain(extent(chartData,d=>d.gdp_cap);

  return <div>drawChart</div>;
};
export default drawChart;
