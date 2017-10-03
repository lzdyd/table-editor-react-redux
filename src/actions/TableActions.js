import getAllEmployeesAPI from '../services/api/employees/getAllEmployees';

import {
  GET_ALL_EMPLOYEES_REQUEST,
  GET_ALL_EMPLOYEES_SUCCESS,
  GET_ALL_EMPLOYEES_FAILURE,
  SET_NEW_ACTIVE_ROW
} from '../constants/index';

export function getAllEmployees() {
  return ((dispatch) => {
    dispatch({
      type: GET_ALL_EMPLOYEES_REQUEST,
      payload: 'Loading...'
    });

    // getAllEmployeesAPI('http://localhost:8080/test/employees')
    getAllEmployeesAPI('./data.json')
      .then((response) => {
        dispatch({
          type: GET_ALL_EMPLOYEES_SUCCESS,
          payload: JSON.parse(response)
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ALL_EMPLOYEES_FAILURE,
          payload: err
        });
      });
  });
}

export function setNewActiveRow(id) {
  return {
    type: SET_NEW_ACTIVE_ROW,
    payload: id
  };
}
