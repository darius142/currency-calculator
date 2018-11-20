import React from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.color.grey.desaturated,
    minHeight: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

const AppFooter = ({
  classes
}) => (
    <div className={classes.root}>
      <h4>
        SOME DEFAULT FOOTER
      </h4>
    </div>
);

export default withStyles(styles)(AppFooter);