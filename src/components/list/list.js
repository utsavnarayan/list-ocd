import React, { Component } from 'react';
import './list.scss';

class List extends Component {
  render() {
    return (
      this.props.items.map(item => {
        return <div key={item.year}>
          {item.year}</div>
      }
      )
    );
  }
}

export default List;
