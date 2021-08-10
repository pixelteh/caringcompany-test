import React from "react";
import OptionsBar from "./OptionsBar/OptionsBar";
import Schedule from "./Schedule/Schedule";
import SchedulePeriodBar from "./SchedulePeriodBar/SchedulePeriodBar";
import useStyles from './calendar-styles';

const Calendar = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <OptionsBar />
      <SchedulePeriodBar />
      <Schedule />
    </div>
  );
};

export default Calendar;
