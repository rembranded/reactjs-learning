import React, {Component} from 'react';

export default class Clock extends Component {
    
    intervalid;

    constructor() {
        super();
        this.state = {
            time: new Date()
        }
    }

    tick() {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount() {
        this.intervalid = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalid);
    }

    render() {
        return (
            <div>
                <hr />
                <h3>Clock Component</h3>
                <h3>{this.state.time.toLocaleString()}</h3>
                <hr />
            </div>
        )
    }
}