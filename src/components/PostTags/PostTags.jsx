import React, { Component } from "react"
import _ from "lodash"
import Button from "../Button/Component"
import Link from "gatsby-link"

class PostTags extends Component {
  render() {
    const { tags } = this.props
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <Button
              key={tag}
              title={tag}
              url={`/tags/${_.kebabCase(tag)}`}
            />
          ))}
      </div>
    )
  }
}

export default PostTags
