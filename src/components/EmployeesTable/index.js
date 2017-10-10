import React, { Component } from 'react';

import EmployeesTableColumnsHeaders from './EmployeesTableColumnsHeaders/index.js';

import './style.scss';

export default class EmployeesTable extends Component {
  constructor(props) {
    super(props);

    /**
     * @description Component uses state to provide filtering
     * @property { object } data         - received data from REST API
     * @property { object } filteredData - data w/ applied filters
     * @property { object } filters      - a collection of applied filters
     * @property { DOM } sortedColumn    - hot fix
     */

    this.state = {
      data: null,
      filteredData: '',
      filters: {},
      sortedColumn: null
    };

    this.filterData = this.filterData.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.sortData = this.sortData.bind(this);
  }

  componentDidMount() {
    this.props.getAllEmployeesAPI();
  }

  onTableRowClick(id) {
    this.props.setNewActiveRow(id);
  }

  // Needs more tests; sometimes works incorrect
  filterData(text, field) {
    if (text) {
      this.state.filters[field] = text;
      this.setState({ filters: this.state.filters });
    } else {
      delete this.state.filters[field];
      this.setState({ filters: this.state.filters });
    }

    const filtersLength = Object.keys(this.state.filters).length;

    if (!filtersLength) {
      this.setState({ filteredData: null });
    } else if (filtersLength === 1) {
      const DOMSearchField = document.querySelector(`[data-field="${Object.keys(this.state.filters)}"]`);
      this.applyFilter(this.initialData, DOMSearchField.querySelector('input').value, Object.keys(this.state.filters));
    } else {
      for (let key in this.state.filters) {

        if (Object.prototype.hasOwnProperty.call(this.state.filters, key)) {
          this.applyFilter(this.state.filteredData, this.state.filters[key], key);
        }

      }
    }
  }

  applyFilter(initialData, text, field) {
    const data = (initialData.length) ? initialData : this.initialData;

    const filteredList = data.filter((item) => {
      return JSON.stringify(item[field]).toLowerCase().search(text.toLowerCase()) !== -1;
    });

    this.state.filteredData = filteredList;
    this.setState({
      data: filteredList
    });
  }

  // TODO: rewrite it without using DOM. Put information about sorted col in state
  sortData(e) {
    const type = e.target.getAttribute('data-field');
    const direction = (e.target.getAttribute('data-sort-state') === 'asc') ? 1 : -1;

    const data = this.state.filteredData || this.initialData;

    const sorted = Array.prototype.slice.call(data).sort((a, b) => {
      if (a[type] === b[type]) { return 0; }
      return a[type] > b[type] ? direction : direction * -1;
    });

    if (direction === 1) {
      e.target.setAttribute('data-sort-state', 'disc');
    } else {
      e.target.setAttribute('data-sort-state', 'asc');
    }

    this.setState({ filteredData: sorted });
  }


  render() {
    if (this.props.fetching) return <h1 className="loading">Loading</h1>;

    if (this.props.error) return <h1>Data is inapproachable</h1>;

    // For filtering
    this.initialData = this.props.data;

    const data = this.state.filteredData || this.initialData;

    // Creates table rows
    const tableData = data.map((item) => {
      const itemValues = Object.values(item);

      return (
        <div
          className={`table-row${((item.id === this.props.activeRow) ? ' selected' : '')}`}
          key={ item.id }
          data-key={ item.id }
          onClick={ () => { ::this.onTableRowClick(item.id) } }>
          {
            itemValues.map((cellData, key) => {
              if (typeof cellData === 'boolean') {
                cellData = cellData.toString();
              }

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
        <EmployeesTableColumnsHeaders
          data={ this.initialData }
          filterData={ this.filterData }
          sortData={ this.sortData }
        />
        {
          (tableData.length === 0) ? <div>Nothing found</div> : tableData
        }
      </div>
    );
  }
}
