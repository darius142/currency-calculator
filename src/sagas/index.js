import { all } from 'redux-saga/effects';
import exchange from './exchange';

export default function* rootSaga() {
    yield all([
      exchange(),
    ]);
}