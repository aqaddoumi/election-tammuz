import axios from 'axios';
import { api } from '../api';
import jwt from 'jsonwebtoken';

import { setAlert } from './alert';

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from './types';

export const loadUser = () => async (dispatch) => {
  try {
    const id = jwt.decode(localStorage.jwt).id;
    const res = await axios.get(api(`/users/${id}`));

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const login = ({ identifier, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ identifier, password });
  try {
    const res = await axios.post(api('/auth/local'), body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch(setAlert('المعلومات المدخلة غير صحيحة', 'error'));
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};