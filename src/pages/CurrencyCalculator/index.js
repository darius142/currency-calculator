import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  root: {
  }
});

class CurrencyCalculator extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classNames("CurrencyCalculator", classes.root)}>
        CurrencyCalculator Page
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CurrencyCalculator));
