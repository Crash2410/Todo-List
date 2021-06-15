import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

  // 1-й способ не потерять this при событии
  // В событие передавать onClick={this.onLabelClick.bind(this)} 
  // 2-й способ не потерять this при событии
  // constructor() {
  //   super();
  //   this.onLabelClick = () => {
  //     console.log(`${this.props.label}`)
  //   }
  // }
  // 3-й способ не потерять this при событии
  onLabelClick = () => {
    console.log(`${this.props.label}`)
  }

  render() {
    const { label, important = false } = this.props;

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    return (
      <span className="todo-list-item">
        <span
          className="todo-list-item-label"
          style={style}
          onClick={this.onLabelClick}>
          {label}
        </span>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );

  }
}

