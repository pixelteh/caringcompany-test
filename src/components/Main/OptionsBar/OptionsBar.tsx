import React from "react";
import useStyles from "./options-bar-styles";
import clsx from "clsx";
import { leftSideButtons, rightSideButtons } from "../../../assets/data";

const OptionsBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.block}>
        <div className={classes.buttonWrapper}>
          {leftSideButtons.map((item, index) => (
            <button
              key={index}
              className={clsx(classes.button, {
                [ classes.activeButton ]: item?.active,
                [ classes.lastOfTypeButton ]: index === leftSideButtons.length - 1,
              })}
            >
              <img
                src={item.icon}
                alt={item.alt}
                className={clsx(classes.icon, {
                  [ classes.newBtnIcon ]: item?.active,
                })}
              />
              {item.name}
            </button>
          ))}
        </div>
        <div className={classes.buttonWrapper}>
          {rightSideButtons.map((item, index) => (
            <button key={index} className={clsx(classes.button, classes.rightButton)}>
              <img
                src={item.icon}
                alt={item.alt}
                className={classes.icon}
              />
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptionsBar;
