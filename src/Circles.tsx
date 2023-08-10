import React, { FC } from "react";
interface Iprop {
  year: number;
  width: number;
  height: number;
}
const margin = { t: 30, r: 20, b: 50, l: 50 };
const Circles: FC<Iprop> = ({ year, width, height }) => {
  return <svg viewBox={`0 0 width height`}></svg>;
};
export default Circles;
