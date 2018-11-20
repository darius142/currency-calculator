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
    const { classes, rates } = this.props;

    return (
      <div className={classNames("CurrencyCalculator", classes.root)}>
        <h1>Currency calculator</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rates: state.exchange.rates
});

export default withStyles(styles)(connect(mapStateToProps, null)(CurrencyCalculator));
