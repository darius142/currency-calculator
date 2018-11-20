import React, { Component } from 'react';
import NavLink from 'react-router-dom/NavLink';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';

import withViewCheck from 'hoc/withViewCheck';

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
  },
  button: {
    margin: 0,
    padding: 0,
    minWidth: 0
  },
  paper: {
    textAlign: 'left',
    padding: '0.5rem 1rem',
    maxWidth: '10rem',
    '&#menu-list-grow': {
      transform: 'none!important'
    },
    '& a': {
    }
  },
  menu: {
    '&>div': {
      margin: '0.3rem 0'
    }
  }
});

class SimpleAppBar extends Component {
  anchorListMenuEl = null;
  state = {
      openMenuList: false
  };

  handleClick = event => {
      this.setState(state => {
        return {
          openMenuList: !state.openMenuList
        }         
      });
  };

  handleListMenuClose = event => {
      if (this.anchorListMenuEl.contains(event.target)) {
        return;
      }
      this.setState({ openMenuList: false });
  };

  render() {
    const { classes, isViewXs } = this.props;
    const { openMenuList } = this.state;

    const poper = (
      <Popper 
        open={openMenuList} 
        anchorEl={this.anchorListMenuEl} 
        transition disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper classes={{ root: classes.paper }}>
                <ClickAwayListener onClickAway={this.handleListMenuClose}>
                    <Grid container className={classes.menu}>
                        <Grid item xs={12}
                          classes={{ root: classes.menuItem }} 
                          onClick={this.handleListMenuClose}
                        >
                            <NavLink 
                              className={classes.link}
                              to={root}
                            >
                              Currency calculator
                            </NavLink>
                        </Grid>
                        <Grid item xs={12}
                          classes={{ root: classes.menuItem }} 
                          onClick={this.handleListMenuClose}
                        >
                            <NavLink 
                              className={classes.link}
                              to={currencyRateInfo}
                            >
                                Currency info
                            </NavLink>
                        </Grid>
                    </Grid>
                </ClickAwayListener>
            </Paper>
          </Grow>
        )}
    </Popper>
  );

    return (
      <div className={classes.root}>
        <AppBar 
          classes={{ root: classes.appBar }}
          position="static" 
          color="default"
        >
          <Toolbar>
            <Grid container className={classes.linkWrapper}>
              <Hidden smUp>
                <Grid item xs={3}>
                  <Button
                    className={classes.button}
                    buttonRef={node => {
                      this.anchorListMenuEl = node;
                    }}
                  >
                    <MenuIcon
                      ref={node => {
                        this.anchorListMenuEl = node;
                      }}
                      className={classes.icon}
                      aria-label="More"
                      aria-owns="long-menu"
                      aria-haspopup="true"
                      onClick={this.handleClick}
                    >
                    </MenuIcon>
                  </Button>
                  {poper}
                </Grid>
              </Hidden>
              <Grid item xs={isViewXs ? 9 : 5}>
                <Typography variant="h6" color="inherit">
                  Currency Calculator
                </Typography>
              </Grid>
              <Hidden xsDown>
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
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withViewCheck()(withStyles(styles)(SimpleAppBar));