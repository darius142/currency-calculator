import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
});

class CurrencyCalculator extends Component {

  render() {
    return (
      <div className="CurrencyCalculator">
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
