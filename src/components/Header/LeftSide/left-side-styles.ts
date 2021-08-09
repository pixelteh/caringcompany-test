import { makeStyles } from "@material-ui/core";
import { Colors } from '../../../theme';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 11,
  },
  clinicIcon: {
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: Colors.blackThree,
    fontFamily: `Poppins, sans-serif`,
    fontSize: 10,
    color: Colors.white90,
  },
  clinicSelect: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 12,
    margin: 0,
    width: 105,
    fontWeight: 600,
    marginLeft: 6,
  },
  tabsSelect: {
    color: '#999999',
    fontSize: 10,
    width: 124,
    marginLeft: 16,
  },
  button: {
    minWidth: 24,
    height: 24,
    marginLeft: 4,
    padding: 6,
    opacity: 0.72,
    backgroundColor: Colors.blackTwo,
    borderRadius: 0,
    '&:hover': {
      backgroundColor: Colors.blackTwo,
      opacity: 0.6,
    },
  },
  searchBtn: {
    width: 24,
  },
});

export default useStyles;
