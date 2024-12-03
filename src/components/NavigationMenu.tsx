import React from "react";
import classes from "./NavigationMenu.module.css";
import DialogIcon from "../assets/icons/comment-dots.svg?react";
import QuestionIcon from "../assets/icons/question.svg?react";

interface Props {
  currentPage: string;
}

const NavigationMenu: React.FC<Props> = ({ currentPage }) => {
  return (
    <div className={classes.navContainer}>
      <div className={classes.navSubContainer}>
        <QuestionIcon
          className={
            currentPage === "classic"
              ? classes.currentCategoryIcon
              : classes.otherCategoryIcon
          }
          width={20}
        />
        <div>Classic</div>
      </div>
      <div className={classes.navSubContainer}>
        <DialogIcon
          className={
            currentPage === "dialog"
              ? classes.currentCategoryIcon
              : classes.otherCategoryIcon
          }
          width={30}
        />
        <div>Dialog</div>
      </div>
    </div>
  );
};

export default NavigationMenu;
