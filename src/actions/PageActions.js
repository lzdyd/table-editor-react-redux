/*
import { SET_NAME } from '../constants';

export function setName(year) {
  return {
    type: SET_NAME,
    payload: year
  };
}
*/

import {
  SET_NAME_REQUEST,
  SET_NAME_SUCCESS
} from '../constants/index';

export function setName() {
  return ((dispatch) => {
    dispatch({
      type: SET_NAME_REQUEST,
      payload: 'Loading...'
    });

    setTimeout(() => {
      dispatch({
        type: SET_NAME_SUCCESS,
        payload: 'Success'
      });
    }, 1000);
  });
}
