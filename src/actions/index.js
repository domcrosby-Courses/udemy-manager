import { EMAIL_CHANGED } from './types';
// you should move this to be its own file and have Actions.js
export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
