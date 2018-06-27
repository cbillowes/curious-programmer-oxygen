import React, { Component } from "react"
import classNames from "classnames"
import Link from "gatsby-link"
import "./ReadNext.css"

function getStoryText(title, className, prettify) {
  if (prettify) return title;

  if (className === "prev") return title + " >>"
  return "<< " + title
}

const ReadNextStory = props => {
  const { post, prettify } = props
  if (post) {
    const { path, title, excerpt, cover } = post
    const classes = (prettify) ? classNames("read-next-story", props.className) : ""
    const background = (prettify) ? `url(${cover})`: ""

    return (
      <Link className={classes} to={path} style={{ backgroundImage: background }}>
        <section className="post">
          <h2>{getStoryText(title, props.className, prettify)}</h2>
          <p>{excerpt}</p>
        </section>
      </Link>
    )
  }
  return null
}

class ReadNext extends Component {
  render() {
    const { prettify, next, prev } = this.props
    const className = (prettify) ? "read-next" : "read-next-compact"
    return (
      <aside className={className}>
        <ReadNextStory prettify={prettify} post={next} />
        <ReadNextStory className="prev" prettify={prettify} post={prev} />
      </aside>
    )
  }
}

export default ReadNext