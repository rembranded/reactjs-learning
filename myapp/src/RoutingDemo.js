import React, { Component } from 'react'
import {Link} from 'react-router-dom';

const Home = () => class extends Component {
  render() {
    return (
      <div>
        This is Home Component
      </div>
    )
  }
}

const About = () => class extends Component{
    render() {
      return (
        <div>
          This is About Component
        </div>
      )
    }
}

export default class RoutingDemo extends Component {
    render() {
      return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
      )
    }
}