import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{display:'flex',background:'blue',padding:'0.5'}}>
        <h1>Movies</h1>
        <h2 style={{marginLeft:'2rem',marginTop:'1rem'}}>favourites</h2>
      </div>
    )
  }
}
