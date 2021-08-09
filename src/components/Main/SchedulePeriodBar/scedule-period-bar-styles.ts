import { makeStyles } from "@material-ui/core";
import { Colors } from '../../../theme';

const useStyles = makeStyles({
  container: {
    height: 36,
    backgroundColor: Colors.blackTwo,
    borderTop: `1px solid ${Colors.black}`,
    borderLeft: `1px solid ${Colors.black}`,
  },
  block: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'inherit',
    backgroundColor: 'rgb(24, 24, 24)',
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    marginRight: 38,
  },
  text: {
    color: Colors.brownGrey,
    fontSize: 14,
    marginRight: 16,
  },
  buttonWrapper: {
    width: 94,
    height: 20,
    "& button": {
      borderRadius: 10,
      backgroundColor: Colors.blackTwo,
      fontSize: 10,
      color: Colors.white90,
      textTransform: 'capitalize',
    },
    '& .activeBtn': {
      backgroundColor: '#0f6ebe',
    },
  },
});

export default useStyles;
