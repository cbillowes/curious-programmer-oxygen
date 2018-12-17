import React, { Component } from "react"
import "./Search.css"

class SearchBar extends Component {
  toggle = (active) => {
    console.log("Search toggle: " + active)
  }

  render() {
    return (  
      <span onClick={() => {
        this.props.toggle();
        this.toggle(this.props.active) }}
        className={(this.props.active ? "icon active" : "icon")}>
        <i className="search"></i>
      </span>
    );
  }
}

export default SearchBar