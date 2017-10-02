import getAllEmployeesAPI from '../services/api/employees/getAllEmployees';

import {
  GET_ALL_EMPLOYEES_REQUEST,
  GET_ALL_EMPLOYEES_SUCCESS,
  GET_ALL_EMPLOYEES_FAILURE
} from '../constants/index';

export function getAllEmployees() {
  return ((dispatch) => {
    dispatch({
      type: GET_ALL_EMPLOYEES_REQUEST,
      payload: 'Loading...'
    });

    getAllEmployeesAPI('http://localhost:8080/test/employees')
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
