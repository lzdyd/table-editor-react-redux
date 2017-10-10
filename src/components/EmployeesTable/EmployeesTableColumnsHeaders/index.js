import React from 'react';

import './index.scss';

import EmployeesFilterPlugin from '../EmployeesFilterPlugin/index';

export default ({ data, filterData, sortData }) => {
  const onHeaderClick = (e) => {
    sortData(e);
  };

  const tableHeadersTitles = Object.keys(data[0]);
  const tableHeaders = tableHeadersTitles.map((item, i) => {
    return (
      <div className="table-cell table-cell-headers"
        key={ i }
        data-field={ item }>
        <div
          className="fieldname"
          data-field={ item }
          data-sort-state="asc"
          onClick={ (e) => onHeaderClick(e) }>
          { item }
        </div>
        <EmployeesFilterPlugin filter={ filterData } field={ item } />
      </div>
    );
  });

  return (
    <div className="table-row table-row-headers">
      { tableHeaders }
    </div>
  );
};
