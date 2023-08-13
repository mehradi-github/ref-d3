import React, { FC, useEffect, useRef } from "react";
import drawChart, { ChartData, Margin } from "./DrawChart";
import data from "./datas.json";
import { select } from "d3";
interface Iprop {
  year: number;
  width: number;
  height: number;
  colorScale: any;
  selectedContinent: string[];
}
const margin: Margin = { left: 50, right: 20, top: 30, bottom: 50 };

const Circles: FC<Iprop> = ({
  width,
  height,
  year,
  colorScale,
  selectedContinent,
}) => {
  const chartData: ChartData[] = data.filter((d) => d.year === year);
  const svgRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const SVG = select(svgRef.current!);
    drawChart(
      SVG,
      chartData,
      data,
      height,
      width,
      margin,
      colorScale,
      selectedContinent
    );
  }, [chartData, height, width, colorScale, selectedContinent]);

  return (
    <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`}>
      {chartData.map((d) => (
        <circle key={d.country} fill="#FFF" />
      ))}

      <text
        fontSize="48px"
        x={width - margin.right - 150}
        y={height - margin.bottom - 50}
      >
        {year}
      </text>
    </svg>
  );
};
export default Circles;
