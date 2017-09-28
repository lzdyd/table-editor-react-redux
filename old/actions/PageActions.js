/*
import { SET_YEAR } from '../constants/Page';

export function setYear(year) {
  return {
    type: SET_YEAR,
    payload: year
  };
}
*/

import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS
} from '../constants/Page';

export function getPhotos(year) {

  return (dispatch) => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    });

    setTimeout(() => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: [1, 2, 3, 4, 5, 6]
      });
    }, 1000);
  };
}
