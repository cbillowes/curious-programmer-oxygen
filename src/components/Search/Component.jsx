import React, { Component } from "react"
import "./Search.css"

class Search extends Component {
  render() {
    return (
      <span
        onClick={this.props.toggle.bind(this)}
        className={this.props.active ? "icon active" : "icon"}
      >
        <i className="search" />
      </span>
    )
  }
}

export default Search
