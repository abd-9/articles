import { AUTH_INITIAL_STATE, AuthActionTypes } from '../actions';

const authReducer = (state = AUTH_INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.CHANGE_FIELD:
      if (action.fieldName === 'password') {
        return {
          ...state,
          [action.fieldName]: action.fieldValue,
        };
      }
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };

    case AuthActionTypes.SET_PROFILE:
      return {
        ...state,
        ...action.profile,
      };

    default:
      return state;
  }
};

export default authReducer;
