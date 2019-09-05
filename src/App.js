import React, { Component } from 'react';

export default class App extends Component {
  state = { name: 'there' }
  render() {
    return (<div className="hello">Hello, {this.state.name}</div>);
  }
}
