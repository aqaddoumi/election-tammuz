import {
    REGISTER_OBSERVER_WAITING,
    REGISTER_OBSERVER_SUCCESS,
    REGISTER_OBSERVER_FAIL,
    REGISTER_OBSERVER_REDIRECTED
  } from '../actions/types';
  
  const initialState = {};
  
  export default function (state = initialState, action) {
    const { type } = action;
  
    switch (type) {
      case REGISTER_OBSERVER_WAITING:
        return { ...state, waiting: true };
      case REGISTER_OBSERVER_SUCCESS:
        return { ...state, waiting: false, success: true };
      case REGISTER_OBSERVER_REDIRECTED:
        return (state = {});
      case REGISTER_OBSERVER_FAIL:
        return state;
      default:
        return state;
    }
  }
  