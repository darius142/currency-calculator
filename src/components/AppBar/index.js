import React, { Component } from 'react';
import NavLink from 'react-router-dom/NavLink';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Grid';

import { currencyRateInfo, root } from 'routes/internal';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'left'
  },
  appBar: {
    color: theme.color.purple,
    backgroundColor: theme.color.white
  },
  link: {
    color: theme.color.purple,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  linkWrapper: {
    display: 'flex',
    alignItems: 'center',
    '&>div': {
      display: 'flex',
      justifyContent: 'flex-start'
    }
  }
});

class SimpleAppBar extends Component {
  anchorListMenuEl = null;
  state = {
      anchorEl: null,
      openMenuList: false
  };

  handleClick = event => {
      this.setState({
          anchorEl: event.currentTarget
      });
  };

  handleClose = () => {
      this.setState({
          anchorEl: null
      });
  };

  handleListMenuToggle = () => {
      this.setState(state => ({ openMenuList: !state.openMenuList }));
  };

  handleListMenuClose = event => {
      if (this.anchorListMenuEl.contains(event.target)) {
          return;
      }

      this.setState({ openMenuList: false });
  };


  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar 
          classes={{ root: classes.appBar }}
          position="static" 
          color="default"
        >
          <Toolbar>
            <Grid container className={classes.linkWrapper}>
              <Grid item xs={3}>
                <Typography variant="h6" color="inherit">
                  Currency Calculator
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <NavLink 
                  className={classes.link} 
                  to={root}
                >
                    Currency calculator
                </NavLink>
              </Grid>
              <Grid item xs={3}>
                <NavLink 
                  className={classes.link}
                  to={currencyRateInfo}
                >
                  Currency info
                </NavLink>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleAppBar);