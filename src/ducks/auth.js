import firebase from 'firebase';

// Enter actions here
const EMAIL_CHANGED = 'email_changed';
const PASSWORD_CHANGED = 'password_changed';
const LOGIN_USER_SUCCESS = 'login_user_success';
const LOGIN_USER_FAIL = 'login_user_fail';
const LOGIN_USER = 'login_user';

// Set initial state
const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EMAIL_CHANGED:
      // make new object - you can't keep the old
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed', loading: false };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
}

// Action Creators
export function emailChanged(text) {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
}

export function passwordChanged(text) {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
}

// curly braces as only 1 argument allowed
export function loginUser({ email, password }) {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
}

// helper function
const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};
