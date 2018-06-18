import React from "react"
import "./Gorget.css"

class Gorget extends React.Component {
  render() {
    const title = this.props.title.toLowerCase()
    const left = title.split(" ")[0]
    const right = title.split(" ")[1]

    return (
      <div className="logo">
        &#123; <span className="normal">{left}</span> {right} &#125;
      </div>
    )
  }
}

export default Gorget
