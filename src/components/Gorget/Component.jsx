import React from "react"
import Link from "gatsby-link"
import Navigation from "../Navigation/Component"
import "./Gorget.css"

class Gorget extends React.Component {
  render() {
    const title = this.props.title.toLowerCase()
    const splitTitle = title.split(" ")
    const left = splitTitle[0]
    const right = splitTitle[1]
    const section = this.props.section

    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 mx-auto">
              <div className="logo">
                <Link to="/">
                  &#123; <span className="normal-weight">{left}</span> {right}{" "}
                  &#125;
                </Link>
              </div>
              <div className="mobile-logo">
                <Link to="/">&#123; &#125;</Link>
              </div>
            </div>
          </div>
        </div>
        <Navigation section={section} />
      </div>
    )
  }
}

export default Gorget
