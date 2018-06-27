import React from "react"
import Link from "gatsby-link"
import "./Gorget.css"

class Gorget extends React.Component {
  render() {
    const title = this.props.title.toLowerCase()
    const splitTitle = title.split(" ")
    const left = splitTitle[0]
    const right = splitTitle[1]

    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 mx-auto">
              <div className="logo">
                <Link to="/">
                  &#123; <span className="normal-weight">{left}</span> {right} &#125;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gorget
