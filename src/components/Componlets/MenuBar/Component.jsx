import React, { Component } from "react"
import "./MenuBar.css"

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Home"
    }
  }

  toggle = section => {
    this.setState({ section: section });
  }

  isSelected = section => {
    if (section === this.state.section) {
      return "menu-item selected";
    }
    return "menu-item";
  }

  render() {
    return (
      <div
        onClick={this.props.toggle.bind(this)}
        className={`menu-bar ${this.props.active ? "active" : ""}`}>
        <ul>
          <li 
            onClick={this.toggle.bind(this, "Home")} 
            className={`${this.isSelected("Home")}`}>
            <a data-href="/">Blog</a>
          </li>
          <li 
            onClick={this.toggle.bind(this, "About")}
            className={`${this.isSelected("About")}`}>
            <a data-href="/about">About</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuBar