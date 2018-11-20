import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
  root: {
  },
  textField: {
    width: '80%'
  }
});

class CurrencyCalculator extends Component {
  state = {
    currentCurrency: '',
    neededCurrency: '',
    enteredPrice: 0
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.rates.length !== this.props.rates.length) {
      const { rates } = nextProps;
      this.setState({
        currentCurrency: rates[0].currency_code,
        neededCurrency: rates[0].currency_code,
        enteredPrice: 0
      })
    }
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  calculatePrice = () => {
    const { rates } = this.props;
    const { currentCurrency, neededCurrency, enteredPrice } = this.state

    const currentRate = rates.find(rate => {
      return rate.currency_code === currentCurrency
    }) || rates[0];

    const selectedRate = rates.find(rate => {
      return rate.currency_code === neededCurrency
    }) || rates[0];

    return enteredPrice * currentRate.median_rate / selectedRate.median_rate;
  }

  render() {
    const { classes, rates, isFetching } = this.props;
    const { 
      enteredPrice,
      currentCurrency,
      neededCurrency, 
    } = this.state;

    return (
      
      <div className={classNames("CurrencyCalculator", classes.root)}>
        {
          !isFetching && (
          <Grid container>
            <Grid item xs={12}>
              <h1>Currency calculator</h1>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={6}>
                  <TextField
                    id="standard-select-current-currency-native"
                    select
                    label="Current currency"
                    className={classes.textField}
                    value={currentCurrency}
                    onChange={this.handleChange('currentCurrency')}
                    InputLabelProps={{
                      shrink: true
                    }}
                    SelectProps={{
                      native: true,
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                  >
                    {rates.map(option => (
                      <option key={option.currency_code} value={option.currency_code}>
                        {option.currency_code}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="standard-select-needed-currency-native"
                    select
                    label="Needed currency"
                    className={classes.textField}
                    value={neededCurrency}
                    onChange={this.handleChange('neededCurrency')}
                    InputLabelProps={{
                      shrink: true
                    }}
                    SelectProps={{
                      native: true,
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                  >
                    {rates.map(option => (
                      <option key={option.currency_code} value={option.currency_code}>
                        {option.currency_code}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="standard-name"
                    label="Name"
                    className={classes.textField}
                    value={enteredPrice}
                    onChange={this.handleChange('enteredPrice')}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="standard-name"
                    label="Name"
                    className={classes.textField}
                    value={this.calculatePrice()}
                    onChange={this.handleChange('resultPrice')}
                    margin="normal"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rates: state.exchange.rates,
  isFetching: state.exchange.isFetching
});

export default withStyles(styles)(connect(mapStateToProps, null)(CurrencyCalculator));
