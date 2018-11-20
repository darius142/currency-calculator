import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const color = {
  purple: '#6b39d6',
  white: '#ffffff',
  grey: {
    background: '#f3f3f6',
    desaturated: '#e0d9ed'
  }
};

const button = {
};

const calculator = {
};

const typography = {
  useNextVariants: true
};

const theme = createMuiTheme({
  calculator,
  typography,
  button,
  color,
});

export default theme;