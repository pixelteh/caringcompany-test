import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./icon-button-styles";
import clsx from "clsx";

interface IProps {
  item: {
    active?: boolean,
    alt: string,
    icon: string,
    name?: string
  };
  style: any
}

const CIconButton = ({ item, style }: IProps) => {
  const classes = useStyles();

  return (
    <Button
      className={clsx(classes.button, { [ classes.activeButton ]: item?.active })} style={style?.button} key={item.alt}
    >
      <img className={classes.icon} style={style?.icon} src={item.icon} alt={item.alt} />
      {item.name && <p>{item.name}</p>}
    </Button>
  );
};

export default CIconButton;
