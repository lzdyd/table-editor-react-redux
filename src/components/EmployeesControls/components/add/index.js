import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class addEmployee extends Component {
  onSubmit(e) {
    e.preventDefault();

    const body = {
      'birthdate': ReactDOM.findDOMNode(this.refs.birthdate).value,
      'department_id': +ReactDOM.findDOMNode(this.refs.department_id).value,
      'fired': false,
      'firstname': ReactDOM.findDOMNode(this.refs.firstname).value,
      'gender': ReactDOM.findDOMNode(this.refs.gender).value,
      'grade_id': +ReactDOM.findDOMNode(this.refs.grade_id).value,
      'lastname': ReactDOM.findDOMNode(this.refs.lastname).value,
      'password': 'string',
      'middlename': ReactDOM.findDOMNode(this.refs.middlename).value,
      'position_id': +ReactDOM.findDOMNode(this.refs.position_id).value,
      'salary': ReactDOM.findDOMNode(this.refs.salary).value,
      'username': ReactDOM.findDOMNode(this.refs.username).value
    };

    this.props.tableActionsAPI.createNewEmployee(body);
  }

  render() {
    return (
      <div>
        <form name="addEmployeeForm" onSubmit={ ::this.onSubmit }>
          <label htmlFor="firstName">First name:</label>
          <input type="text" id="firstName" name="firstname" ref="firstname" placeholder="First name"  />

          <label htmlFor="lastName">Last name:</label>
          <input type="text" id="lastName" name="lastname" ref="lastname" placeholder="Last name"  />

          <label htmlFor="middleName">Last name:</label>
          <input type="text" id="middleName" name="middlename" ref="middlename" placeholder="Middle name"  />

          <label htmlFor="gender">Gender:</label><br />
          <select defaultValue="" name="gender" ref="gender" id="gender">
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="">Not chosen</option>
          </select>

          <br />

          <label htmlFor="birthdate">Birthdate:</label>
          <input type="text" id="birthdate" name="birthdate" ref="birthdate" placeholder="yyyy-MM-dd"/>

          <label htmlFor="salary">Salary:</label>
          <input type="text" id="salary" ref="salary" placeholder="Salary"/>

          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" ref="username" placeholder="username"  />

          <label htmlFor="department_id">department_id:</label>
          <input type="text" id="department_id" ref="department_id" placeholder="department_id"  />

          <label htmlFor="grade_id">grade_id:</label>
          <input type="text" id="grade_id" name="grade_id" ref="grade_id" placeholder="grade_id"  />

          <label htmlFor="position_id">position_id:</label>
          <input type="text" id="position_id" name="position_id" ref="position_id" placeholder="position_id"/>

          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }
}
