import { call, put, select, takeLatest } from 'redux-saga/effects';
import { AuthActionTypes } from '../actions/auth';

function* signUpSaga(body) {
  const body = {
    firstName,
    lastName,
    email,
    password,
  };

  try {
    console.log('signUpSaga', body);
  } catch (e) {
    console.error(e);
  }
}

function* fetchUserProfileSaga() {
  try {
  } catch (e) {
    console.error(`fetch User Profile Saga error: ${e}`);
  }
}

function* signInSaga(action) {
  try {
    console.log('signInSaga');
  } catch (e) {
    console.error(e);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  takeLatest(AuthActionTypes.SIGN_UP, signUpSaga),
  takeLatest(AuthActionTypes.SIGN_IN, signInSaga),
  takeLatest(AuthActionTypes.FETCH_USER_PROFILE, fetchUserProfileSaga),
];
