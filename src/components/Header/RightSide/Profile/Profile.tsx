import React from "react";
import Moment from "react-moment";
import { ButtonGroup } from "@material-ui/core";
import clockItem from "../../../../assets/icons/clock.svg";
import useStyles from "./profile-styles";
import CIconButton from "../../../../_atoms/CIconButton/CIconButton";
import { profileButton } from "../../../../assets/data";

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.timeWrapper}>
        <img src={clockItem} alt="clock" />
        <Moment className={classes.time} format={'HH:mm A'} interval={1000} />
      </div>
      <div className={classes.buttonGroup}>
        <ButtonGroup style={{ height: '100%' }}>
          {profileButton.map((item, index) => (
            <CIconButton
              key={index}
              item={item}
              style={{ icon: { width: 16, height: 16 }, button: { width: 32 } }}
            />
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Profile;
