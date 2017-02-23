import React, { Component } from 'react'
export default class SearchBar extends Component {
  constructor(props) {
    super(props)
  }
  updateValue(event) {
    this.props.onTermChange(event.target.value)
  }
  render() {
    const inputStyle = { width: "500px", height: "25px", border: "0.5px solid gray" }
    return (
      <div>
        <h1 style={{ color: "blue" }}>No Ads Youtube!!!</h1>
        <input style={inputStyle} onChange={this.updateValue.bind(this)} />
      </div>
    )
  }

}

