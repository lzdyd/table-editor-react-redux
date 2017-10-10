import { combineReducers } from 'redux';
import employeesTable from './employeesTable';
import employeesTableControls from './employeesTableControls';

export default combineReducers({
  employeesTable,
  employeesTableControls
});
