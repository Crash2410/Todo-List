import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label, onDeleted, onToggleDone, onToggleImportant, important, done }) => {


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
  // onLabelClick = () => {
  //   this.setState(({ done }) => {
  //     return { done: !done }
  //   });
  // }

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
        onClick={onToggleDone}>
        {label}
      </span>

      <button type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );


}

export default TodoListItem;