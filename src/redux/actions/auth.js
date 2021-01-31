export const AUTH_INITIAL_STATE = {
  firstName: '',
  lastName: '',
  password: '',
  userId: null,
  userName: '',
};

export const AuthActionTypes = Object.freeze({
  CHANGE_FIELD: 'CHANGE_FIELD',
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
  SET_USER: 'SET_USER',
  LOGOUT: 'LOGOUT',
});

export const changeField = (fieldName, fieldValue) => ({
  type: AuthActionTypes.CHANGE_FIELD,
  fieldName,
  fieldValue,
});

export const signInAction = (userName, password, callBack) => ({
  type: AuthActionTypes.SIGN_IN,
  user: {
    userName,
    password,
  },
  callBack,
});
export const logoutAction = () => ({
  type: AuthActionTypes.LOGOUT,
});

export const signUpAction = (user, callBack) => ({
  type: AuthActionTypes.SIGN_UP,
  user,
  callBack,
});

export const setUserAction = (user) => ({
  type: AuthActionTypes.SET_USER,
  user,
});

export const fetchUserProfile = () => ({
  type: AuthActionTypes.FETCH_USER_PROFILE,
});
