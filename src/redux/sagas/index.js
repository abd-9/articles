import { all } from 'redux-saga/effects';
import AuthSagas from './auth';
import Article from './article';

export default function* rootSaga() {
  yield all([...AuthSagas, ...Article]);
}
