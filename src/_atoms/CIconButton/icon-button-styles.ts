import { makeStyles } from "@material-ui/core";
import { Colors } from '../../theme';

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
    backgroundColor: 'rgb(15, 110, 190, 0.16)',
    borderRadius: 0,
    borderLeft: `2px solid ${Colors.niceBlue}`,
  },
  icon: {
    width: 8,
    height: 8,
    marginRight: 3,
  },
});

export default useStyles;
