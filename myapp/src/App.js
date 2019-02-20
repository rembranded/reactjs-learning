import React, { Component } from 'react';
import './App.css';
import Student from './Student';
import BrowserRouter, { Route } from 'react-router-dom';
// import { Home , About } from 'RoutingDemo';

class App extends Component {
  render() {
    const message = "Hello from App";
    return (
      <div className="App">
        <p> This is from the App component </p>
        <p>{message}</p>
        <Student rollno={100} name="Sanjay" initialmark={60} increment={10}/>
        <Student rollno={101} name="Sunil" initialmark={25} increment={20}/>

        {/* <BrowserRouter>
          <div>
            <Route path='/' component={Home}>Home</Route>
            <Route path='/about' component={About}>About</Route>
          </div>
        </BrowserRouter> */}

      </div>
    );
  }
}

export default App;