import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

  constructor() {
    super();
    this.state = {
      done: false,
      important: false
    };
  }

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
    this.setState(({done}) => {
      return { done: !done }
    });
  }

  onImportantClick = () => {
    this.setState(({important}) => {
      return { important: !important }
    });
  }

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = ['todo-list-item'];

    if (important) {
      classNames.push('important');
    }
    if (done) {
      classNames.push('done');
    }

    return (
      <span className={classNames.join(' ')}>
        <span
          className="todo-list-item-label"
          onClick={this.onLabelClick}>
          {label}
        </span>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onImportantClick}>
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

