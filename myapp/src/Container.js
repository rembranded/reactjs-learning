import React, { Component } from 'react'

const higherOrderComponent = (BaseComponent) => class extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({count: this.state.count+1});
    }

    decrement() {
        this.setState({count: this.state.count-1});
    }

  render() {
    return (
      <div>
        <hr />
        <h3> Higher order Component Example </h3>
        <BaseComponent count={this.state.count} increment={()=>this.increment()} decrement={() => this.decrement()}/>
        <h2>This is from a Higher order Component</h2>
        <hr />
      </div>
    )
  }
}

function Button(props) {
    return (
    <div>
        <p>This is a button</p>
        Count: {props.count} &nbsp; &nbsp;
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
    </div>
    )
}

/* function Label() {
    return <p>This is a label</p>
} */

const NewButton = higherOrderComponent(Button);
// const NewLabel = higherOrderComponent(Label);

export default function Container() {
    return (
        <div>
            <NewButton />
            {/* <NewLabel /> */}
        </div>
    )
}