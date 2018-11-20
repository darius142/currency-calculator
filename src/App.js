import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';

import AppBar from 'components/AppBar';
import AppFooter from 'components/AppFooter';

import CurrencyCalculator from 'pages/CurrencyCalculator';
import CurrencyRateInfo from 'pages/CurrencyRateInfo';
import NotFound from 'pages/NotFound';

import { root, currencyRateInfo } from 'routes/internal';

import './App.css';

const styles = (theme) => ({
  main: {
    backgroundColor: theme.color.grey.background
  }
})

class App extends Component {

  componentWillMount() {
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Fragment>
          <header>
            <AppBar />
          </header>
          <main id="main" className={classes.main}>
            <Switch>
              <Route path={root} exact component={CurrencyCalculator} />
              <Route path={currencyRateInfo} exact component={CurrencyRateInfo} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <footer>
            <AppFooter />
          </footer>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(App)));