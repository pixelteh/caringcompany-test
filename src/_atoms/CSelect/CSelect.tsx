import clsx from 'clsx';
import React from 'react';
import useStyles from './select-styles';

const CSelect = ({ children, style }: any) => {
  const classes = useStyles();

  return (
    <select className={clsx(classes.root, style)}>
      {children}
    </select>
  );
};

export default CSelect;
