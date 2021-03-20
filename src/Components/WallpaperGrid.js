import React from "react";
import Card from "./Card";

const WallpaperGrid = (props) => {
  const { data, clickHandler } = props;
  return (
    <div className="grid">
      {data.length === 0 ? "loading..." : ""}
      {data?.map((data, index) => (
        <Card key={index} data={data} clickHandler={clickHandler} />
      ))}
    </div>
  );
};

export default WallpaperGrid;
