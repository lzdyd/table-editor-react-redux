import React from 'react';

import './index.scss';

// import EmployeesSearchPlugin from '../EmployeesSearchPlugin/index';

export default ({ data, filterData, sortData }) => {
/*  let tableHeaders = Object.create(Object.keys(data[0]));

  tableHeaders = tableHeaders.map((item, i) => {
    return (
      <div className="table-cell table-cell-headers sorted-column"
           key={ i }
           data-field={ item }
           data-sort-state="asc"
           onClick={ sortData }>
        {item}
        <br />
        <EmployeesSearchPlugin filter={ filterData } field={ item } />
      </div>
    );
  });*/

  const tableHeadersTitles = Object.keys(data[0]);
  const tableHeaders = tableHeadersTitles.map((item, i) => {
    return (
      <div className="table-cell table-cell-headers"
        key={ i }
        data-field={ item }>
        { item }
      </div>
    );
  });

  return (
    <div className="table-row table-row-headers">
      { tableHeaders }
    </div>
  );
};
