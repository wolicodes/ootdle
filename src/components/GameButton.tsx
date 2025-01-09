import React from "react";
import classes from "./GameButton.module.css";

interface Props {
  image: string;
  mainText: string;
  description: string;
}

const GameButton: React.FC<Props> = ({ image, mainText, description }) => {
  return (
    <div className={classes.container}>
      <div style={{ width: "50px" }}>
        <img src={image} />
      </div>
      <div>
        <div className={classes.mainText}>{mainText}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default GameButton;
