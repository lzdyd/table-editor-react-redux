import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as pageActions from '../actions/PageActions'
import EmployeesControls from '../components/EmployeesControls/index';
import EmployeesTable from '../components/EmployeesTable';

class App extends Component {
  render() {
    const { setName } = this.props.pageActions;

    return (
      <div className="main-app">
        <EmployeesControls
          name={ this.props.employeesControls.name }
          setName={ setName }
          fetching={ this.props.employeesControls.fetching }
        />
        <EmployeesTable />
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
    pageActions: bindActionCreators(pageActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
