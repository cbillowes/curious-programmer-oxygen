import React, { Component } from "react"
import classNames from "classnames"
import Link from "gatsby-link"
import "./ReadNext.css"

const ReadNextStory = props => {
  const { post } = props
  if (post) {
    const { path, title, excerpt } = post
    const classes = classNames("read-next-story", props.className);
    const left = (!props.className) ? "<<" : ""
    const right = (props.className === "prev") ? ">>" : ""
    return (
      <Link className={classes} to={path}>
        <section className="post">
          <h2>
            {left}
            &nbsp;
            {title}
            &nbsp;
            {right}
          </h2>
        </section>
      </Link>
    )
  }
  return null
}

class ReadNext extends Component {
  render() {
    const { next, prev } = this.props
    return (
      <aside className="read-next">
        <ReadNextStory post={next} />
        <ReadNextStory className="prev" post={prev} />
      </aside>
    )
  }
}

export default ReadNext