import React, { Component } from 'react'

export default class Post extends Component {
  state = {
    title: '',
    imgUrl: '',
    content: '',
    editToggle: false
  }

  toggle = () => {
    this.setState((prevState) => ({ editToggle: !prevState.editToggle }))
  }

  render() {
    const { editToggle } = this.state
    return (
      <div>
        {editToggle ? <input value={this.state.title} /> : <h2>{this.state.title} </h2>}
        {editToggle ? <input /> : <p>{this.state.content}</p>}
        <img src={this.state.imgUrl} alt="" />
        <button onClick={this.toggle}>{editToggle ? 'Save' : 'Edit'}</button>
      </div>
    )
  }
}