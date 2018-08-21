import React, { Component } from "react"
import "./Navigation.css"

class Navigation extends Component {
  state = {
    open: false,
    className: "closed"
  }

  toggle = () => {
    if (this.state.open) {
      this.close()
    } else {
      this.open()
    }
  }

  handleOnClick = evt => {
    evt.stopPropagation()
    if (this.state.open) {
      this.close()
    } else {
      this.open()
    }
  }

  handleOnClose = evt => {
    evt.stopPropagation()
    this.close()
  }

  open = () => {
    this.setState({
      open: true,
      className: "open"
    })
  }

  close = () => {
    this.setState({
      open: false,
      className: "closed"
    })
  }

  toggleCurrent = section => {
    if (section === this.props.section) {
      return "nav-current"
    }
    return ""
  }

  render() {
    return (
      <div>
        <h3 className="nav-title" onClick={this.toggle}>
          Menu
        </h3>
        <div className={`nav ${this.state.className}`}>
          <ul>
            <li className={`${this.toggleCurrent("Home")}`}>
              <a href="/">
                Blog
              </a>
            </li>
            <li className={`${this.toggleCurrent("About")}`}>
              <a href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navigation
