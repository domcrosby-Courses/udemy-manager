// Enter actions here
const EMAIL_CHANGED = 'email_changed';
const PASSWORD_CHANGED = 'password_changed';

// Set initial state
const INITIAL_STATE = { email: '', password: '' };

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EMAIL_CHANGED:
      // make new object - you can't keep the old
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
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
