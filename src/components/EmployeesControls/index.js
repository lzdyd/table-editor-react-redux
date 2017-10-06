import React, { Component } from 'react';

import ModalBox from './components/ModalBox/index';

import './style.scss';

const listData = {
  add: 'Добавить сотрудника',
  fire: 'Уволить сотрудника',
  transfer: 'Перевести сотрудника',
  change: 'Изменить сотрудника',
  logs: 'История изменений',
  certificates: 'Сертификаты сотрудника'
};

export default class EmployeesControls extends Component {
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
    }
  }

  onClick() {
    this.props.setName('Controls panel updated');
  }

  onControlsClick(e) {
    if (e.target.closest('.controls-btn')) e.preventDefault();
  };

  toggleModalBox(e, modalboxName) {
    this.setState({
      modalBoxesIsOpenStates: {
        [modalboxName]: !this.state.modalBoxesIsOpenStates[modalboxName]
      }
    });
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

          <ModalBox
            show={ this.state.modalBoxesIsOpenStates[key] }
            onClose={ ::this.toggleModalBox }
            modalboxName={ key[0].toUpperCase() + key.slice(1) }
            data={ (key === 'change') ? this.props.data : null }
            activeRow={ (key === 'change') ? this.props.activeRow : null }
          />
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
