import React, { Component } from "react"

class Credit extends Component {
  render() {
    const { linkTo, linkText, description } = this.props
    return (
      <section className="credit">
        {description}{" "}
        <a
          href={linkTo}
          className="button badge badge-light"
          target="_blank"
          no-follow>
          {linkText}
        </a>
      </section>
    )
  }
}

export default Credit
