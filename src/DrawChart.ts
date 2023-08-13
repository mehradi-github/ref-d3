import {
  ScaleOrdinal,
  axisLeft,
  extent,
  scaleLinear,
  scaleLog,
  scaleSqrt,
} from "d3";

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
const drawChart = (
  SVG: any,
  chartData: ChartData[],
  data: ChartData[],
  height: number,
  width: number,
  margin: Margin,
  colorScale: ScaleOrdinal<string, unknown, never>,
  selectedContinent: string[]
) => {
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
  let rScale = scaleSqrt()
    .domain(
      extent<ChartData, number>(data, (d) => d.population) as [Number, number]
    )
    .range([1, maxRadius]);

  console.log(xScale(20));
  console.log(yScale(50));
  console.log(rScale(1100948));
  console.log(colorScale("Africa"));

  SVG.selectAll("circle")
    .data(chartData)
    .transition()
    .duration(500)
    .attr("cx", (d: ChartData) => xScale(d.gdp_cap))
    .attr("cy", (d: ChartData) => yScale(d.life_exp))
    .attr("r", (d: ChartData) => rScale(d.population))
    .attr("opacity", 1)
    .style("fill", (d: ChartData) => colorScale(d.continent));

  SVG.append("g")
    .call(axisLeft(yScale).ticks(5))
    .attr("transform", `translate(${margin.left},0)`)
    .call((g: any) => g.select(".domain").remove());
};
export default drawChart;
