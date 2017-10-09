import {
  GET_ALL_EMPLOYEES_REQUEST,
  GET_ALL_EMPLOYEES_SUCCESS,
  GET_ALL_EMPLOYEES_FAILURE,
  CREATE_NEW_EMPLOYEE_REQUEST,
  CREATE_NEW_EMPLOYEE_SUCCESS,
  SET_NEW_ACTIVE_ROW, CREATE_NEW_EMPLOYEE_FAILURE
} from '../constants/index';

const initialState = {
  data: null,
  fetching: true,
  activeRow: 1
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

    case CREATE_NEW_EMPLOYEE_REQUEST:
      return { ...state, fetching: true };

    case CREATE_NEW_EMPLOYEE_SUCCESS:
      return { ...state, data: state.data.concat(action.payload), fetching: false };

    case CREATE_NEW_EMPLOYEE_FAILURE:
      return { ...state, fetching: false };

    default:
      return state;
  }
}
