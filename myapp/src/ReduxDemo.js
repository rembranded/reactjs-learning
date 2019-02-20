import React, { Component } from 'react';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

export default class ReduxDemo extends Component {

    state = {
        course: "Node"
    }
  render() {
    return (
      <div>
          <hr />
          <h3>Redux Demo</h3> 
          {this.state.course}
          <hr />
      </div>
    )
  }
}
