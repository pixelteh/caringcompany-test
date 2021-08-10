import { makeStyles } from "@material-ui/core";
import { Colors } from '../../../../theme';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    marginRight: 2,
  },
  timeWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 14,
    borderRight: `1px solid rgb(230,230,230,0.5)`,
    margin: '10px 0',
  },
  time: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: 400,
    color: Colors.veryLightPink,
    marginLeft: 4,
  },
  buttonGroup: {
    margin: '0 6px 0 8px',
    display: 'flex',
    alignItems: 'center',
    '& button': {
      border: 'none',
    },
  },
});

export default useStyles;
