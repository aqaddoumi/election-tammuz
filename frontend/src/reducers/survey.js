import {
  GET_SURVEYS,
} from '../actions/types';

const initialState = {
  surveys: null
};


export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SURVEYS:
      return {
        ...state,
        surveys: payload,
      };
    default:
      return state;
  }
}