import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as tableActions from 'actions/TableActions';

// TODO: move to containers folder

class ChangeField extends Component {
  render() {
    const filteredArray = this.props.employeesTable.data.filter((element) => {
      return element.id === this.props.employeesTable.activeRow;
    });

    const fieldData = filteredArray[0];

    const changeFormHTML = Object.keys(fieldData).map((item, i) => {
      return (
        <div key={ i }>
          <label htmlFor={ `changeForm-${item}` }>{ item }</label>
          <input id={ `changeForm-${item}` } type="text" defaultValue={ fieldData[item] }/>
        </div>
      );
    });

    return (
      <div>
        <form action="">
          { changeFormHTML }
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employeesTable: state.employeesTable
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tableActions: bindActionCreators(tableActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeField);
