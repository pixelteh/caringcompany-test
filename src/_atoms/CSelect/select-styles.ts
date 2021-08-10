import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: '0 11px',
    width: 124,
    alignItems: 'center',
    height: 24,
    fontFamily: 'Poppins, sans-serif',
    // padding: '4px 7px 6px 6px',
    opacity: 0.72,
    backgroundColor: '#121212',
    marginRight: 0,
    border: "none",
    '&:focus': {
      outline: 'none',
    },
  },
  icon: {},
});

export default useStyles;
