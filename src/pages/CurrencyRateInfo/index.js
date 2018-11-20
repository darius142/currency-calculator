import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  root: {
  }
});

class CurrencyRateInfo extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classNames("CurrencyRateInfo", classes.root)}>
        <h1>Currency rates</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rates: state.rates
});

export default withStyles(styles)(connect(mapStateToProps)(CurrencyRateInfo));
