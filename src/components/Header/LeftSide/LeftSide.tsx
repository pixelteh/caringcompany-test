import React from "react";
import CSelect from "../../../_atoms/CSelect/CSelect";
import { Button } from "@material-ui/core";
import useStyles from "./left-side-styles";
import AddIcon from "../../../assets/icons/AddIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import clsx from "clsx";

const LeftSide = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.clinicIcon}>SC</div>
      <CSelect defaultValue={''} style={classes.clinicSelect}>
        <option value="Sydney Clinic">Sydney Clinic</option>
        <option value="Some Clinic">Some Clinic</option>
      </CSelect>
      <CSelect style={classes.tabsSelect}>
        <option value="5 tabs active">5 tabs active</option>
        <option value="4 tabs active">4 tabs active</option>
        <option value="6 tabs active">6 tabs active</option>
        <option value="3 tabs active">3 tabs active</option>
      </CSelect>
      <Button className={classes.button}>
        <AddIcon fill="#fff" height={12} width={12} />
      </Button>
      <Button className={clsx(classes.button, classes.searchBtn)}>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default LeftSide;
