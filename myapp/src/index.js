import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Clock from './Clock';
import ArrayDemo from './ArrayDemo';
import Container from './Container';
import AxiosDemo from './AxiosDemo';
import RoutingDemo from './RoutingDemo';
import FormsDemo from './FormsDemo';
import ReduxDemo from './ReduxDemo';

// DOM substitution
ReactDOM.render(<h1 className = "heading">Hello, World!</h1>, document.getElementById('root'));

// DOM substitution using a variable
const element = <h3>Another line of text</h3>;
ReactDOM.render(element, document.getElementById('div2'));

// Creating an employee object
const emp = {
    id: 1,
    name: 'Guru',
    dept: 10,
    photo: 'logo.svg'
}

const empdisp = <div><h2>Employee Details: </h2>ID: {emp.id} <br />Name: {emp.name}<br />Dept: {emp.dept}</div>
ReactDOM.render(empdisp,document.getElementById('div3'));

// Greet component with an argument. Components are just functions
function Greet2(p) {
    return <h5>{p.message}</h5>
}
ReactDOM.render(<div><Greet2 message="Hello"/><Greet2 message="Goodbye!"/></div>, document.getElementById('div4'));

ReactDOM.render(<App />, document.getElementById('div5'));

ReactDOM.render(<Clock />, document.getElementById('div6'));

ReactDOM.render(<ArrayDemo />, document.getElementById('div7'));

ReactDOM.render(<Container />, document.getElementById('div8'));

ReactDOM.render(<AxiosDemo />, document.getElementById('div9'));

// ReactDOM.render(<RoutingDemo />, document.getElementById('div10'));

ReactDOM.render(<FormsDemo />, document.getElementById('div10'));

ReactDOM.render(<ReduxDemo />, document.getElementById('div11'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();