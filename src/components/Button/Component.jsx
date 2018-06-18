import React, { Component } from "react"
import "./Button.css"

class Button extends Component {
  render() {
    const data = this.props
    return (
      <a
        href={data.url}
        class="button badge badge-light"
      >
        {data.title}
      </a>
    )
  }
}

export default Button
