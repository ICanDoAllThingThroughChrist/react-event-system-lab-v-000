// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Components {

  p = () => {
    console.log('Entering password...')
  }

  render() => {
    return (
      <input type ="password" onKeyup={this.p}/>
    )
  }
}