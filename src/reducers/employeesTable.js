import {
  GET_ALL_EMPLOYEES_REQUEST,
  GET_ALL_EMPLOYEES_SUCCESS,
  GET_ALL_EMPLOYEES_FAILURE,
  SET_NEW_ACTIVE_ROW
} from '../constants/index';

/**
 * @description Creates initial state for table
 * @property { object }  data      - Contains table data
 * @property { boolean } fetching  - If true, inform that data is being fetched
 * @property { number }  activeRow - Key of highlighted row
 * @property { boolean } error     - Informs that data is inapproachable in case of error
 */

const initialState = {
  data: {},
  fetching: true,
  activeRow: 1,
  error: false
};

export default function employeesTable(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EMPLOYEES_REQUEST:
      return { ...state, data: '', fetching: true };

    case GET_ALL_EMPLOYEES_SUCCESS:
      return { ...state, data: action.payload, fetching: false };

    case GET_ALL_EMPLOYEES_FAILURE:
      return { ...state, error: action.payload, fetching: false };

    case SET_NEW_ACTIVE_ROW:
      return { ...state, activeRow: action.payload };

    default:
      return state;
  }
}
