import React, { Component } from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  addBadgeClass = () => {
    let classes = this.props.counter.value <= 0 ? 'warning' : 'primary';
    return classes;
  };

  render() {
    let classes = 'badge badge-pill badge-';
    classes += this.addBadgeClass();
    const { counter, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div>
        <span className={classes}>
          {counter.value <= 0 ? 'Zero' : counter.value}
        </span>
        <button
          className="btn btn-secondary m-2"
          onClick={() => onIncrement(counter)}
        >
          <i className="fa fa-plus-circle" aria-hidden="true"></i>
        </button>
        <button
          className="btn btn-secondary m-2"
          onClick={() => onDecrement(counter)}
          disabled={counter.value <= 0 ? true : false}
        >
          <i className="fa fa-minus-circle" aria-hidden="true"></i>
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => onDelete(counter.id)}
        >
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export default Counter;
