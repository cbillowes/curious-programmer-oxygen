import React, { Component } from "react"
import Link from "gatsby-link"
import UserLinks from "../UserLinks/Component"
import "./Footer.css"

class Footer extends Component {
  render() {
    const { config } = this.props
    const url = config.siteRss
    const copyright = config.copyright
    const siteUrl = config.siteUrl
    const title = config.siteTitle
    if (!copyright) {
      return null
    }
    return (
      <footer className="footer">
        <div className="notice-container">
          <h4>{copyright}</h4>
          <UserLinks config={config} labeled />
          <Link to={url}>
            <button>Subscribe</button>
          </Link>
          <div>
            Born from &#123; corporate <strong>programmer</strong>&#125;
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
