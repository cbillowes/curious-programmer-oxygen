import React, { Component } from "react"
import Helmet from "react-helmet"
import Gorget from "../components/Gorget/Component"
import About from "../components/About/Component"
import config from "../../data/SiteConfig"

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <Gorget title={config.siteTitle} />
        <About />
      </div>
    )
  }
}

export default AboutPage
