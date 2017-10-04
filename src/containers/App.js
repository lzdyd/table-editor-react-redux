import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as pageActions from '../actions/PageActions';
import * as tableActions from '../actions/TableActions';
import EmployeesControls from '../components/EmployeesControls/index';
import EmployeesTable from '../components/EmployeesTable/index';

class App extends Component {
  render() {
    const { setName } = this.props.pageActions;
    const { setNewActiveRow } = this.props.tableActions;

    return (
      <div className="main-app">
        <EmployeesControls
          name={ this.props.employeesControls.name }
          setName={ setName }
          fetching={ this.props.employeesControls.fetching }
          data={ this.props.employeesTable.data }
          activeRow={ this.props.employeesTable.activeRow }
        />
        <EmployeesTable
          getAllEmployees={ this.props.tableActions.getAllEmployees }
          data={ this.props.employeesTable.data }
          fetching={ this.props.employeesTable.fetching }
          error={ this.props.employeesTable.error }
          activeRow={ this.props.employeesTable.activeRow }
          setNewActiveRow={ setNewActiveRow }
        />
      </div>
    );
  }
}

/* selectors
function getEmploy(store) {
  return store.employeesControls;
}
*/

const mapStateToProps = (state) => {
  return {
    employeesControls: state.employeesControls,
    employeesTable: state.employeesTable
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    tableActions: bindActionCreators(tableActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
