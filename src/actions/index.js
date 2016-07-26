import axios from 'axios';
import { browserHistory } from 'react-router';
import {AUTH_ERROR, GET_PROTECTED} from './types';

const ROOT_URL = 'http://localhost:3000';

export function signinUser({ name, password }) {
  return function(dispatch) {
    // Submit name/password to the server
    axios.post(`${ROOT_URL}/signin`, { name, password })
      .then(response => {
        // If request is good...
        // - Save the token
        localStorage.setItem('secret', response.data.secret);
        // - redirect to the route '/protected'
        browserHistory.push('/protected');
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signOut() {
  localStorage.removeItem('secret');
}

export function getProtected() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/secure`, {
      headers: { authorization: localStorage.getItem('secret') }
    })
      .then(response => {
        dispatch({
          type: GET_PROTECTED,
          payload: response.data.message
        });
      })
  }
}
