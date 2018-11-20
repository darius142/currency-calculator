import React, { PureComponent } from 'react';
import NavLink from 'react-router-dom/NavLink';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import {
  root,
  notFound
} from 'routes/internal';

const styles = (theme) => ({
  root: {
    padding: '1rem',
  },
  notFound: {
  }
});

class NotFound extends PureComponent {

  componentWillMount() {
    const { history } = this.props;
    history.push(notFound);    
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classNames(
        'NotFoundPage',
        classes.root
      )}>
        <Grid container className={classes.notFound}>
          <Grid item xs={12}>
            <h1>404</h1>
            <h2>Oops! This Page Could Not Be Found</h2>
            <p>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily
              unavailable.</p>
            <NavLink to={root}>Go To Homepage</NavLink>
          </Grid>
        </Grid>
      </div>
    )
  }
};

export default withStyles(styles)(NotFound);