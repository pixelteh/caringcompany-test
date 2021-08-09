import { makeStyles } from "@material-ui/core";
import { Colors } from '../../theme';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gridArea: 'header',
    backgroundColor: Colors.twilightBlue,
  },
});

export default useStyles;
