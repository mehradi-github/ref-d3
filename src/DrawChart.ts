import {
  ScaleOrdinal,
  axisBottom,
  axisLeft,
  extent,
  mean,
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
  selectedContinent: string
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

  const colorPoint = (continent: string) => {
    return selectedContinent === continent || selectedContinent === "all";
  };

  SVG.selectAll("circle")
    .data(chartData)
    .transition()
    .duration(500)
    .attr("cx", (d: ChartData) => xScale(d.gdp_cap))
    .attr("cy", (d: ChartData) => yScale(d.life_exp))
    .attr("r", (d: ChartData) => rScale(d.population))
    .attr("opacity", (d: ChartData) => (colorPoint(d.continent) ? 1 : 0.5))
    .style("fill", (d: ChartData) =>
      colorPoint(d.continent) ? colorScale(d.continent) : "lightgrey"
    );

  SVG.append("g")
    .call(axisLeft(yScale).ticks(5))
    .attr("transform", `translate(${margin.left},0)`)
    .call((g: any) => g.select(".domain").remove());

  SVG.append("g")
    .call(axisBottom(xScale).ticks(5))
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call((g: any) => g.select(".domain").remove());

  SVG.select(".life-avg")
    .transition()
    .duration(500)
    .attr("x1", margin.left)
    .attr(
      "y1",
      mean(chartData, (d: ChartData) => yScale(d.life_exp))
    )
    .attr("x2", width - margin.right)
    .attr(
      "y2",
      mean(chartData, (d: ChartData) => yScale(d.life_exp))
    );
  SVG.select(".gdp-avg")
    .transition()
    .duration(500)
    .attr(
      "x1",
      mean(chartData, (d: ChartData) => xScale(d.gdp_cap))
    )
    .attr("y1", height - margin.bottom)
    .attr(
      "x2",
      mean(chartData, (d: ChartData) => xScale(d.gdp_cap))
    )
    .attr("y2", margin.top);
};
export default drawChart;
