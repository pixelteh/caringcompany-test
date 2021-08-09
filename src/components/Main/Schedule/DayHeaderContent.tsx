import React from 'react';
import useStyles from './schedule-styles';

interface IProps {
  text: string,
}

const DayHeaderContent = ({ text }: IProps) => {
  const classes = useStyles();

  const [ date, weekDay ] = text.split(' ');
  return (
    <div className={classes.headerCellWrapper}>
      <span className={classes.date}>{date}</span> <span className={classes.weekDay}>{weekDay}</span>
    </div>
  );
};

export default DayHeaderContent;
