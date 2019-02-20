import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/* function Hello(props){
    return <h2>{props.data} {props.message.toUpperCase()}</h2>
}
class Greet extends Component {
    
    render(){
        const element = <div> <h1> {this.props.message}</h1> <Hello data="Hello from Component!!!!" message={this.props.message}/></div>
        return element;
    }
}
class App extends Component {
    render(){
        return <div>
            <Greet message="Welcome"/> 
            <Greet message="Good Bye"/> 
        </div>
    }
} */
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
