import React from "react";
import "./style.css";
import SchemeColor from "../SchemeColor";

const Palette = ({ paletteData }) => {
  const { name, image, attribution, direction, description, colors } = paletteData;
  const { name:aName, url } = attribution;

  const orientace = (vertical) => {
    return vertical
      ? "palette-scheme palette-scheme--vertical"
      : "palette-scheme palette-scheme--horizontal";
  };

  return (
    <main>
      <div className="palette">
        <div className={orientace(direction === "vertical")}>
          <img src={image} alt="obrázek" /> 
          <div className="scheme-colors">{colors.map((color) => <SchemeColor color={color} key={color} />)}</div>
        </div>
        <div className="palette-info">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>
            Photo by <a href={url}>{aName}</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Palette;
