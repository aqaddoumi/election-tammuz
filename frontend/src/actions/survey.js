import axios from 'axios';
import { api } from '../api';

import { GET_SURVEYS } from './types';

export const getSurveys = () => async (dispatch) => {
  try {
    const res = await axios.get(api(`/surveys`));
    dispatch({
      type: GET_SURVEYS,
      payload: res.data,
    });
  } catch (err) {}
};