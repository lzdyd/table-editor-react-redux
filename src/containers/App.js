import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as tableActions from '../actions/TableActions';

import EmployeesControls from '../components/EmployeesControls/index';
import EmployeesTable from '../components/EmployeesTable/index';

class App extends Component {
  render() {
    const { data, fetching, activeRow, error } = this.props.employeesTable;

    const getAllEmployeesAPI = this.props.tableActions.getAllEmployees;
    const setNewActiveRow = this.props.tableActions.setNewActiveRow;

    return (
      <div className="main-app">
        <EmployeesControls />
        <EmployeesTable
          data={ data }
          fetching={ fetching }
          activeRow={ activeRow }
          error={ error }
          getAllEmployeesAPI={ getAllEmployeesAPI }
          setNewActiveRow={ setNewActiveRow }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employeesTableControls: state.employeesTableControls,
    employeesTable: state.employeesTable
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tableActions: bindActionCreators(tableActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
