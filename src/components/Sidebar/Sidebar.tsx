import React from "react";
import CIconButton from "../../_atoms/CIconButton/CIconButton";
import useStyles from "./sidebar-styles";
import { sidebarButton } from "../../assets/data";

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {sidebarButton.map(item => <CIconButton
        item={item} style={{
        icon: { width: 16, height: 16, margin: 0 },
        button: {
          height: 36,
        },
      }}
      />)}
    </div>
  );
};

export default Sidebar;
