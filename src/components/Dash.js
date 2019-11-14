import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Add from './Add'
import Post from './Post'

export default class Dash extends Component {
  state = {
    posts: [],
    toggleAdd: false
  }

  render() {
    return (
      <div>
        Dash.js
        <Add />
        <Post />
      </div>
    )
  }
}