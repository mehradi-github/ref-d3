import React, { FC } from "react";
import { Margin } from "./DrawChart";
import data from "./datas.json";
interface Iprop {
  year: number;
  width: number;
  height: number;
}
const margin: Margin = { left: 50, right: 20, top: 30, bottom: 50 };
const Circles: FC<Iprop> = ({ year, width, height }) => {
  return <svg viewBox={`0 0 width height`}></svg>;
};
export default Circles;
