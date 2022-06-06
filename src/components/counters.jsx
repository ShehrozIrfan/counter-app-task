import React, { Component } from 'react';
import Counter from '../components/counter';

class Counters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onReset, onIncrement, onDecrement, onDelete, counters } =
      this.props;
    return (
      <div>
        {counters.length > 0 && (
          <button className="btn btn-primary m-4" onClick={onReset}>
            Reset
          </button>
        )}

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
