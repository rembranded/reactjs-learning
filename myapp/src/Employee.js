import React, {Component} from 'react';

export default class Employee extends Component {
    constructor() {
        super();
        this.state = {
            id: 1,
            name: "Sam",
            dept: 10
        }
    }

    render() {
        return (
            <div>
                <ul>
                    <li>ID: ${this.state.id}</li>
                    <li>Name: ${this.state.name}</li>
                    <li>Department: ${this.state.dept}</li>
                </ul>
            </div>
        )
    }
}