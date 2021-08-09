import { createTheme } from "@material-ui/core";
import { poppins } from './fonts';


export const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [ poppins ],
        body: {
          fontFamily: 'Poppins, sans-serif',
        },
      },
    },
  },
});

export { Colors } from './colors';
export type { ColorsType } from './colors';
