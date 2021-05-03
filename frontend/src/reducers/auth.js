import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT,
  } from '../actions/types';
  
  const initialState = {
    jwt: localStorage.getItem('jwt'),
    isAuthenticated: null,
    loading: true,
    user: null,
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload,
        };
      case LOGIN_SUCCESS:
        localStorage.setItem('jwt', payload.jwt);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false,
          user: payload.user,
        };
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT:
        localStorage.removeItem('jwt');
        return {
          ...state,
          jwt: null,
          isAuthenticated: false,
          loading: false,
          user: null,
        };
      default:
        return state;
    }
  }
  