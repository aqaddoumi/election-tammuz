import axios from 'axios';
import { api } from '../api';

import { setAlert } from './alert';

import { CONTACT_SUCCESS, CONTACT_FAIL, CONTACT_REDIRECTED } from './types';

export const sendContact = ({
  name,
  email,
  phone,
  subject,
  message,
  isTrainee,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    name,
    email,
    phone,
    subject,
    message,
    isTrainee,
  });

  try {
    await axios.post(api('/contacts'), body, config);

    dispatch({
      type: CONTACT_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: CONTACT_FAIL,
    });
    dispatch(
      setAlert('لم يتمكن إرسال الرسالة، الرجاء المحاولة مرة أخرى.', 'error')
    );
  }
};

export const contactRedirected = () => async (dispatch) => {
  dispatch({
    type: CONTACT_REDIRECTED,
  });
};
