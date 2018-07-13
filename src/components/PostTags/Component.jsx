import React, { Component } from "react"
import _ from "lodash"
import Tag from "../Tag/Component"

class PostTags extends Component {
  render() {
    const { tags } = this.props
    const excludeTag = this.props.excludeTag
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <Tag
              key={tag}
              title={tag}
              url={`/tags/${_.kebabCase(tag)}`}
              exclude={tag === excludeTag}
            />
          ))}
      </div>
    )
  }
}

export default PostTags
