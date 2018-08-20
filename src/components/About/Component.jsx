import React, { Component } from "react"
import Introduction from "./Introduction"
import Year_2018 from "./2018-Year"
import Year_2017 from "./2017-Year"
import Year_2016 from "./2016-Year"
import Year_2006 from "./2006-Year"
import Year_2005 from "./2005-Year"
import "./About.css"

class About extends Component {
  render() {
    return (
      <div className="about">
        <Introduction />
        <Year_2018 />
        <Year_2017 />
        <Year_2016 />
        <Year_2006 />
        <Year_2005 />
      </div>
    )
  }
}

export default About
