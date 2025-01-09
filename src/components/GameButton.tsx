import React from "react";
import classes from "./GameButton.module.css";
import { ReactSVG } from "../types";

interface Props {
  Icon: ReactSVG;
  iconSize?: number;
  iconColor?: string;
  mainText: string;
  description: string;
  onClick: () => void;
}

const GameButton: React.FC<Props> = ({
  Icon,
  iconSize = 50,
  iconColor,
  mainText,
  description,
  onClick,
}) => {
  return (
    <div className={classes.container} onClick={onClick}>
      <Icon width={iconSize} fill={iconColor} />
      <div>
        <div className={classes.mainText}>{mainText}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default GameButton;
