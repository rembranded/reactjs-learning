import React, {Component} from 'react';

export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marks: props.initialmark
        }
    }

    updateMarks() {
        if (this.state.marks + this.props.increment <=100) {
            this.setState((prevstate, props) => ({
                marks: prevstate.marks + props.increment
            }));
        }
        else {
            alert ("Marks cannot be greater than 100!");
        }
    }

    render() {
        return (
            <div>
                <hr />
                <p>Roll: {this.props.rollno}</p>
                <p>Name: {this.props.name}</p>
                <p>Name: {this.state.marks}</p>
                <button onClick = {() => this.updateMarks()}>Update Marks</button>
                <hr />
            </div>
        )
    }
}