import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import CurrencyCalculator from 'pages/CurrencyCalculator';
import CurrencyRateInfo from 'pages/CurrencyRateInfo';
import NotFound from 'pages/NotFound';

import { root, currencyRateInfo } from 'routes/internal';

import './App.css';

class App extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <div className="App">
        <Fragment>
          <main id="main">
            <Switch>
              <Route path={root} exact component={CurrencyCalculator} />
              <Route path={currencyRateInfo} exact component={CurrencyRateInfo} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <footer />
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));