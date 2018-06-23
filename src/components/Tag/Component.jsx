import React, { Component } from "react"
import Link from "gatsby-link"
import "./Tag.css"

class Button extends Component {
  render() {
    const data = this.props
    return (
      <Link
        to={data.url}
        className="button badge badge-light"
      >
        {data.title}
      </Link>
    )
  }
}

export default Button
