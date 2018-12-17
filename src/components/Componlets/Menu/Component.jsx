import React, { Component } from "react"
import "./Menu.css"

class Menu extends Component {
  render() {
    return (  
      <span onClick={this.props.toggle.bind(this)}
        className={(this.props.active ? "icon active" : "icon")}>
        <i className="menu"></i>
      </span>
    );
  }
}

export default Menu