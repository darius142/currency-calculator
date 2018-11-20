import { call, put, takeEvery } from 'redux-saga/effects';

import {
  getTheRates
} from 'api/exchange';

import {
  GET_THE_RATES_REQUEST,
  getTheRatesSuccess,
  getTheRatesFailure,
} from 'actions/exchange';

function* getRatesSaga() {
  try {
    const response = yield call(getTheRates);
    yield put(getTheRatesSuccess());
  } catch (e) {
    console.log(GET_THE_RATES_REQUEST, e);
    yield put(getTheRatesFailure());
  }
}

function* watchRatesSaga() {
  yield takeEvery(GET_THE_RATES_REQUEST, getRatesSaga);
}

export default watchRatesSaga;