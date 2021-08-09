import React from 'react';
import useStyles from './schedule-styles';


interface IEventContentProps {
  icon: string,
  title: string,
  role: string,
}

const EventContent = ({ icon, title, role }: IEventContentProps) => {
  const classes = useStyles();
  return (
    <div className={classes.eventWrapper}>
        <span className={classes.iconWrapper}>
          <img className={classes.icon} src={icon} alt={'checkbox-filled'} />
        </span>
      <div>
        <h5 className={classes.title}>{title}</h5>
        <h6 className={classes.role}>{role}</h6>
      </div>
    </div>
  );
};

export default EventContent;
