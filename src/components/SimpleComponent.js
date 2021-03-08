// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component{
  state = {
    mood: 'happy'
  }

  changeMood = () => {
    this.setState(prevState => {
      return prevState.mood === 'happy' ? {mood: 'sad'} : {mood: 'happy'}
    })
  }

  render(){
    return(
      <div onClick={this.changeMood} >{this.state.mood}</div>
    )
  }
}