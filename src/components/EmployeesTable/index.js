import React, { Component } from 'react';

import EmployeesTableHeaders from './components/EmployeesTableHeaders';

import './style.scss';

export default class EmployeesTable extends Component {
  componentDidMount() {
    this.props.getAllEmployees();
  }

  onTableRowClick(id) {
    this.props.setNewActiveRow(id);
  }

  render() {
    const { fetching, error } = this.props;

    if (fetching) return <h1>Loading...</h1>;

    if (error) return <h1>Data is inapproachable</h1>;
    // For filtering
    this.initialData = this.props.data;

    // Separated component ain't gonna work cause of 'Div' wrapping
    const tableData = this.initialData.map((item) => {
      const itemValues = Object.values(item);

      return (
        <div
          className={`table-row${((item.id === this.props.activeRow) ? ' selected' : '')}`}
          key={ item.id }
          data-key={ item.id }
          onClick={ () => { ::this.onTableRowClick(item.id) } }>
          {
            itemValues.map((cellData, key) => {
              return (
                <div className="table-cell" key={ key }>{ cellData }</div>
              );
            })
          }
        </div>
      );
    });

    return (
      <div className="table employees-table">
        <EmployeesTableHeaders data={ this.initialData } />
        { tableData }
      </div>
    );
  }
}
