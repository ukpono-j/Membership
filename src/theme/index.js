import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#F4F6F8',
      paper: "#020d19"
    },
    primary: {
      contrastText: '#b2b2b2',
      main: '#01070D'
    },
    secondary: {
      contrastText: '#000000',
      main: '#F2A71B'
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c'
    }
  },
  shadows,
  typography
});

export default theme;
