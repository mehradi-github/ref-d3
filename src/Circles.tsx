import React, { FC } from "react";
interface Iprop {
  year: number;
  width: number;
  height: number;
}
const Circles: FC<Iprop> = ({ year, width, height }) => {
  return <div>Circles</div>;
};
export default Circles;
