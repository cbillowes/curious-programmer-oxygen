import React, { Component } from "react"
import "./MenuBar.css"
import { Link } from "react-router-dom";

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.getSelected()
    };
  }

  getSelected = () => {
    if (window) {
      let url = window.location.href;
      if (url.endsWith("/")) {
        return "Home";
      }
      if (url.endsWith("/about")) {
        return "About";
      }
      if (url.endsWith("/credits")) {
        return "Credits";
      }
      if (url.endsWith("/privacy-policy")) {
        return "Privacy Policy";
      }
    }
  }
  
  select = (section) => {
    this.setState({selected: section});
  }

  selected = (section) => {
    if (this.state.selected === section) {
      return "menu-item selected";
    }
    return "menu-item";
  }

  render() {
    return (
      <div className={`menu-bar ${this.props.active ? "active" : ""}`}>
        <ul>
          <li
            className={this.selected("Home")}
            onClick={this.select.bind(this, "Home")}>
            <Link to="/">Blog</Link>
          </li>
          <li
            className={this.selected("About")} 
            onClick={this.select.bind(this, "About")}>
            <Link to="/about">About</Link>
          </li>
          {/* <li
            className={this.selected("Credits")} 
            onClick={this.select.bind(this, "Credits")}>
            <Link to="/credits">Credits</Link>
          </li>
          <li
            className={this.selected("Privacy Policy")} 
            onClick={this.select.bind(this, "Privacy Policy")}>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default MenuBar