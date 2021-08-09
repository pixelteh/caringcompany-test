import React from "react";
import { Button, ButtonGroup, Typography } from "@material-ui/core";
import useStyles from "./scedule-period-bar-styles";

const SchedulePeriodBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.block}>
        <div className={classes.wrapper}>
          <Typography className={classes.text}>
            Dr Sherry White
          </Typography>
          <ButtonGroup className={classes.buttonWrapper}>
            <Button className="activeBtn">Week</Button>
            <Button>Month</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default SchedulePeriodBar;
