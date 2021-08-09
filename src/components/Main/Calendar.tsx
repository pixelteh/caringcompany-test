import React from "react";
import OptionsBar from "./OptionsBar/OptionsBar";
import Schedule from "./Schedule/Schedule";
import SchedulePeriodBar from "./SchedulePeriodBar/SchedulePeriodBar";

const Calendar = () => {
  return (
    <div style={{ gridArea: 'calendar', display: 'flex', flexDirection: 'column' }}>
      <OptionsBar />
      <SchedulePeriodBar />
      <Schedule />
    </div>
  );
};

export default Calendar;
