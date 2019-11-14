import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Add from './Add'
import Post from './Post'

export default class Dash extends Component {
  state = {
    posts: [],
    toggleAdd: false
  }

  toggle = () => {
    this.setState((prevState) => {
      return {
        toggleAdd: !prevState.toggleAdd
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Create a Post</button>
        <Post />
        {this.state.toggleAdd && <Add toggle={this.toggle} />}
      </div>
    )
  }
}