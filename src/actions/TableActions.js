import getAllEmployeesAPI from 'api/employees/getAllEmployees';
import changeEmployeeAPI from 'api/employees/changeEmployee';
import createEmployeeAPI from 'api/employees/createEmployee';

import {
  GET_ALL_EMPLOYEES_REQUEST,
  GET_ALL_EMPLOYEES_SUCCESS,
  GET_ALL_EMPLOYEES_FAILURE,
  CREATE_NEW_EMPLOYEE_REQUEST,
  CREATE_NEW_EMPLOYEE_SUCCESS,
  CREATE_NEW_EMPLOYEE_FAILURE,
  EDIT_EMPLOYEE_REQUEST,
  EDIT_EMPLOYEE_SUCCESS,
  EDIT_EMPLOYEE_FAILURE,
  SET_NEW_ACTIVE_ROW
} from '../constants/index';

export function getAllEmployees() {
  return ((dispatch) => {
    dispatch({
      type: GET_ALL_EMPLOYEES_REQUEST,
      payload: 'Loading...'
    });

    getAllEmployeesAPI()
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
