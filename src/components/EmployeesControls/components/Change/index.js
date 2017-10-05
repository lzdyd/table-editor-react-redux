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

    let changeFormHTML = [];

    for (const key in fieldData) {
      if (Object.prototype.hasOwnProperty.call(fieldData, key)) {
        changeFormHTML.push(
          <div>12</div>
        );
      }
    }

    return (
      <div>
        <form action="">
          <input type="text" defaultValue={ filteredArray[0].id } />
          <input type="text" defaultValue={ filteredArray[0].name }/>
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
