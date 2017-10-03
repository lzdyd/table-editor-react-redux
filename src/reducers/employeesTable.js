import {
  GET_ALL_EMPLOYEES_REQUEST,
  GET_ALL_EMPLOYEES_SUCCESS,
  GET_ALL_EMPLOYEES_FAILURE,
  SET_NEW_ACTIVE_ROW
} from '../constants/index';

const initialState = {
  data: '',
  fetching: true,
  activeRow: null
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
