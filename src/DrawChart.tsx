import React, { FC } from "react";
interface Iprop {
  SVG: any;
  chartData: ChartData[];
  data: any;
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
const drawChart: FC<Iprop> = ({}) => {
  // scales
  let maxRadius: number = 40;

  return <div>drawChart</div>;
};
export default drawChart;
