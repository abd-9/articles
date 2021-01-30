export const AUTH_INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  userId: null,
  userName: '',
};

export const AuthActionTypes = Object.freeze({
  CHANGE_FIELD: 'CHANGE_FIELD',
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
  SET_USER: 'SET_USER',
});

export const changeField = (fieldName, fieldValue) => ({
  type: AuthActionTypes.CHANGE_FIELD,
  fieldName,
  fieldValue,
});

export const signIn = (email, password, firstSignIn) => ({
  type: AuthActionTypes.SIGN_IN,
  payload: {
    email,
    password,
  },
});

export const signUp = () => ({
  type: AuthActionTypes.SIGN_UP,
});

export const setUser = (user) => ({
  type: AuthActionTypes.SET_USER,
  user,
});

export const fetchUserProfile = () => ({
  type: AuthActionTypes.FETCH_USER_PROFILE,
});
