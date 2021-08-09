import React from 'react';
import { formatDate } from '@fullcalendar/react';
import useStyles from './schedule-styles';

interface IProps {
  date: Date;
}

const NowIndicatorContent = ({ date }: IProps) => {
  const classes = useStyles();
  const formattedNow = formatDate(date, {
    hour: '2-digit', minute: '2-digit', hour12: true, meridiem: false,
  });
  return (
    <React.Fragment>
      <span className={classes.timeNowIndicator}>{formattedNow}</span>
      <div className={classes.timeNowLine} />
    </React.Fragment>
  );
};

export default NowIndicatorContent;
