import React, { Component } from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counters } = this.props;
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar{' '}
            <span className="badge padge-pill badge-primary">
              {counters.length > 0 ? counters.length : null}
            </span>
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
