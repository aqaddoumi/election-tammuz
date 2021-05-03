import {
    CONTACT_SUCCESS,
    CONTACT_FAIL,
    CONTACT_REDIRECTED,
  } from '../actions/types';
  
  const initialState = {};
  
  export default function (state = initialState, action) {
    const { type } = action;
  
    switch (type) {
      case CONTACT_SUCCESS:
        return { ...state, success: true };
      case CONTACT_REDIRECTED:
        return (state = {});
      case CONTACT_FAIL:
        return state;
      default:
        return state;
    }
  }
  