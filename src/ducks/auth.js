// Enter actions here
const EMAIL_CHANGED = 'email_changed';

// Set initial state
const INITIAL_STATE = { email: '' };

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EMAIL_CHANGED:
      // make new object - you can't keep the old
      return { ...state, email: action.payload };
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
