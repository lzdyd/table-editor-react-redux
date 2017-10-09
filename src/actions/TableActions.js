import getAllEmployeesAPI from '../services/api/employees/getAllEmployees';
import changeEmployeeAPI from '../services/api/employees/changeEmployee';
import createEmployeeAPI from '../services/api/employees/createEmployee';

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

    getAllEmployeesAPI('http://localhost:8080/test/employees')
    // getAllEmployeesAPI('./data.json')
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

export function createNewEmployee(body) {
  return ((dispatch) => {
    dispatch({
      type: CREATE_NEW_EMPLOYEE_REQUEST
    });

    createEmployeeAPI(body)
      .then((response) => {
        dispatch({
          type: CREATE_NEW_EMPLOYEE_SUCCESS,
          payload: JSON.parse(response)
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: CREATE_NEW_EMPLOYEE_FAILURE
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

export function editEmployee(id, fieldsData) {
  return ((dispatch) => {
    dispatch({
      type: EDIT_EMPLOYEE_REQUEST
    });

    changeEmployeeAPI()
      .then(() => {
        dispatch({
          type: EDIT_EMPLOYEE_SUCCESS,
          payload: {
            id,
            fieldsData
          }
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: EDIT_EMPLOYEE_FAILURE
        });
      });
  });
}
