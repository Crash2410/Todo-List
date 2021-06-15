import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

  constructor() {
    super();
    this.state = {
      done: false
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
    this.state.done ? this.setState({ done: false }) : this.setState({ done: true });
  }

  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;

    let classNames = 'todo-list-item';
    done ? classNames += ' done' : classNames = 'todo-list-item';


    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    return (
      <span className={classNames}>
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

