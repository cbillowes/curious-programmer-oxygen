import React, { Component } from "react"
import "./Footer.css"

class Footer extends Component {
  render() {
    const { config } = this.props
    const copyright = config.copyright
    if (!copyright) {
      return null
    }
    return (
      <footer className="footer">
        <div className="notice-container">
          <h4>{copyright}</h4>
          <h4>
            Born from &#123; corporate <strong>programmer</strong>&#125;
          </h4>
        </div>
      </footer>
    )
  }
}

export default Footer
