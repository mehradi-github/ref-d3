import React, { FC, useEffect, useRef } from "react";
import { Margin } from "./DrawChart";
import data from "./datas.json";
import { select } from "d3";
interface Iprop {
  year: number;
  width: number;
  height: number;
  colorScale: any;
  selectedContinent: any;
}
const margin: Margin = { left: 50, right: 20, top: 30, bottom: 50 };

const Circles: FC<Iprop> = ({
  width,
  height,
  year,
  colorScale,
  selectedContinent,
}) => {
  const chartData = data.filter((d) => d.year === year);
  const svgRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const SVG = select(svgRef.current!);
  }, [chartData, height, width, colorScale, selectedContinent]);

  return <svg ref={svgRef} viewBox={`0 0 width height`}></svg>;
};
export default Circles;
