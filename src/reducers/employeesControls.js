/*
import { SET_NAME } from '../constants';

const initialState = {
  name: 'ctrl',
  fetching: false
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}
*/

import {
  SET_NAME_REQUEST,
  SET_NAME_SUCCESS
} from '../constants/index';

const initialState = {
  name: 'ctrl',
  fetching: false
};

export default function page(state = initialState, action) {
  switch (action.type) {
    case SET_NAME_REQUEST:
      return { ...state, name: action.payload, fetching: true };

    case SET_NAME_SUCCESS:
      return { ...state, name: action.payload, fetching: false };

    default:
      return state;
  }
}
