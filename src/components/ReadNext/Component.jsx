import React, { Component } from "react"
import classNames from "classnames"
import Link from "gatsby-link"
import PostMeta from "../PostMeta/Component"
import "./ReadNextCompact.css"
import "./ReadNext.css"

function getStoryText(title, className, prettify) {
  if (prettify) return title

  if (className === "prev") return title + " >>"
  return "<< " + title
}

function getOrientation(className) {
  if (className === "prev") return "right"
  return "left"
}

const ReadNextStory = props => {
  const { post, prettify } = props
  if (post) {
    const { path, title, excerpt, date, timeToRead } = post
    const classes = prettify
      ? classNames("read-next-story", props.className)
      : ""
    const orientation = getOrientation(props.className)
    const storyText = getStoryText(title, props.className, prettify)

    return (
      <Link className={classes} to={path}>
        <span className="post">
          <h2>{storyText}</h2>
          <PostMeta
            date={date}
            timeToRead={timeToRead}
            orientation={orientation}
          />
          <p>{excerpt}</p>
        </span>
      </Link>
    )
  }
  return null
}

class ReadNext extends Component {
  render() {
    const { prettify, next, prev } = this.props
    const className = prettify ? "read-next" : "read-next-compact"
    return (
      <aside className={className}>
        <ReadNextStory prettify={prettify} post={next} />
        <ReadNextStory className="prev" prettify={prettify} post={prev} />
      </aside>
    )
  }
}

export default ReadNext
