import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    minWidth: 'inherit',
    "& p": {
      fontFamily: 'Poppins',
      fontSize: 10,
      textTransform: 'capitalize',
    },
  },
  activeButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 0,
    borderLeft: '2px solid #0f6ebe',
  },
  icon: {
    width: 8,
    height: 8,
    marginRight: 3,
  },
});

export default useStyles;
