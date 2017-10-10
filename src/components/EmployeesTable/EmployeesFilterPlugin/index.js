import React from 'react';

export default ({ filter, field }) => {
  const dataFilter = (e) => {
    filter(e.target.value.trim(), field);
  };

  return (
    <input type="text" onChange={ dataFilter } />
  );
};
