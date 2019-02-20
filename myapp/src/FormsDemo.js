import React, { Component } from 'react'

export default class FormsDemo extends Component {
    constructor() {
        super();
        this.state = {
            username: 'admin',
            username2: 'jingli',
            username3: 'lowercasename'
        }
    }

    handleChange(e) {
        this.setState({username: e.target.value});
    }

    handleSubmit(e) {
        alert("Welcome " + this.state.username);
        e.preventDefault();
    }

    handleVanakkam(e) {
        alert("Vanakkam " + this.refs.textfield.value);
        e.preventDefault();
    }

    handleChange2(e) {
        this.setState({username2: e.target.value});
    }

    handleClickUpper(e) {
        const element = this.refs.username3;
        element.value = element.value.toUpperCase();
        e.preventDefault();
    }

    handleClickLower(e) {
        const element = this.refs.username3;
        element.value = element.value.toLowerCase();
        e.preventDefault();
    }

  render() {
    return (
      <div>
          <hr />
          <h3>Forms Component</h3>
          <form>
            <input type="text" onChange={(e) => this.handleChange(e)} defaultValue={this.state.username} /> {this.state.username} &nbsp; &nbsp;
            <input type="submit" onClick={(e) => this.handleSubmit(e)} value="Submit" />
            <br />
            <input type="text" ref="textfield" onChange={(e) => this.handleChange2(e)} defaultValue={this.state.username2} /> {this.state.username2} &nbsp; &nbsp;
            <input type="submit" onClick={(e) => this.handleVanakkam(e)} value="Vanakkam" />
            <br />
            <input type="text" ref="username3" defaultValue={this.state.username3} /> &nbsp;
            <input type="submit" onClick={(e) => this.handleClickUpper(e)} value="Upper" /> &nbsp;
            <input type="submit" onClick={(e) => this.handleClickLower(e)} value="Lower" />
          </form>
          <hr />
      </div>
    )
  }
}
