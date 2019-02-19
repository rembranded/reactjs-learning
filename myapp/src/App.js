import React, { Component } from 'react';
import './App.css';
import Student from './Student';
import RoutingDemo from './RoutingDemo';

class App extends Component {
  render() {
    const message = "Hello from App";
    return (
      <div className="App">
        <p> This is from the App component </p>
        <p>{message}</p>
        <Student rollno={100} name="Sanjay" initialmark={60} increment={10}/>
        <Student rollno={101} name="Sunil" initialmark={25} increment={20}/>
        <RoutingDemo />
      </div>
    );
  }
}

export default App;