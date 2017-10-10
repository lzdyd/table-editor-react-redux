import React, { Component } from 'react';

// import ModalBox from '../../containers/ModalBox';

import './style.scss';

const listData = {
  add: 'Добавить сотрудника',
  fire: 'Уволить сотрудника',
  transfer: 'Перевести сотрудника',
  change: 'Изменить сотрудника',
  logs: 'История изменений',
  certificates: 'Сертификаты сотрудника'
};

export default class EmployeesTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalBoxesIsOpenStates: {
        add: false,
        fire: false,
        transfer: false,
        change: false,
        logs: false,
        certificates: false
      }
    };
  }

  render() {
    const listHTML = Object.keys(listData).map((key, i) => {
      return (
        <li className="controls-elem" key={ i } title={ listData[key] }>
          <a
            href=""
            className={`controls-btn ${key} open-overlay`}
            role="button"
            onClick={ (e) => { ::this.toggleModalBox(e, key) } }>
            <i className={`sprite sprite-${key}`}></i>
            { listData[key] }
          </a>
        </li>
      );
    });

    return (
      <div className="employees-controls" onClick={ this.onControlsClick }>
        {/*        <h1>{ this.props.name }</h1>
        <button onClick={ ::this.onClick }>Change name</button>*/}

        <ul className="controls-list">
          { listHTML }
        </ul>
      </div>
    );
  }
}
