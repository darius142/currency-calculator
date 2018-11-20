import {
  GET_THE_RATES_REQUEST,
  GET_THE_RATES_SUCCESS,
  GET_THE_RATES_FAILURE
} from 'actions/exchange';

const initialState = {
  isFetching: false,
  rates: []
};

const exchange = (state = initialState, action) => {
  switch (action.type) {
    case GET_THE_RATES_REQUEST:
      return {
        ...state,
        isFetching: true,
        rates: []
      };
    case GET_THE_RATES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        rates: action.payload
      };
    case GET_THE_RATES_FAILURE:
      return {
        ...state,
        isFetching: false,
        rates: [...state.rates]
      };
    default:
      return state
  }
};

export default exchange;