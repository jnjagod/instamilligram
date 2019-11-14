import React, {Component} from 'react'

export default class Post extends Component {
  state = {
    title: '',
    imgUrl: '',
    content: '',
    editToggle: false
  }

  render() {
    return (
      <div>
        Post.js
      </div>
    )
  }
}