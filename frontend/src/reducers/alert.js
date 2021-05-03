import { SET_ALERT, REMOVE_ALERT, REMOVE_ALL_ALERTS } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    case REMOVE_ALL_ALERTS:
      return state.filter((alert) => alert.type !== 'error');
    default:
      return state;
  }
}
