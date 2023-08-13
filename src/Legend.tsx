import { ScaleOrdinal } from "d3";
import React, { FC } from "react";
import "./Legend.scss";
interface IProp {
  labels: string[];
  colorScale: ScaleOrdinal<string, any, never>;
  setContinent: (continent: string) => void;
  continent: string;
}
const Legend: FC<IProp> = ({ labels, colorScale, setContinent, continent }) => {
  return (
    <div className="legend-container">
      {labels.map((l) => {
        return (
          <div
            style={{ fontWeight: continent === l ? 700 : 400 }}
            className="legend-row"
          >
            <div
              style={{ backgroundColor: colorScale(l) }}
              onClick={() => setContinent(l)}
              className="legend-marker"
            ></div>
            <p className="legend-label">{l}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Legend;
