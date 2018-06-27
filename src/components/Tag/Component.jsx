import React, { Component } from "react"
import Link from "gatsby-link"
import "./Tag.css"

class Button extends Component {
  render() {
    const data = this.props
    if (data.exclude) {
      return <span />
    }

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
