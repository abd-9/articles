import { toast } from 'react-toastify';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthActionTypes, setUserAction } from '../actions/auth';

function* signUpSaga({ user, callBack }) {
  try {
    const usersList = yield JSON.parse(localStorage.getItem('users')) || [];
    const result = usersList.find((u) => u.userName === user.userName);
    if (result?.id) {
      toast.error('username already exist');
      return null;
    }
    const newUser = {
      ...user,
      id: `id${Math.floor(Math.random() * Math.floor(9999999))}`,
      creationDate: new Date().toLocaleString(),
    };
    yield usersList.push(newUser);
    yield localStorage.setItem('users', JSON.stringify(usersList));

    // signin here
    yield call(signInSaga, { user: newUser, callBack });
  } catch (e) {
    console.error(`signup Saga error: ${e}`);
  }
}

function* signInSaga(action) {
  try {
    const { user, callBack } = action;
    const usersList = yield JSON.parse(localStorage.getItem('users')) || [];
    const result = usersList.find(
      (u) => u.userName === user.userName && u.password === user.password
    );
    if (result?.id) {
      const loginUser = { ...result, isLoggedIn: true, password: '' };
      toast.success(`Hello ${result.firstName}`);
      yield localStorage.setItem('user', JSON.stringify(loginUser));
      yield put(setUserAction(loginUser));
      yield callBack();
    } else {
      toast.error('Invalid username/password.');
    }
  } catch (e) {
    console.error(`signin Saga error: ${e}`);
  }
}
function* logoutSaga() {
  try {
    yield localStorage.setItem('user', JSON.stringify({}));
    yield put(setUserAction({}));
    window.location.replace('/signin');
  } catch (e) {
    console.error(`signin Saga error: ${e}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  takeLatest(AuthActionTypes.SIGN_UP, signUpSaga),
  takeLatest(AuthActionTypes.SIGN_IN, signInSaga),
  takeLatest(AuthActionTypes.LOGOUT, logoutSaga),
];
