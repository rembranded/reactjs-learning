import React, { Component } from 'react';
import axios from 'axios';

export class AxiosDemo extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts", {params: {id: 29, userId: 3}})
        .then(resp => this.setState({posts: resp.data}))
        .catch(err => console.log(err));
    }

  render() {
    return (
      <div>
        <hr />
        <h3>AxiosDemo Component</h3>
        <ul>
            {this.state.posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
        <hr />
      </div>
    )
  }
}

export default AxiosDemo
