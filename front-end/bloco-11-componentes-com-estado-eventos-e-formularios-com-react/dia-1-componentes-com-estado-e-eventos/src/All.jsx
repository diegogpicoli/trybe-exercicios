import React, { Component } from 'react'

class All extends Component {  

  

  render() {
    const { novaLista } = this.props
    
    return (
      <button onClick={ novaLista }>All</button>
    )
  }
}

export default All;
