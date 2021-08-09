import React from "react";
import FullCalendar, { EventContentArg } from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid';
import useStyles from "./schedule-styles";
import { DayHeaderContentArg, NowIndicatorContentArg } from '@fullcalendar/common';
import { Colors } from "../../../theme";
import { events } from "../../../assets/data";
import EventContent from "./EventContent";
import NowIndicatorContent from './NowIndicatorContent';
import DayHeaderContent from './DayHeaderContent';

const Schedule = () => {
  const classes = useStyles();

  const dayHeaderContent = (header: DayHeaderContentArg) => (
    <DayHeaderContent text={header.text} />
  );

  const nowIndicatorContent = ({ isAxis, date }: NowIndicatorContentArg) => {
    if (isAxis) {
      return (
        <NowIndicatorContent date={date} />
      );
    }
  };

  const eventContent = ({ event }: EventContentArg) => (
    <EventContent
      role={event.extendedProps.role}
      title={event.title}
      icon={event.extendedProps.img}
    />
  );

  return (
    <div className={classes.root}>
      <FullCalendar
        plugins={[ timeGridPlugin ]}
        events={events}
        initialView="timeGridWeek"
        dayHeaderFormat={{ day: '2-digit', weekday: 'long' }}
        slotDuration={'00:15:00'}
        slotLabelInterval="01:00"
        eventMinHeight={60}
        dayHeaderContent={dayHeaderContent}
        nowIndicator={true}
        nowIndicatorContent={nowIndicatorContent}
        contentHeight="calc(100vh - 112px)"
        headerToolbar={false}
        eventTextColor={Colors.veryLightPink}
        eventClassNames={classes.eventStyle}
        eventContent={eventContent}
      />
    </div>
  );
};

export default Schedule;
