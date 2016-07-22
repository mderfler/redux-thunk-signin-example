import {AUTH_ERROR, GET_PROTECTED} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case GET_PROTECTED:
      return { ...state, message: action.payload };
  }

  return state;
}
