import { makeStyles } from "@material-ui/core";
import { Colors } from '../../../theme';

const useStyles = makeStyles({
  container: {
    height: 'max-content',
    backgroundColor: Colors.blackTwo,
    borderLeft: `1px solid ${Colors.black}`,
  },
  block: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 24,
    backgroundColor: Colors.white06,
    margin: 8,
    borderRadius: 12,
    '& button': {},
  },
  buttonWrapper: {
    display: 'flex',
    height: '100%',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 11px 0 12px',
    backgroundColor: 'transparent',
    color: Colors.brownGrey,
    border: 'none',
    fontFamily: 'Poppins',
    fontSize: 10,
    fontWeight: 500,
    borderLeft: `1px solid ${Colors.blackTwo}`,
  },
  lastOfTypeButton: {
    borderRight: `1px solid ${Colors.blackTwo}`,
  },
  rightButton: {
    paddingRight: 15,
    paddingLeft: 9,
  },
  icon: {
    marginRight: 3,
    width: 10,
    height: 10,
  },
  activeButton: {
    backgroundColor: Colors.niceBlue,
    borderRadius: '12px 0 0 12px',
    color: Colors.veryLightPink,
    paddingRight: 12,
  },
  newBtnIcon: {
    marginRight: 2,
    marginLeft: 4,
  },
});

export default useStyles;
