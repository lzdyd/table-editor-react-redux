import { combineReducers } from 'redux';
import employeesTable from './employeesTable';
import employeesControls from './employeesControls';

export default combineReducers({
  employeesTable,
  employeesControls
});
