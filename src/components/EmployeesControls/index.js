import React, { Component } from 'react';

import './style.scss';

const listData = {
  add: 'Добавить сотрудника',
  fire: 'Уволить сотрудника',
  transfer: 'Перевести сотрудника',
  change: 'Изменить сотрудника',
  logs: 'История изменений',
  certificates: 'Сертификаты сотрудника'
};

const listHTML = Object.keys(listData).map((key, i) => {
  return (
    <li className="controls-elem" key={ i } title={ listData[key] }>
      <a href="" className={`controls-btn ${key}`} role="button">
        <i className={`sprite sprite-${key}`}></i>
        { listData[key] }
      </a>
    </li>
  );
});

export default class EmployeesControls extends Component {
  onClick() {
    this.props.setName('Controls panel updated');
  }

  onControlsClick(e) {
    if (e.target.tagName === 'A') e.preventDefault();
  };

  render() {
    return (
      <div className="employees-controls" onClick={ this.onControlsClick }>
        <h1>{ this.props.name }</h1>
        <button onClick={ ::this.onClick }>Change name</button>

        <ul className="controls-list">
          { listHTML }
        </ul>
      </div>
    );
  }
}
