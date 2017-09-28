import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmployeesControls from '../components/EmployeesControls';
import EmployeesTable from '../components/EmployeesTable';

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <EmployeesControls />
        <EmployeesTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employeesControls: state.employeesControls,
    employeesTable: state.employeesTable
  };
};

export default connect(mapStateToProps)(App);
