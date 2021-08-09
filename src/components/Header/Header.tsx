import React from "react";
import RightSide from "./RightSide/RightSide";
import LeftSide from "./LeftSide/LeftSide";
import useStyles from "./header-styles";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Header;
