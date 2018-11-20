import { createAction } from 'redux-actions';

export const GET_THE_RATES_REQUEST = 'GET_THE_RATES_REQUEST';
export const GET_THE_RATES_SUCCESS = 'GET_THE_RATES_SUCCESS';
export const GET_THE_RATES_FAILURE = 'GET_THE_RATES_FAILURE';

export const getTheRatesRequest = createAction(GET_THE_RATES_REQUEST);
export const getTheRatesSuccess = createAction(GET_THE_RATES_SUCCESS);
export const getTheRatesFailure = createAction(GET_THE_RATES_FAILURE);